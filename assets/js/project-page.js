(function () {
  "use strict";

  var scrollBtn = document.getElementById("pp-scroll-top");
  if (scrollBtn) {
    window.addEventListener(
      "scroll",
      function () {
        if (window.pageYOffset > 320) {
          scrollBtn.classList.add("is-visible");
        } else {
          scrollBtn.classList.remove("is-visible");
        }
      },
      { passive: true }
    );
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  var copyBtn = document.getElementById("pp-copy-bibtex");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var targetId = copyBtn.getAttribute("data-target");
      var el = document.getElementById(targetId);
      if (!el) return;

      var text = el.textContent || "";
      var label = copyBtn.querySelector(".pp-copy-label");

      function done() {
        copyBtn.classList.add("is-copied");
        if (label) label.textContent = "Copied";
        setTimeout(function () {
          copyBtn.classList.remove("is-copied");
          if (label) label.textContent = "Copy";
        }, 2000);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(fallback);
      } else {
        fallback();
      }

      function fallback() {
        var ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
          done();
        } finally {
          document.body.removeChild(ta);
        }
      }
    });
  }
})();
