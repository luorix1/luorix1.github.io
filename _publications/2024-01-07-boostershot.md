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

highlights_title: "Why this matters"
highlights:
  - icon: network-wired
    title: "Better multiview aggregation"
    text: "Homography-based attention improves how features from calibrated camera views are fused into a bird’s-eye-view occupancy map."
  - icon: puzzle-piece
    title: "Plug-in attention module"
    text: "HAM’s channel gate and spatial gate drop into existing end-to-end detectors (MVDet, SHOT, MVDeTr) and improve their performance."
  - icon: trophy
    title: "State-of-the-art performance"
    text: "Booster-SHOT combines HAM with stacked homography transformations and view-coherent augmentation to reach state-of-the-art MODA."

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

{% include project-pullquote.html
    text="Attention-guided homography fusion improves multiview pedestrian detection and bird’s-eye-view occupancy mapping."
%}

<section class="pp-section">
  <div class="pp-wrap pp-wrap--narrow">
    <div class="pp-section-heading">
      <h2 class="pp-section-title">Abstract</h2>
    </div>
    <div class="pp-prose">
      <p>
        Improving multi-view aggregation is integral for multiview pedestrian detection, which aims to obtain a bird’s-eye-view pedestrian occupancy map from images captured through a set of calibrated cameras. Inspired by the success of attention modules for deep neural networks, we first propose a <strong>Homography Attention Module (HAM)</strong> which is shown to boost the performance of existing end-to-end multiview detection approaches by utilizing a novel channel gate and spatial gate. Additionally, we propose <strong>Booster-SHOT</strong>, an end-to-end convolutional approach to multiview pedestrian detection incorporating our proposed HAM as well as elements from previous approaches such as view-coherent augmentation or stacked homography transformations. Booster-SHOT achieves <strong>92.9%</strong> and <strong>94.2%</strong> for MODA on Wildtrack and MultiviewX respectively, outperforming the state-of-the-art by 1.4% on Wildtrack and 0.5% on MultiviewX, achieving state-of-the-art performance overall for standard evaluation metrics used in multi-view pedestrian detection.
      </p>
    </div>
  </div>
</section>

{% include project-figure.html
    title="Framework at a glance"
    src="/images/publications/boostershot/overview.png"
    alt="Overview of multiview detection with the homography attention module"
    caption="Multiview images are encoded into image features, passed through the Homography Attention Module (HAM), and projected onto stacked homography planes. A BEV heatmap generator then produces the pedestrian occupancy map. Inside HAM, a channel gate selects channels for each homography and a spatial gate re-weights each selected feature map before projection."
    narrow=true
%}

{% include project-method-pair.html
    title="Homography Attention Module"
    left_title="Channel gate"
    left_src="/images/publications/boostershot/channel-gate.png"
    left_alt="Channel gate with channel selection and top-K selection modules"
    left_caption="A shared MLP over max- and average-pooled features produces a distinct channel score for each homography; the top-K channels are selected per homography."
    right_title="Spatial gate"
    right_src="/images/publications/boostershot/spatial-gate.png"
    right_alt="Spatial gate with pooling, concatenation, and CNN attention map"
    right_caption="Channel-wise max and average pooling are concatenated and passed through a CNN to produce a spatial attention map that re-weights the selected features."
%}
