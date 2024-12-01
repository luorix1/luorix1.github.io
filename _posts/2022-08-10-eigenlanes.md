---
title: "Eigenlanes: Data-Driven Lane Descriptors for Structurally Diverse Lanes"
date: 2022-08-08
permalink: /posts/2022/08/blog-post-6/
tags:
  - Computer Vision
  - Machine Learning
  - Conference
---
[Eigenlanes: Data-Driven Lane Descriptors for Structurally Diverse Lanes](https://arxiv.org/abs/2203.15302)

existing work

- semantic segmentation
    - performance issues
- anchor-based detection considering straight lines as anchors
    - hard to deal with complicated lanes!

proposed method

- eigenlane space: lane matrix $A$ from image
- apply SVD to $A$
 ($A = U\Sigma V^T$)
- ignore most of the singular values near or equal to 0!
    - we can compress the information into smaller matrices (less computation)
    - the remaining columns of $U$ are “eigenlane”s, representing the lane itself
- generating lane candidates
    - clustering in eigenlane space (relatively low-dimensional)
- involves work that checks the harmony between proposed lines
    - based on prior works from the same authors regarding semantic line detection