---
layout: project-page
title: "Personalized Hip Assistance to Improve Gait Performance in Individuals with Parkinson’s Disease"
collection: publications
category: manuscripts
permalink: /publications/personalized-hip-assistance/
date: 2026-08-21
eyebrow: "Journal of NeuroEngineering and Rehabilitation · Manuscript submitted · Preprint"
description: "Human-in-the-loop optimization of bilateral hip assistance on the WIM wearable robot increases stride length and improves whole-body gait metrics in individuals with Parkinson’s disease, including under dual-task walking."
keywords:
  - Parkinson’s disease
  - gait impairment
  - wearable robotics
  - hip assistance
  - personalized assistance
  - human-in-the-loop optimization
  - stride length
  - freezing of gait
year: 2026
teaser: /images/publications/personalized-hip-assistance/fig2-protocol.png
pdf_url: /files/personalized-hip-assistance-pd.pdf

summary: "Personalized WIM hip assistance, tuned with human-in-the-loop optimization to raise stride length toward healthy norms, improves spatiotemporal and kinematic gait outcomes in people with Parkinson’s disease—and those gains largely persist under dual-task walking."

authors:
  - name: Seonjeong Kim
  - name: Seungjoo Noh
  - name: Seo Jung Yun
  - name: Jinwoo Hwang
    url: /
  - name: Yujin Kwon
  - name: Bokman Lim
  - name: Younbaek Lee
  - name: Han Gil Seo
  - name: Keewon Kim
  - name: Jinsoo Kim
    url: https://sites.google.com/snu.ac.kr/jkim/

affiliations: "Seoul National University · Seoul National University Hospital · Carnegie Mellon University · UNC Chapel Hill & NC State · Korea University of Technology and Education · WIRobotics Inc."

links:
  - label: Project
    url: /publications/personalized-hip-assistance/
    icon: website
  - label: PDF
    url: /files/personalized-hip-assistance-pd.pdf
    icon: paper

highlights_title: "Why this matters"
highlights:
  - icon: user-friends
    title: "Personalization for heterogeneous PD gait"
    text: "Inter-individual variability in Parkinsonian gait motivates per-person tuning of assistance magnitude (κ) and timing (β) rather than a one-size-fits-all profile."
  - icon: walking
    title: "Stride length as the optimization target"
    text: "Human-in-the-loop CMA-ES minimizes the gap between measured and age-/sex-/height-matched healthy stride length, a clinically meaningful hypokinesia marker."
  - icon: chart-line
    title: "Benefits beyond the assisted joint"
    text: "Assistance improved cadence, hip ROM, foot-to-floor angle, and whole-body kinematics, with FoG eliminated in one participant and dual-task gains largely preserved."

stats_title: "Main results"
stats:
  - value: "+23%"
    label: "stride length (ASSIST ON vs OFF; p < 0.05, d = 0.95)"
  - value: "10"
    label: "participants with PD completing optimization (mH&Y 2.5–4)"
  - value: "0%"
    label: "FoG time under ASSIST ON in the participant who froze 20% of the time off"
  - value: "5.4"
    label: "mean usability rating (7-point scale; n = 10)"

