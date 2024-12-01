---
title: "Pooling Revisited: Your Receptive Field is Suboptimal"
categories:
  - machine learning
tags: 
  - computer vision
---
[Pooling Revisited: Your Receptive Field is Suboptimal](https://arxiv.org/abs/2205.15254)

receptive fields are how CNNs see objects

DynOPool applicable to most operations that control size of receptive field

related works

- NAS: generic, not designed for feature map size optimization
- dynamic kernel shape: changing filter size
- Shape Adaptor: directly learn feature map size
    - only handles symmetric feature maps and selects a predefined resizing ration range
- DiffStride: spectral pooling to determine optimal scale factor of pooling layer
    - implement downsampling with cropping in the frequency domain

DynOPool

- differentiable pooling layer
    - scaling factor for horizontal and vertical directions to be optimized
    - find four query points in each grid
    - derive output feature via max pooling of these query points
- optimization requires additional work because of rounding function
    - output size width and height must be integers
    - optimization by relaxation
    - regularization for computational complexity in addition to task loss
    
- shown to also be compatible with NAS, semantic segmentation, etc.