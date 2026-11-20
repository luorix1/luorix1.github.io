---
layout: project-page
title: "Personalized Hip Assistance to Improve Gait Performance in Individuals with Parkinson’s Disease"
collection: publications
category: manuscripts
permalink: /publications/personalized-hip-assistance/
date: 2026-08-21
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
pdf_url: "https://assets-eu.researchsquare.com/files/rs-10612204/v1/0f628074-b2b2-48e3-a042-9d89179075de.pdf?c=1787562298"

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
    url: "https://assets-eu.researchsquare.com/files/rs-10612204/v1/0f628074-b2b2-48e3-a042-9d89179075de.pdf?c=1787562298"
    icon: paper


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
  @misc{kim2026personalized,
    title={Personalized Hip Assistance to Improve Gait Performance in Individuals with Parkinson's Disease},
    author={Kim, Seonjeong and Noh, Seungjoo and Yun, Seo Jung and Hwang, Jinwoo and Kwon, Yujin and Lim, Bokman and Lee, Younbaek and Seo, Han Gil and Kim, Keewon and Kim, Jinsoo},
    publisher={Research Square},
    year={2026},
    month={aug},
    doi={10.21203/rs.3.rs-10612204/v1},
    url={https://doi.org/10.21203/rs.3.rs-10612204/v1},
    note={Preprint}
  }
---

<section class="pp-section pp-part" id="introduction">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">1</span>Introduction</h2>
    <div class="pp-prose">
      <p>
        Parkinson’s disease (PD) often shortens steps into a shuffle. It also stoops posture and causes
        <strong>freezing of gait</strong>, brief episodes in which the feet seem stuck to the floor. These impairments
        raise the risk of falls and threaten independence, and medication and conventional therapy only partly relieve them.
      </p>
      <p>
        Wearable robots can assist walking, but Parkinsonian gait varies widely from person to person, so a single
        fixed assistance profile rarely fits everyone. This study tested whether hip assistance <strong>personalized
        for each individual</strong> through human-in-the-loop optimization could lengthen stride toward healthy values
        and improve whole-body gait, including while people walked and performed a mental task at the same time.
      </p>
    </div>
  </div>
</section>

<section class="pp-section pp-part" id="methods">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">2</span>Methods</h2>
    <div class="pp-prose">
      <p>
        Ten participants with PD (modified Hoehn and Yahr stage 2.5–4) walked with the WIM hip exoskeleton. Its
        controller applies a delayed, scaled copy of the inter-thigh angle as torque. A gain κ therefore sets the
        magnitude of assistance, and a delay β sets its timing (Figure 1A).
      </p>
      <p>
        Over two optimization days, the <strong>CMA-ES</strong> algorithm proposed new (κ, β) pairs. For each pair,
        foot-mounted IMUs estimated stride length, and the gap from an age-, sex-, and height-matched healthy target
        served as the cost (Figure 1B). <strong>My contribution was this IMU pipeline.</strong> It converted raw foot-IMU
        signals into stride-length estimates for every optimization step and later supplied spatiotemporal metrics
        for the evaluation.
      </p>
      <p>
        On a separate evaluation day, motion capture compared three conditions: no exoskeleton, exoskeleton with
        assistance off, and exoskeleton with optimized assistance on. Participants first walked normally and then
        while performing a cognitive dual task (Figure 2).
      </p>
    </div>
  </div>
  {% include project-figure.html
    inline=true
    title="Figure 1. Controller and human-in-the-loop optimization"
    src="/images/publications/personalized-hip-assistance/fig1-device-hilo.png"
    alt="WIM hip assistance control law and CMA-ES human-in-the-loop optimization workflow"
    caption="(A) Assistance torque is the filtered inter-thigh angle from β samples earlier, scaled by κ and saturated at 6 Nm. (B) Each candidate (κ, β) is applied during walking; IMUs estimate stride length, and the gap to a healthy target is the cost that CMA-ES minimizes."
  %}
  {% include project-figure.html
    inline=true
    title="Figure 2. Study protocol"
    src="/images/publications/personalized-hip-assistance/fig2-protocol.png"
    alt="Optimization day corridor setup and biomechanics evaluation protocol"
    caption="(A) Optimization in a 128 m hospital corridor loop with a therapist holding a safety belt. (B) Timeline: screening, two optimization days, and a biomechanics evaluation day. (C) Motion-capture evaluation under three conditions, in single- and dual-task walking."
  %}
</section>

<section class="pp-section pp-part" id="results">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">3</span>Results</h2>
    <div class="pp-prose">
      <p>
        Optimized parameters differed for every participant (Figure 3), which confirms that one assistance profile
        does not fit all. With personalized assistance, stride length increased by <strong>23%</strong> (p &lt; 0.05),
        and every participant improved. Cadence fell from 128 to 116 steps/min, closer to the healthy value of 107.
        Hip range of motion rose from 28.3° to 34.4°, and foot-to-floor angle nearly doubled, from 6.6° to 12.2°
        (Figure 4).
      </p>
      <p>
        One participant who froze for 20% of a trial without assistance did not freeze at all with it (Figure 5).
        During dual-task walking, assistance still produced the longest strides. Motion capture also showed larger
        ranges of motion at the knee and ankle, not only at the assisted hip (Figures 6–7). Participants rated
        usability 5.4 out of 7 on average.
      </p>
    </div>
  </div>
  {% include project-stats.html %}
  {% include project-figure.html
    inline=true
    title="Figure 3. Participant-specific assistance"
    src="/images/publications/personalized-hip-assistance/fig3-optimized-params.png"
    alt="Optimized gain and time delay and resulting torque profiles across participants"
    caption="(A) Optimized gain κ and delay β converged to different values for each participant. (B) Resulting torque profiles differ in shape, magnitude, and timing. (C) Share of the gait cycle at the 6 Nm limit ranged from near 0% to about 45%."
  %}
  {% include project-figure.html
    inline=true
    title="Figure 4. Gait metrics after optimization"
    src="/images/publications/personalized-hip-assistance/fig4-gait-metrics.png"
    alt="Bar plots of stride length, cadence, hip ROM, and related gait metrics with and without assistance"
    caption="IMU-based gait metrics (n = 10). Bars are group means, lines are individual participants, and dashed lines are healthy reference values. * p &lt; 0.05, *** p &lt; 0.001."
  %}
  {% include project-method-pair.html
    inline=true
    title="Figures 5 and 7. Freezing of gait and dual-task walking"
    left_title="Freezing of gait (P05)"
    left_src="/images/publications/personalized-hip-assistance/fig5-fog.png"
    left_alt="Stride length time series and freezing percentage with assistance on versus off"
    left_caption="Without assistance (gray), stride length dropped to zero during a freeze; with assistance (red), it stayed near 1 m. Time frozen fell from 20% to 0%."
    right_title="Dual-task walking (n = 3)"
    right_src="/images/publications/personalized-hip-assistance/fig7-dual-task.png"
    right_alt="Gait metrics under single-task and dual-task conditions with and without assistance"
    right_caption="Under an added cognitive task, assistance still produced the longest strides and the largest hip range of motion."
  %}
  {% include project-figure.html
    inline=true
    title="Figure 6. Whole-body kinematics"
    src="/images/publications/personalized-hip-assistance/fig6-kinematics.png"
    alt="Hip knee ankle kinematics and additional gait parameters under three assistance conditions"
    caption="Motion-capture kinematics (n = 2). Range of motion increased at the hip, knee, and ankle; step length and toe clearance increased; trunk posture became more upright."
  %}
</section>

<section class="pp-section pp-part" id="discussion">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">4</span>Discussion</h2>
    <div class="pp-prose">
      <p>
        Personalized hip assistance was effective. It lengthened stride in every participant, improved gait at joints
        the device does not actuate, and kept most of its benefit under cognitive load, the condition in which people
        with PD are most prone to freezing. The wide spread of optimized parameters supports personalization over a
        single preset.
      </p>
      <p>
        The study also has limits. Walking speed did not change significantly, and digit-span accuracy fell with
        assistance in all three dual-task participants, so walking with the device may still demand attention. The
        dual-task and motion-capture analyses included only three and two participants. A larger trial is needed
        before clinical recommendations.
      </p>
    </div>
  </div>
</section>
