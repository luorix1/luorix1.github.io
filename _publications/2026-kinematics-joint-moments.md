---
layout: project-page
title: "A Unified Kinematic Representation Enables Reusable Biological Joint Moment Estimation"
collection: publications
category: manuscripts
permalink: /publications/kinematics-joint-moments/
date: 2026-07-25
description: "A kinematics-based framework trains biological joint moment estimators on open-source biomechanics data and deploys them, without target-device fine-tuning, across a hip exoskeleton, knee exoskeleton, and IMU sensor suite."
keywords:
  - biological joint moment estimation
  - joint kinematics
  - device-agnostic exoskeleton control
  - wearable robotics
year: 2026
teaser: /images/publications/kinematics-joint-moments/overview.png
pdf_url: /files/kinematics-enable-device-agnostic-joint-moment-estimation.pdf

summary: "Joint angles and angular velocities serve as a shared intermediate representation, decoupling wearable sensing hardware from downstream biological joint moment estimation."

authors:
  - name: Jinwoo Hwang
    url: https://scholar.google.com/citations?user=JQSj-loAAAAJ&hl=en
  - name: Ilseung Park
    url: https://scholar.google.com/citations?hl=en&user=Cn8JxjQAAAAJ
  - name: Changseob Song
    url: https://scholar.google.com/citations?hl=en&user=lj-qBkQAAAAJ
  - name: Vu Phan
    url: https://scholar.google.com/citations?hl=en&user=X9vyIRMAAAAJ
  - name: Eni Halilaj
    url: https://scholar.google.com/citations?user=Fr9Vhe4AAAAJ&hl=en
  - name: Inseung Kang
    url: https://scholar.google.com/citations?user=jcgAPTYAAAAJ&hl=en

affiliations: "Carnegie Mellon University, Mechanical Engineering"

links:
  - label: PDF
    url: /files/main_V6.pdf
    icon: paper
  - label: Supplementary
    url: /files/supp.pdf
    icon: paper

highlights_title: "Why this matters"
highlights:
  - icon: link
    title: "Device-agnostic interface"
    text: "Joint angles and angular velocities form a shared biomechanical input domain, so each wearable only needs to produce compatible kinematics rather than matching another device’s raw sensors."
  - icon: database
    title: "Open-source training only"
    text: "Causal TCN estimators are trained exclusively on public biomechanics datasets and applied without target-device training or fine-tuning to hip exo, knee exo, and IMU kinematics."
  - icon: project-diagram
    title: "Multi-joint context helps"
    text: "On the Awinda IMU suite, multi-joint (3-DoF) inputs cut mean RMSE by 17.2% versus single-joint models, with significant gains at hip, knee, and ankle."

stats_title: "Main results"
stats:
  - value: "0.80"
    label: "hip exo mean R² (RMSE 0.169 ± 0.067 Nm/kg)"
  - value: "0.62"
    label: "knee exo mean R² (RMSE 0.192 ± 0.039 Nm/kg)"
  - value: "0.86"
    label: "IMU multi-joint mean R² (RMSE 0.144 ± 0.061 Nm/kg)"
  - value: "17%"
    label: "lower RMSE vs. single-joint IMU inputs"

bibtex: "TBD pending arXiv acceptance."
---

{% include project-pullquote.html
    text="Each wearable converts its sensors into joint kinematics; a shared estimator maps those kinematics to biological joint moments—trained once on open-source data, deployed across platforms."
%}

{% include project-video.html
  title="Presentation video"
  lead="A short walk-through of the unified kinematic representation and how it transfers across the hip exoskeleton, knee exoskeleton, and IMU sensor suite."
  src="/files/final_V1.mp4"
  poster="/images/publications/kinematics-joint-moments/overview.png"
  caption="Video summary of the manuscript."
  narrow=true
  autoplay=false
%}

{% include project-figure.html
    title="Framework at a glance"
    src="/images/publications/kinematics-joint-moments/overview.png"
    alt="Overview of the kinematics-based device-agnostic joint moment estimation framework"
    caption="Top: open-source biomechanics datasets are processed in OpenSim to yield reference kinematics and dynamics for training.<br>Bottom: for each deployment setting we train a downstream estimator on the joint channels available at that platform—hip only, knee only, or multi-joint hip/knee/ankle—and apply it directly with no device-specific fine-tuning. Exoskeleton inputs come from onboard encoders and IMUs; the IMU suite inputs come from body-mounted IMU sensor fusion."
    narrow=true
%}

{% include project-figure.html
    title="Exoskeleton deployment: hip exoskeleton"
    src="/images/publications/kinematics-joint-moments/HIP.png"
    alt="Hip exoskeleton predicted and reference hip joint moments"
    caption="Predicted and OpenSim reference hip joint moments across level-ground speeds and ramp ascent (shaded: ±1 SD)."
    narrow=true
%}

{% include project-figure.html
    title="Exoskeleton deployment: knee exoskeleton"
    src="/images/publications/kinematics-joint-moments/KNEE.png"
    alt="Knee exoskeleton predicted and reference knee joint moments"
    caption="Predicted and OpenSim reference knee joint moments during ramp ascent and descent (shaded: ±1 SD). Performance was generally lower during ramp descent, where the greater variability in the ground-truth profiles also indicates more variable gait across participants."
    narrow=true
%}

{% include project-figure.html
    title="IMU sensor suite: joint moments"
  src="/images/publications/kinematics-joint-moments/IMU.png"
    alt="IMU-predicted and reference hip, knee, and ankle joint moments across gait conditions"
    caption="Predicted and OpenSim reference hip, knee, and ankle joint moments across level-ground and ramp walking (shaded: ±1 SD). Same open-source-trained multi-joint model; no target-device fine-tuning."
%}

{% include project-figure.html
  title="Benefit of multi-joint kinematic context"
  src="/images/publications/kinematics-joint-moments/multi_vs_single_joint.png"
  alt="Multi-joint versus single-joint performance comparison"
  caption="Multi-joint (3-DoF) inputs improve both RMSE and R² relative to single-joint (1-DoF) models across the hip, knee, and ankle, with the strongest gains in the IMU deployment setting."
  narrow=true
%}
