---
# Copy to `_pages/projects/<slug>.md` and fill in.
# Reference look: https://changseob-song.github.io/continual-online-personalization/
# Docs: PROJECT_PAGE.md
layout: project-page
title: "TITLE"
permalink: /projects/SLUG/
description: "SHORT SEO DESCRIPTION"
year: 2026
authors:
  - name: Name
    url: https://
affiliations: "Carnegie Mellon University"
links:
  - label: Paper
    url: https://
    icon: paper
  - label: arXiv
    url: https://
    icon: arxiv
presentation_video: /images/projects/SLUG/presentation.mp4
highlights_title: "Why this matters"
highlights:
  - icon: rotate
    title: "Highlight"
    text: "Text"
stats_title: "Main results"
stats:
  - value: "XX%"
    label: "metric"
bibtex: |
  @article{key,
    title={TITLE},
    author={Last, First},
    year={2026}
  }
---

{% include project-pullquote.html text="Bridge sentence between highlights and scenarios." %}

{% include project-video.html title="Scenario 1:" title_light="Subtitle" lead="Description." src="/images/projects/SLUG/s1.mp4" narrow=true %}

{% include project-figure.html title="Framework at a glance" src="/images/projects/SLUG/framework.png" caption="CAPTION" narrow=true %}

{% include project-method-pair.html
    title="Method"
    left_title="Left"
    left_src="/images/projects/SLUG/left.png"
    left_caption="..."
    right_title="Right"
    right_src="/images/projects/SLUG/right.png"
    right_caption="..."
%}
