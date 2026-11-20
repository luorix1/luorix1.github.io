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
pdf_url: https://arxiv.org/pdf/2610.09150

summary: "Joint angles and angular velocities serve as a shared intermediate representation, decoupling wearable sensing hardware from downstream biological joint moment estimation."

authors:
  - name: Jinwoo Hwang
    url: https://scholar.google.com/citations?user=JQSj-loAAAAJ&hl=en
    affil: [1]
  - name: Ilseung Park
    url: https://scholar.google.com/citations?hl=en&user=Cn8JxjQAAAAJ
    affil: [1]
  - name: Changseob Song
    url: https://scholar.google.com/citations?hl=en&user=lj-qBkQAAAAJ
    affil: [1]
  - name: Vu Phan
    url: https://scholar.google.com/citations?hl=en&user=X9vyIRMAAAAJ
    affil: [1]
  - name: Eni Halilaj
    url: https://scholar.google.com/citations?user=Fr9Vhe4AAAAJ&hl=en
    affil: [1]
  - name: Inseung Kang
    url: https://scholar.google.com/citations?user=jcgAPTYAAAAJ&hl=en
    affil: [1]

affiliations:
  - "Carnegie Mellon University, Mechanical Engineering"

links:
  - label: Paper
    url: https://arxiv.org/abs/2610.09150
    icon: arxiv


stats_title: "Main results"
stats:
  - value: "0.79"
    label: "hip exo mean R² (RMSE 0.17 Nm/kg)"
  - value: "0.62"
    label: "knee exo mean R² (RMSE 0.19 Nm/kg)"
  - value: "0.85"
    label: "IMU multi-joint mean R² (RMSE 0.15 Nm/kg)"
  - value: "17%"
    label: "lower RMSE vs. single-joint IMU inputs"