bibtex: |
  @article{kim2026personalized,
    title={Personalized Hip Assistance to Improve Gait Performance in Individuals with Parkinson's Disease},
    author={Kim, Seonjeong and Noh, Seungjoo and Yun, Seo Jung and Hwang, Jinwoo and Kwon, Yujin and Lim, Bokman and Lee, Younbaek and Seo, Han Gil and Kim, Keewon and Kim, Jinsoo},
    journal={Journal of NeuroEngineering and Rehabilitation},
    year={2026},
    note={Manuscript submitted. Preprint: https://doi.org/10.21203/rs.3.rs-10612204/v1}
  }

footer_blurb: "This page summarizes the preprint <strong>Personalized Hip Assistance to Improve Gait Performance in Individuals with Parkinson’s Disease</strong> (Research Square / JNER submission). Figures are from the preprint."
---

{% include project-pullquote.html
    text="Personalized hip assistance can increase stride length toward healthy levels and drive whole-body gait improvements that persist under dual-task demands."
%}

{% include project-figure.html
    title="Device control and human-in-the-loop optimization"
    src="/images/publications/personalized-hip-assistance/fig1-device-hilo.png"
    alt="WIM hip assistance control law and CMA-ES human-in-the-loop optimization workflow"
    caption="Fig. 1. (A) Gain (κ) and time delay (β) shape the bilateral hip flexion/extension torque (saturated at 6 Nm). (B) CMA-ES samples (κ, β), applies assistance during walking with IMU-based stride-length feedback, and updates the search toward a healthy-matched stride-length target."
%}

{% include project-figure.html
    title="Study protocol"
    src="/images/publications/personalized-hip-assistance/fig2-protocol.png"
    alt="Optimization day corridor setup and biomechanics evaluation protocol"
    caption="Fig. 2. Screening and multi-day familiarization; Optimization Day on a 128 m hospital corridor with ASSIST OFF vs ON validation; Biomechanics Evaluation Day with markerless motion capture under NO EXO / ASSIST OFF / ASSIST ON for single- and dual-task 2-minute walks."
%}

{% include project-figure.html
    title="Participant-specific assistance"
    src="/images/publications/personalized-hip-assistance/fig3-optimized-params.png"
    alt="Optimized gain and time delay and resulting torque profiles across participants"
    caption="Fig. 3. Optimized (κ, β) pairs and corresponding torque profiles differ across participants, underscoring why fixed assistance is a poor match for heterogeneous PD gait."
%}

{% include project-figure.html
    title="Gait metrics after optimization"
    src="/images/publications/personalized-hip-assistance/fig4-gait-metrics.png"
    alt="Bar plots of stride length, cadence, hip ROM, and related gait metrics with and without assistance"
    caption="Fig. 4. On Optimization Day, ASSIST ON increased stride length by 23.0 ± 32.9% versus ASSIST OFF (p &lt; 0.05), reduced cadence toward healthy norms, increased hip ROM and foot-to-floor angle, and lowered stride-time variability."
%}

{% include project-method-pair.html
    title="Freezing of gait and dual-task walking"
    left_title="FoG case (P05)"
    left_src="/images/publications/personalized-hip-assistance/fig5-fog.png"
    left_alt="Stride length time series and freezing percentage with assistance on versus off"
    left_caption="Fig. 5. In a participant with FoG, ASSIST ON raised stride length and eliminated freezing (0% vs 20% of walking time OFF)."
    right_title="Dual-task"
    right_src="/images/publications/personalized-hip-assistance/fig7-dual-task.png"
    right_alt="Gait metrics under single-task and dual-task conditions with and without assistance"
    right_caption="Fig. 7. Dual-task walking still showed greater stride length and related improvements under ASSIST ON, while digit-span accuracy declined—consistent with a posture-first allocation of attention."
%}

{% include project-figure.html
    title="Whole-body kinematics"
    src="/images/publications/personalized-hip-assistance/fig6-kinematics.png"
    alt="Hip knee ankle kinematics and additional gait parameters under three assistance conditions"
    caption="Fig. 6. Markerless motion capture showed increased hip/knee/ankle ROM and peak velocities with assistance, plus larger step length, toe clearance, and foot-to-floor angle and reduced trunk flexion—improvements extending beyond the assisted hip."
%}

<section class="pp-section">
  <div class="pp-wrap pp-wrap--narrow">
    <div class="pp-section-heading">
      <h2 class="pp-section-title">Takeaways</h2>
    </div>
    <div class="pp-prose">
      <p>
        Parkinson’s disease commonly causes gait impairments such as reduced stride length,
        shuffling, festination, stooped posture, and freezing of gait. To address the limited
        effectiveness of conventional interventions, this study tested whether personalized hip
        assistance from a wearable robot could improve gait in individuals with PD. Using
        <strong>human-in-the-loop optimization</strong> for 10 participants, personalized assistance increased
        stride length by <strong>23%</strong>, improved cadence, stride-time variability, hip ROM, and
        foot-to-floor angle, reduced freezing in one participant, and largely preserved benefits under
        <strong>dual-task</strong> walking.
      </p>
    </div>
  </div>
</section>
