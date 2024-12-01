---
title: 'Representative Color Transform for Image Enhancement'
date: 2022-08-08
permalink: /posts/2022/08/blog-post-5/
tags:
  - Computer Vision
  - Machine Learning
  - Conference
---

[](https://openaccess.thecvf.com/content/ICCV2021/papers/Kim_Representative_Color_Transform_for_Image_Enhancement_ICCV_2021_paper.pdf)

problem

- low contrast image!

previous works

- normally perform channel-wise intensity transform or some encoder-decoder architecture

proposed method

- representative color transform
    - run image through encoder
    - embedding vector $R$ is in $\mathbb{R}^{N \times C}$ where $C$ is the number of “representative color”s
    - compare with $\mathbb{R}^{N\times3}$ vector $T$ showing R, G, B values post-transform
    - get features $F$ from image via CNN
    - $A = softmax(FR^T/\tau)$, enhanced image $Y = AT^T$

- local RCT (the above would be the “global” version)
    - use fine-scale features covering a subset of the original image