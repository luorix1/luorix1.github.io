---
title: 'Few-shot Font Generation with Localized Style Representations and Factorization'
date: 2022-08-08
permalink: /posts/2022/08/blog-post-1/
tags:
  - Computer Vision
  - Machine Learning
  - Conference
---

[Few-shot Font Generation with Localized Style Representations and Factorization](https://arxiv.org/abs/2009.11042)

few-shot font generation

- generate a new font library (> 20,000 characters) with few references
- without additional training procedures

goal

- capture “font style” from very few glyph images
- font styles are both global, but very local
- character content is also very complex and sensitive to local change!

previous works

- reference images → style, source image → features, merge to generate new image’
    - for font, single representation is insufficient to represent “style”
    

proposed method

- compositionality
    - decompose characters into a number of components
    - 24 of top 30 used languages has compositionality
- define “multiple localized” style representation using compositionality
    - capture multiple local features from each image
    - requires guidance
- assign most likely components to each expert
    - predict probability by passing multiple local features to component classifier
    - match components to express to maximize summation over prediction probability
- style features are trained to
    - correctly classify style labels predicted by style classifier
    - fooling component labels predicted by component classifier
- maximize independence using HSIC as loss