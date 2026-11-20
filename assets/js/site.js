(function () {
  "use strict";

  var root = document.documentElement;
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Theme toggle ---------- */
  var darkQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function currentTheme() {
    var t = root.getAttribute("data-theme");
    if (t === "light" || t === "dark") return t;
    return darkQuery && darkQuery.matches ? "dark" : "light";
  }

  var themeBtn = $("#theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- Scroll-driven UI: header border, back-to-top, reading progress ---------- */
  var header = $("#site-header");
  var toTop = $("#to-top");
  var progress = $("#read-progress");
  var ticking = false;

  function onScroll() {
    var y = window.pageYOffset || root.scrollTop;
    if (header) header.classList.toggle("is-scrolled", y > 4);
    if (toTop) toTop.classList.toggle("is-visible", y > 600);
    if (progress) {
      var max = root.scrollHeight - window.innerHeight;
      progress.style.transform = "scaleX(" + (max > 0 ? Math.min(1, y / max) : 0) + ")";
    }
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- Expandable panels (Abstract / BibTeX) ---------- */
  function setPanel(btn, open) {
    var panel = document.getElementById(btn.getAttribute("aria-controls"));
    if (!panel) return;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    panel.hidden = !open;
    var pub = btn.closest(".pub");
    if (pub) {
      pub.classList.toggle("is-open", $$("[data-panel][aria-expanded='true']", pub).length > 0);
    }
  }

  $$("[data-panel]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") !== "true";
      // A click turns a hover preview into a normal toggle; closing it by
      // click keeps hover from reopening it until the pointer leaves.
      delete btn.dataset.hoverOpen;
      if (!open) btn.dataset.hoverSuppress = "1";
      setPanel(btn, open);
    });
  });

  /* ---------- Hover preview of abstracts (mouse/trackpad only) ---------- */
  var canHover = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (canHover) {
    var absBtnOf = function (pub) {
      return $("[data-panel][aria-controls$='-abs']", pub);
    };
    var closeHoverPreview = function (btn) {
      if (btn && btn.dataset.hoverOpen) {
        delete btn.dataset.hoverOpen;
        setPanel(btn, false);
      }
    };
    var enterTimer = null;

    $$(".pub").forEach(function (pub) {
      var btn = absBtnOf(pub);
      var leaveTimer = null;

      pub.addEventListener("mouseenter", function () {
        clearTimeout(leaveTimer);
        clearTimeout(enterTimer);
        enterTimer = setTimeout(function () {
          // Collapse other previews, keeping this entry under the pointer
          // even if a preview above it shrinks.
          var before = pub.getBoundingClientRect().top;
          $$("[data-panel][data-hover-open]").forEach(function (b) {
            if (b !== btn) closeHoverPreview(b);
          });
          var shift = pub.getBoundingClientRect().top - before;
          if (shift) window.scrollBy({ top: shift, behavior: "instant" });
          if (!btn || btn.dataset.hoverSuppress || btn.getAttribute("aria-expanded") === "true") return;
          btn.dataset.hoverOpen = "1";
          setPanel(btn, true);
        }, 200);
      });

      pub.addEventListener("mouseleave", function () {
        clearTimeout(enterTimer);
        if (!btn) return;
        delete btn.dataset.hoverSuppress;
        leaveTimer = setTimeout(function () {
          closeHoverPreview(btn);
        }, 350);
      });
    });
  }

  /* ---------- Copy to clipboard ---------- */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy") ? resolve() : reject();
      } catch (e) {
        reject(e);
      } finally {
        document.body.removeChild(ta);
      }
    });
  }

  $$("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var src = $(btn.getAttribute("data-copy"));
      if (!src) return;
      var label = btn.querySelector("span");
      copyText(src.textContent || "").then(function () {
        btn.classList.add("is-copied");
        if (label) label.textContent = "Copied";
        setTimeout(function () {
          btn.classList.remove("is-copied");
          if (label) label.textContent = "Copy";
        }, 1800);
      }).catch(function () {
        if (label) label.textContent = "Press ⌘C";
        var range = document.createRange();
        range.selectNodeContents(src);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      });
    });
  });

  /* ---------- Publication filter + search ---------- */
  var toolbar = $("[data-pub-toolbar]");
  var list = $("[data-pub-list]");

  if (toolbar && list) {
    var filterBtns = $$("[data-filter]", toolbar);
    var search = $("[data-pub-search]", toolbar);
    var pubs = $$(".pub", list);
    var years = $$("[data-pub-year]", list);
    var empty = $("[data-pub-empty]", list);
    var activeType = "all";

    var apply = function () {
      var terms = (search.value || "").toLowerCase().trim().split(/\s+/).filter(Boolean);
      var shown = 0;
      pubs.forEach(function (el) {
        var hay = el.getAttribute("data-search") || "";
        var okType = activeType === "all" || el.getAttribute("data-type") === activeType;
        var okText = terms.every(function (t) { return hay.indexOf(t) !== -1; });
        el.hidden = !(okType && okText);
        if (!el.hidden) shown++;
      });
      years.forEach(function (y) {
        y.hidden = $$(".pub:not([hidden])", y).length === 0;
      });
      if (empty) empty.hidden = shown !== 0;

      try {
        var url = new URL(window.location.href);
        if (activeType !== "all") url.searchParams.set("type", activeType); else url.searchParams.delete("type");
        if (search.value.trim()) url.searchParams.set("q", search.value.trim()); else url.searchParams.delete("q");
        window.history.replaceState(null, "", url.pathname + url.search + url.hash);
      } catch (e) {}
    };

    var setType = function (type) {
      activeType = type;
      filterBtns.forEach(function (b) {
        var on = b.getAttribute("data-filter") === type;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      apply();
    };

    filterBtns.forEach(function (b) {
      b.addEventListener("click", function () { setType(b.getAttribute("data-filter")); });
    });
    search.addEventListener("input", apply);
    search.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { search.value = ""; apply(); }
    });

    // "/" focuses the search box
    document.addEventListener("keydown", function (e) {
      var tag = (e.target.tagName || "").toLowerCase();
      if (e.key === "/" && tag !== "input" && tag !== "textarea" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        search.focus();
      }
    });

    // Restore state from the URL (?type=journal&q=exoskeleton)
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get("q")) search.value = params.get("q");
      var t = params.get("type");
      if (t && filterBtns.some(function (b) { return b.getAttribute("data-filter") === t; })) {
        setType(t);
      } else if (search.value) {
        apply();
      }
    } catch (e) {}
  }

  /* ---------- Deep link to a publication (#pub-...) ---------- */
  if (window.location.hash.indexOf("#pub-") === 0) {
    var target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    if (target && target.classList.contains("pub")) {
      target.classList.add("is-target");
      var absBtn = $("[data-panel]", target);
      if (absBtn) setPanel(absBtn, true);
    }
  }

  /* ---------- Figure lightbox ---------- */
  var lightbox = $("#lightbox");
  if (lightbox) {
    var lbImg = $(".lightbox__img", lightbox);
    var lbCap = $(".lightbox__caption", lightbox);
    var lbClose = $(".lightbox__close", lightbox);
    var lastFocus = null;

    var openLightbox = function (img) {
      var fig = img.closest("figure");
      var cap = fig ? fig.querySelector("figcaption") : null;
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || "";
      lbCap.textContent = cap ? cap.textContent.trim() : "";
      lbCap.hidden = !lbCap.textContent;
      lastFocus = document.activeElement;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      lbClose.focus();
    };

    var closeLightbox = function () {
      lightbox.hidden = true;
      lbImg.removeAttribute("src");
      document.body.style.overflow = "";
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    };

    $$(".pp-figure img").forEach(function (img) {
      img.setAttribute("tabindex", "0");
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", "Enlarge figure" + (img.alt ? ": " + img.alt : ""));
      img.addEventListener("click", function () { openLightbox(img); });
      img.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(img); }
      });
    });

    lightbox.addEventListener("click", function (e) {
      if (e.target !== lbImg) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.hidden && (e.key === "Escape" || e.key === "Tab")) {
        if (e.key === "Escape") closeLightbox();
        else { e.preventDefault(); lbClose.focus(); }
      }
    });
  }

  /* ---------- Reveal on scroll ---------- */
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealEls = $$(".home .section, .pp-section, .pub-year, .talks");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.04 });
    revealEls.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) return; // already on screen: leave as-is
      el.classList.add("reveal");
      io.observe(el);
    });
  }
})();