bibtex: |
  @misc{hwang2026unifiedkinematicrepresentationenables,
    title={A Unified Kinematic Representation Enables Reusable Biological Joint Moment Estimation},
    author={Jinwoo Hwang and Ilseung Park and Changseob Song and Vu Phan and Eni Halilaj and Inseung Kang},
    year={2026},
    eprint={2610.09150},
    archivePrefix={arXiv},
    primaryClass={cs.RO},
    url={https://arxiv.org/abs/2610.09150}
  }
---

<section class="pp-section pp-part" id="introduction">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">1</span>Introduction</h2>
    <div class="pp-prose">
      <p>
        Lower-limb exoskeletons can reduce the effort of walking and help people with mobility impairments stay active.
        Many exoskeleton controllers depend on an estimate of the user’s <strong>biological joint moments</strong>, the torque
        the user’s own muscles produce at each joint. These estimators are usually trained on one device’s raw sensor
        signals, so every new exoskeleton needs its own data-collection study. The growing body of open-source
        biomechanics data also goes unused.
      </p>
      <p>
        This project asked whether <strong>joint kinematics</strong> (joint angles and angular velocities) can serve as
        a shared input that any wearable can produce. The objective was to train a joint-moment estimator only once,
        on open-source data, and deploy it <strong>without fine-tuning</strong> on very different wearable platforms.
      </p>
    </div>
  </div>
  {% include project-video.html
    src="/files/final_V1.mp4"
    caption="Video summary of the study (narrated)."
    narrow=true
    autoplay=false
    inline=true
  %}
</section>

<section class="pp-section pp-part" id="methods">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">2</span>Methods</h2>
    <div class="pp-prose">
      <p>
        The framework separates sensing from estimation (Figure 1). I aggregated open-source walking datasets and
        processed them in <strong>OpenSim</strong> to obtain reference joint kinematics and joint moments. A causal
        <strong>temporal convolutional network (TCN)</strong> then learned to map joint angles and velocities to joint
        moments. For each platform, the model used only the joints that platform measures: hip only, knee only, or
        hip, knee, and ankle together.
      </p>
      <p>
        These estimators were evaluated, with no data from the target device, on three wearables during level-ground,
        ramp-ascent, and ramp-descent walking (Figure 2). The platforms were a bilateral hip exoskeleton, a knee
        exoskeleton, and a seven-sensor Xsens IMU suite. Both exoskeletons run the estimator on an embedded
        <strong>Jetson Orin Nano</strong>, which reads the IMUs over I2C and the actuators over CAN.
      </p>
    </div>
  </div>
  {% include project-figure.html
    inline=true
    title="Figure 1. Framework"
    src="/images/publications/kinematics-joint-moments/overview.png"
    alt="Overview of the kinematics-based device-agnostic joint moment estimation framework"
    caption="Top: open-source biomechanics datasets are processed in OpenSim into reference kinematics and dynamics for training. Bottom: each platform supplies only joint kinematics, and the downstream estimator is applied directly with no device-specific fine-tuning."
    narrow=true
  %}
  {% include project-figure.html
    inline=true
    title="Figure 2. Wearable platforms"
    src="/images/publications/kinematics-joint-moments/devices.png"
    alt="Hip exoskeleton, knee exoskeleton, embedded co-processor architecture, and Xsens Awinda IMU placement"
    caption="(a) Bilateral hip exoskeleton. (b) Knee exoskeleton. (c) Embedded co-processor architecture: an I/O process reads IMUs (I2C) and actuators (CAN) and exchanges data with a separate inference process through queues. (d) Xsens MTw Awinda suite with seven IMUs on the pelvis, thighs, shanks, and feet."
  %}
</section>

<section class="pp-section pp-part" id="results">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">3</span>Results</h2>
    <div class="pp-prose">
      <p>
        The open-source-trained estimator transferred to all three platforms. With hip-exoskeleton kinematics it
        reached <strong>R² = 0.79</strong> (RMSE 0.17 Nm/kg). With knee-exoskeleton kinematics it reached
        <strong>R² = 0.62</strong> (0.19 Nm/kg). With IMU-derived kinematics across the bilateral hip, knee, and ankle
        it reached <strong>R² = 0.85</strong> (0.15 Nm/kg) (Figures 3–4).
      </p>
      <p>
        Context from neighboring joints improved accuracy. On the IMU suite, multi-joint inputs reduced mean RMSE by
        <strong>17.2%</strong> compared with single-joint models, with significant gains at the hip, knee, and ankle
        (Figure 5).
      </p>
    </div>
  </div>
  {% include project-stats.html %}
  {% include project-method-pair.html
    inline=true
    title="Figure 3. Exoskeleton deployment"
    left_title="Hip exoskeleton"
    left_src="/images/publications/kinematics-joint-moments/HIP.png"
    left_alt="Hip exoskeleton predicted and reference hip joint moments"
    left_caption="Predicted vs. OpenSim reference hip moments across walking speeds and ramp ascent (shaded: ±1 SD)."
    right_title="Knee exoskeleton"
    right_src="/images/publications/kinematics-joint-moments/KNEE.png"
    right_alt="Knee exoskeleton predicted and reference knee joint moments"
    right_caption="Predicted vs. reference knee moments during ramp ascent and descent. Ramp descent was hardest and also showed the most variable reference profiles."
  %}
  {% include project-figure.html
    inline=true
    title="Figure 4. IMU sensor suite"
    src="/images/publications/kinematics-joint-moments/IMU.png"
    alt="IMU-predicted and reference hip, knee, and ankle joint moments across gait conditions"
    caption="Predicted vs. reference hip, knee, and ankle moments across level-ground and ramp walking, from the same open-source-trained multi-joint model."
  %}
  {% include project-figure.html
    inline=true
    title="Figure 5. Multi-joint vs. single-joint inputs"
    src="/images/publications/kinematics-joint-moments/multi_vs_single_joint.png"
    alt="Multi-joint versus single-joint performance comparison"
    caption="Multi-joint (3-DoF) inputs improve RMSE and R² relative to single-joint (1-DoF) models at every joint."
    narrow=true
  %}
</section>

<section class="pp-section pp-part" id="discussion">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">4</span>Discussion</h2>
    <div class="pp-prose">
      <p>
        These results show that joint kinematics can decouple wearable hardware from joint-moment estimation: one
        model, trained once on public data, produced accurate estimates on three devices with different sensors.
        A new exoskeleton therefore needs only to measure its own joint kinematics. It does not need a new training
        dataset.
      </p>
      <p>
        The approach was least accurate on the knee exoskeleton during ramp descent, where reference moments also
        varied most between participants. That pattern suggests a need for more diverse descent data in open-source
        datasets. The next step is to use these estimates as the input to real-time assistance controllers, and to
        extend the evaluation to more activities and to clinical populations.
      </p>
    </div>
  </div>
</section>
