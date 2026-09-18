---
layout: project-page
title: "Booster-SHOT: Boosting Stacked Homography Transformations for Multiview Pedestrian Detection with Attention"
collection: publications
category: conferences
permalink: /publication/2024-01-07-boostershot
date: 2024-01-07
eyebrow: "2024 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)"
description: "A Homography Attention Module improves end-to-end multiview pedestrian detection and state-of-the-art bird’s-eye-view occupancy mapping."
keywords:
  - multiview pedestrian detection
  - homography attention
  - bird's-eye view
  - occupancy map
year: 2024
summary: "A Homography Attention Module improves end-to-end multiview pedestrian detection and bird’s-eye-view occupancy mapping, producing state-of-the-art MODA on Wildtrack and MultiviewX."
pdf_url: https://openaccess.thecvf.com/content/WACV2024/papers/Hwang_Booster-SHOT_Boosting_Stacked_Homography_Transformations_for_Multiview_Pedestrian_Detection_With_WACV_2024_paper.pdf

authors:
  - name: Jinwoo Hwang
    url: /
  - name: P. Benz
  - name: P. Kim

affiliations: "Seoul National University"

links:
  - label: Project
    url: /publication/2024-01-07-boostershot
    icon: website
  - label: PDF
    url: https://openaccess.thecvf.com/content/WACV2024/papers/Hwang_Booster-SHOT_Boosting_Stacked_Homography_Transformations_for_Multiview_Pedestrian_Detection_With_WACV_2024_paper.pdf
    icon: paper

highlights_title: "Why this matters"
highlights:
  - icon: network-wired
    title: "Better multiview aggregation"
    text: "Homography-based attention improves how calibrated camera views are fused into a bird’s-eye-view occupancy map."
  - icon: layers
    title: "End-to-end detection"
    text: "Booster-SHOT combines the proposed attention module with stacked homography transformations in an end-to-end convolutional architecture."
  - icon: trophy
    title: "State-of-the-art performance"
    text: "The method achieves 92.9% MODA on Wildtrack and 94.2% MODA on MultiviewX."

bibtex: |
  @inproceedings{hwang2024boostershot,
    title={Booster-SHOT: Boosting Stacked Homography Transformations for Multiview Pedestrian Detection with Attention},
    author={Hwang, Jinwoo and Benz, P. and Kim, P.},
    booktitle={2024 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},
    year={2024},
    pages={362--371},
    doi={10.1109/WACV57701.2024.00043}
  }

footer_blurb: "This page summarizes <strong>Booster-SHOT</strong>."
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
        Improving multi-view aggregation is integral for multiview pedestrian detection, which aims to obtain a bird’s-eye-view pedestrian occupancy map from images captured through a set of calibrated cameras. Inspired by the success of attention modules for deep neural networks, we first propose a Homography Attention Module (HAM) which is shown to boost the performance of existing end-to-end multiview detection approaches by utilizing a novel channel gate and spatial gate. Additionally, we propose Booster-SHOT, an end-to-end convolutional approach to multiview pedestrian detection incorporating our proposed HAM as well as elements from previous approaches such as view-coherent augmentation or stacked homography transformations. Booster-SHOT achieves 92.9% and 94.2% for MODA on Wildtrack and MultiviewX respectively, outperforming the state-of-the-art by 1.4% on Wildtrack and 0.5% on MultiviewX, achieving state-of-the-art performance overall for standard evaluation metrics used in multi-view pedestrian detection.
      </p>
    </div>
  </div>
</section>