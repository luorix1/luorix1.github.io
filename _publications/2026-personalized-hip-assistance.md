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
    affil: [1]
  - name: Seungjoo Noh
    affil: [1]
  - name: Seo Jung Yun
    affil: [2]
  - name: Jinwoo Hwang
    url: /
    affil: [3]
  - name: Yujin Kwon
    affil: [4]
  - name: Bokman Lim
    affil: [5]
  - name: Younbaek Lee
    affil: [6]
  - name: Han Gil Seo
    affil: [2]
  - name: Keewon Kim
    affil: [2]
  - name: Jinsoo Kim
    url: https://sites.google.com/snu.ac.kr/jkim/
    affil: [1]

affiliations:
  - "Seoul National University"
  - "Seoul National University Hospital"
  - "Carnegie Mellon University"
  - "UNC Chapel Hill & NC State University"
  - "Korea University of Technology and Education"
  - "WIRobotics Inc."

links:
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
    caption="Fig. 1. Operating principles of the WIM device and the human-in-the-loop optimization framework. (A) The controller filters the inter-thigh angle into a hip motion state buffer; assistance torque is the state from β samples earlier (β × 0.01 s) scaled by the gain κ, so κ sets the torque magnitude and β its timing. Flexion torque is applied to the swing leg and equal extension torque to the stance leg, saturated at 6 Nm; the yellow and green shaded regions mark the allowable bounds of κ and β. (B) Each control law (κ, β) is applied during walking, IMU sensors estimate stride length, and the gap between the measured and an age-, sex-, and height-matched healthy target stride length is the cost. CMA-ES uses these costs to sample the next generation of control laws."
%}

{% include project-figure.html
    title="Study protocol"
    src="/images/publications/personalized-hip-assistance/fig2-protocol.png"
    alt="Optimization day corridor setup and biomechanics evaluation protocol"
    caption="Fig. 2. Study protocol. (A) Optimization Day: participants walked a 128 m hospital corridor loop wearing WIM and an IMU sensor, with an occupational therapist holding a safety belt. Optimization ran over two days, followed by a validation of 40-s ASSIST OFF and ASSIST ON trials in randomized order. (B) Overall timeline: Screening Day, robot familiarization before each session, two Optimization Days, and a Biomechanics Evaluation Day. (C) Biomechanics Evaluation Day: an oval track (10.8 m straights) surrounded by motion capture cameras. Participants completed 2-min trials under NO EXO, ASSIST OFF, and ASSIST ON (randomized order), first as single-task walking and then while performing a cognitive dual task."
%}

{% include project-figure.html
    title="Participant-specific assistance"
    src="/images/publications/personalized-hip-assistance/fig3-optimized-params.png"
    alt="Optimized gain and time delay and resulting torque profiles across participants"
    caption="Fig. 3. Optimized assistance across the 10 participants. (A) Optimized gain (κ) and time delay (β) converged to different values for each participant. (B) The resulting torque profiles, averaged across strides and aligned to the peak inter-thigh angle (0% gait cycle), differ in shape, peak magnitude, and timing. Positive torque is hip flexion assistance to the left leg and extension to the right. (C) Share of the gait cycle spent at the 6 Nm torque limit, which ranged from near 0% (P04, P05) to about 45%. Together, these show why one fixed assistance profile is a poor fit for heterogeneous Parkinsonian gait."
%}

{% include project-figure.html
    title="Gait metrics after optimization"
    src="/images/publications/personalized-hip-assistance/fig4-gait-metrics.png"
    alt="Bar plots of stride length, cadence, hip ROM, and related gait metrics with and without assistance"
    caption="Fig. 4. IMU-based gait metrics on Optimization Day (n = 10, 40-s trials). Bars show group means, lines show individual participants, and dashed lines show healthy-adult reference values from the literature. With ASSIST ON versus ASSIST OFF, stride length increased by 23.0 ± 32.9% (p &lt; 0.05), with gains in every participant. Cadence fell from 128 to 116 steps/min, approaching the healthy value of 107 (p &lt; 0.05). Hip range of motion rose from 28.3° to 34.4° (p &lt; 0.05), foot-to-floor angle nearly doubled from 6.6° to 12.2° (p &lt; 0.001), indicating a shift toward heel strike, and stride time variability fell from 4.1% to 2.0%. Walking speed did not change significantly. * p &lt; 0.05, *** p &lt; 0.001."
%}

{% include project-method-pair.html
    title="Freezing of gait and dual-task walking"
    left_title="FoG case (P05)"
    left_src="/images/publications/personalized-hip-assistance/fig5-fog.png"
    left_alt="Stride length time series and freezing percentage with assistance on versus off"
    left_caption="Fig. 5. Freezing of gait in participant P05. (A) Stride length over a 40-s trial: with ASSIST ON (red), stride length stayed near 1 m throughout. With ASSIST OFF (gray), it was shorter and dropped to zero during a freezing episode (shaded box). The dashed line is the matched healthy stride length. (B) Time spent freezing fell from 20% with ASSIST OFF to 0% with ASSIST ON."
    right_title="Dual-task"
    right_src="/images/publications/personalized-hip-assistance/fig7-dual-task.png"
    right_alt="Gait metrics under single-task and dual-task conditions with and without assistance"
    right_caption="Fig. 7. Single- versus dual-task walking (n = 3: P02–P04; hatched bars are dual task). (A) The added cognitive task generally reduced walking speed and stride length, confirming higher task demand. (B) Under dual-task walking, ASSIST ON still produced the longest strides, larger hip range of motion and foot-to-floor angle, and lower stride length and stride time variability than NO EXO and ASSIST OFF. Digit span accuracy decreased with ASSIST ON in all three participants."
%}

{% include project-figure.html
    title="Whole-body kinematics"
    src="/images/publications/personalized-hip-assistance/fig6-kinematics.png"
    alt="Hip knee ankle kinematics and additional gait parameters under three assistance conditions"
    caption="Fig. 6. Motion-capture kinematics on the Biomechanics Evaluation Day (n = 2: P01, P02) under NO EXO, ASSIST OFF, and ASSIST ON. Curves are averaged across strides, sides, and participants, with 0% of the gait cycle at heel strike. Panels A–C show the angle profile, range of motion, angular velocity profile, and peak velocity for each joint; arrows mark changes with assistance. (A) Hip: range of motion increased, along with peak extension velocity in loading response and peak flexion velocity in pre-swing. (B) Knee: range of motion and swing-phase peak flexion velocity increased. (C) Ankle: range of motion and push-off peak plantarflexion velocity increased. (D) Step length, toe clearance, and foot-to-floor angle increased and average trunk flexion decreased (a more upright posture). Step width and maximum trailing limb angle showed no consistent trend. Gains extend beyond the assisted hip joint."
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
