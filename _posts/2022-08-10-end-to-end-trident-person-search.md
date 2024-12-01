---
title: "End-to-End Trainable Trident Person Search Network Using Adaptive Gradient Propagation"
date: 2022-08-08
permalink: /posts/2022/08/blog-post-6/
tags:
  - Computer Vision
  - Machine Learning
  - Conference
---

[End-to-End Trainable Trident Person Search Network Using Adaptive Gradient Propagation](https://openaccess.thecvf.com/content/ICCV2021/papers/Han_End-to-End_Trainable_Trident_Person_Search_Network_Using_Adaptive_Gradient_Propagation_ICCV_2021_paper.pdf)

person search

- person detection + re-ID
- detection + re-ID sequential two-step approach VS end-to-end approach

problems in end-to-end

- task conflict
    - person detection needs to embed some common features that apply to all humans
    - person re-ID requires the embedding of uniqueness for each person to discern identity
- task dependency
    - poor quality of detection will directly affect re-ID performance

proposed method

- adaptive gradient backprop
    - cross-entropy loss w/ softmax prob
    - adaptive gradient weighting function
        - similarity score and detection confidence score are used as weighting factors!
- additional task (part classification)
    - predicting classes of parts of the human body
    - prevent overfitting to either re-ID or detection task!