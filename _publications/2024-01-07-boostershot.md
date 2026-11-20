---
layout: project-page
title: "Booster-SHOT: Boosting Stacked Homography Transformations for Multiview Pedestrian Detection with Attention"
collection: publications
category: conferences
permalink: /publications/boostershot/
redirect_from:
  - /publication/2024-01-07-boostershot
  - /publication/2024-01-07-boostershot/
date: 2024-01-07
eyebrow: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) 2024"
description: "A Homography Attention Module improves end-to-end multiview pedestrian detection and state-of-the-art bird’s-eye-view occupancy mapping."
keywords:
  - multiview pedestrian detection
  - homography attention
  - bird's-eye view
  - occupancy map
year: 2024
teaser: /images/publications/boostershot/overview.png
pdf_url: https://openaccess.thecvf.com/content/WACV2024/papers/Hwang_Booster-SHOT_Boosting_Stacked_Homography_Transformations_for_Multiview_Pedestrian_Detection_With_WACV_2024_paper.pdf

summary: "A Homography Attention Module selects channels and spatial regions per homography plane, boosting end-to-end multiview pedestrian detection to state-of-the-art MODA on Wildtrack and MultiviewX."

authors:
  - name: Jinwoo Hwang
    url: https://scholar.google.com/citations?user=JQSj-loAAAAJ&hl=en
    affil: [1]
    equal: true
  - name: Philipp Benz
    affil: [2]
  - name: Pete Kim
    affil: [2]

equal_contribution: true
equal_contribution_text: "Work performed while Jinwoo Hwang was at Deeping Source Inc."

affiliations:
  - "Seoul National University"
  - "Deeping Source Inc."

links:
  - label: PDF
    url: https://openaccess.thecvf.com/content/WACV2024/papers/Hwang_Booster-SHOT_Boosting_Stacked_Homography_Transformations_for_Multiview_Pedestrian_Detection_With_WACV_2024_paper.pdf
    icon: paper
  - label: Slides
    url: "/files/Booster-SHOT_%20Boosting%20Stacked%20Homography%20Transformations%20for%20Multiview%20Pedestrian%20Detection%20with%20Attention.pptx"
    icon: file-powerpoint


stats_title: "Main results"
stats:
  - value: "92.9%"
    label: "MODA on Wildtrack"
  - value: "94.2%"
    label: "MODA on MultiviewX"
  - value: "+1.4"
    label: "MODA points over prior state of the art (Wildtrack)"
  - value: "+0.5"
    label: "MODA points over prior state of the art (MultiviewX)"

bibtex: |
  @inproceedings{hwang2024boostershot,
    title={Booster-SHOT: Boosting Stacked Homography Transformations for Multiview Pedestrian Detection with Attention},
    author={Hwang, Jinwoo and Benz, Philipp and Kim, Pete},
    booktitle={Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},
    year={2024},
    pages={362--371},
    doi={10.1109/WACV57701.2024.00043}
  }
---

<section class="pp-section pp-part" id="introduction">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">1</span>Introduction</h2>
    <div class="pp-prose">
      <p>
        Crowded spaces such as train stations, stadiums, and stores are often covered by several overlapping cameras.
        A single camera misses people who are hidden behind others. When calibrated views are combined on a shared
        <strong>bird’s-eye-view (BEV)</strong> ground plane, however, each person’s position can be recovered, which
        supports crowd-safety monitoring and space analytics.
      </p>
      <p>
        End-to-end multiview detectors build this BEV map by projecting each view’s image features through
        homographies, but they treat every feature channel and image region equally. The objective of this work was
        to let the network <strong>choose which features to project</strong> for each homography plane, and thereby
        locate pedestrians more accurately.
      </p>
    </div>
  </div>
</section>

<section class="pp-section pp-part" id="methods">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">2</span>Methods</h2>
    <div class="pp-prose">
      <p>
        I proposed the <strong>Homography Attention Module (HAM)</strong>, which inserts two gates between the image
        encoder and the homography projection (Figure 1). A channel gate scores feature channels separately for each
        homography plane and keeps the top-K. A spatial gate then re-weights image regions within the selected
        features (Figure 2).
      </p>
      <p>
        <strong>Booster-SHOT</strong> combines HAM with stacked homography transformations and view-coherent data
        augmentation in one convolutional detector. I evaluated it on the real-world Wildtrack and synthetic
        MultiviewX benchmarks using multiple-object detection accuracy (MODA). I also inserted HAM into three existing
        detectors (MVDet, SHOT, and MVDeTr) to test whether it generalizes.
      </p>
    </div>
  </div>
  {% include project-figure.html
    inline=true
    title="Figure 1. Architecture"
    src="/images/publications/boostershot/overview.png"
    alt="Overview of multiview detection with the homography attention module"
    caption="Multiview images are encoded, passed through HAM, and projected onto stacked homography planes; a BEV heatmap generator outputs the pedestrian occupancy map."
    narrow=true
  %}
  {% include project-method-pair.html
    inline=true
    title="Figure 2. Inside the Homography Attention Module"
    left_title="Channel gate"
    left_src="/images/publications/boostershot/channel-gate.png"
    left_alt="Channel gate with channel selection and top-K selection modules"
    left_caption="A shared MLP over pooled features scores channels for each homography; the top-K channels are kept."
    right_title="Spatial gate"
    right_src="/images/publications/boostershot/spatial-gate.png"
    right_alt="Spatial gate with pooling, concatenation, and CNN attention map"
    right_caption="Pooled maps pass through a small CNN to produce a spatial attention map that re-weights the selected features."
  %}
</section>

<section class="pp-section pp-part" id="results">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">3</span>Results</h2>
    <div class="pp-prose">
      <p>
        Booster-SHOT achieved <strong>92.9% MODA on Wildtrack</strong> and <strong>94.2% on MultiviewX</strong>,
        exceeding the previous state of the art by 1.4 and 0.5 points. HAM also improved each of the three existing
        detectors it was added to, which shows that the module works as a plug-in rather than only inside
        Booster-SHOT.
      </p>
    </div>
  </div>
  {% include project-stats.html %}
</section>

<section class="pp-section pp-part" id="discussion">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">4</span>Discussion</h2>
    <div class="pp-prose">
      <p>
        Letting each homography plane select its own features is a lightweight way to improve multiview aggregation.
        Because HAM attaches to existing detectors, teams can adopt it without redesigning their pipelines. The module
        is now patented in Korea and the United States.
      </p>
      <p>
        The method still requires calibrated cameras, and it was evaluated on two benchmarks, one of them synthetic.
        Testing on larger real deployments with moving or partially calibrated cameras would show how far the gains
        carry over to practice.
      </p>
    </div>
  </div>
</section>
