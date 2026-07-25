---
# =============================================================================
# Academic project page (Continual Online Personalization style)
# Docs: /PROJECT_PAGE.md
# Reference: https://changseob-song.github.io/continual-online-personalization/
# =============================================================================
layout: project-page
title: "Your Paper or Project Title Goes Here"
permalink: /projects/placeholder/
description: "One-sentence summary for SEO and social previews. Replace this."
keywords:
  - biomechanics
  - exoskeleton
  - online adaptation
year: 2026
# teaser: /images/projects/placeholder/teaser.png
# pdf_url: https://arxiv.org/pdf/XXXX.XXXXX

# Optional short line under the title in the dark hero
# summary: "A one-line hook that sits under the title."

authors:
  - name: First Author
    url: https://example.com/author1
  - name: Second Author
    url: https://example.com/author2

affiliations: "Carnegie Mellon University"

links:
  - label: Paper
    url: https://arxiv.org/pdf/XXXX.XXXXX
    icon: paper
  - label: arXiv
    url: https://arxiv.org/abs/XXXX.XXXXX
    icon: arxiv
  # - label: Code
  #   url: https://github.com/your-org/your-repo
  #   icon: github

# Hero video (renders above highlights). Path under images/ or absolute URL.
# presentation_video: /images/projects/placeholder/presentation.mp4
presentation_video_title: "Presentation video"
show_presentation_placeholder: true

# Three highlight cards (like "Why this matters")
highlights_title: "Why this matters"
highlights:
  - icon: rotate
    title: "Highlight one"
    text: "Replace with a short benefit or contribution statement."
  - icon: project-diagram
    title: "Highlight two"
    text: "Replace with a short benefit or contribution statement."
  - icon: shield-alt
    title: "Highlight three"
    text: "Replace with a short benefit or contribution statement."

# Stat strip + optional results figure (rendered after the body)
stats_title: "Main results"
stats:
  - value: "XX%"
    label: "placeholder metric vs. baseline"
  - value: "XX%"
    label: "placeholder metric vs. baseline"
  - value: "~Xs"
    label: "placeholder latency or timing metric"
# stats_figure: /images/projects/placeholder/main_results.png
# stats_caption: "Describe the main results figure."

bibtex: |
  @article{lastname2026placeholder,
    title={Your Paper or Project Title Goes Here},
    author={Author, First and Author, Second},
    journal={arXiv preprint arXiv:XXXX.XXXXX},
    year={2026},
    url={https://arxiv.org/abs/XXXX.XXXXX}
  }
---

{% include project-pullquote.html
    text="Users encountered a series of scenarios designed to replicate the target setting during daily use. Replace this italic bridge text."
%}

{% include project-video.html
    title="Scenario 1:"
    title_light="Personalization across multimodal tasks"
    lead="Describe scenario 1. Add src once your mp4 is in images/projects/placeholder/."
    narrow=true
%}

{% include project-video.html
    title="Scenario 2:"
    title_light="Forgetting under long exposure"
    lead="Describe scenario 2."
    narrow=true
%}

{% include project-video.html
    title="Scenario 3:"
    title_light="Testing on forgotten tasks"
    lead="Describe scenario 3."
    narrow=true
%}

{% include project-figure.html
    title="Framework at a glance"
    caption="Describe the framework figure. Set src to your overview diagram."
    narrow=true
%}

{% include project-method-pair.html
    title="Method"
    left_title="Hardware & software"
    left_caption="Describe the left method figure."
    right_title="Experimental setup"
    right_caption="Describe the right method figure."
%}
