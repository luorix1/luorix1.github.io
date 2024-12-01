---
title: 'Learning to See by Looking at Noise'
date: 2022-08-08
permalink: /posts/2022/08/blog-post-4/
tags:
  - Computer Vision
  - Machine Learning
  - Conference
---

Speaker: Antonio Torrelba (MIT)

[](https://openreview.net/pdf?id=RQUl8gZnN7O)

challenges in CV

- training
    - fairness
    - privacy
    - cost
- deployment
    - explainability
    - robustness
    - social impact

exponential growth in model size & dataset size!

- growing need for large, curated (labelled) datasets → bottleneck

do we need labels?

- something people have been trying to address through self-supervised learning

current trend is heavily dependent on resources!

- more GPUs = better computation = better everything!
- should be the opposite (sensing >> computation)

with the correct sensing, we can reduce the required amount of computations to feasible levels

“Greatest Hits” dataset

- 45,000 short videos of drumstick hitting objects
- prediction of audio from silent videos!
- showed promising results!

tactile sensors are snubbed, even though they are the most important for humans

learning to see through tactile information

- using tactile sensor input maps, prediction of walking gait has been attempted!

learning to see by drawing images

- basically what GANs and other generative models do
- but what do these well-performing generative models learn?

network dissection (GAN)

- pass random vectors through network, generate lots of images
- check activation maps of the layers + run a pre-trained segmentation model on the generated images
    - check agreement between activation and segmentation maps
- turns out units are assigning themselves labels (affinity for certain classes when drawing new images)

disabling certain neurons

- when researchers deactivated all “window” neurons, or activated new “door” neurons, the networks understood what to do
    - didn’t draw doors in the sky
    - replaced the window with a wall and painting (something that makes sense semantically)

DatasetGAN

- take images generated with GAN
- manually annotate a few images
- sample from DatasetGAN to create infinite, annotated data!

BigDatasetGAN

- same thing, but with ImageNet

unsupervised contrastive learning

- perturb images and claim those images should belong to same class
- motivation: using simulators to create synthetic data is hard!
    - lots of detail
    - lots of background knowledge required
- test ImageNet100 performance using AlexNet-based encoder
    - Minecraft, CLeVr data are examples of synthetic data used in training
    - Minecraft works ok, but it is a pretty hardcore simulator!

Learning to See by Looking at Noise

- capture features of natural images via a stochastic process that generates images
- “Dead leaves model”: introduced in the 60’s
    - used as a representation of natural images
- use images generated via the “Dead leaves model” and use those to train an encoder and inference on ImageNet100!
    - similar results to Minecraft-trained encoder
    - much less overhead for simulator preparation
- sample from an untrained GAN → provides a representation of natural images!
- Shaders-21K dataset: short generative programs in OpenGL!
    - results that are almost as good as models trained on real data!