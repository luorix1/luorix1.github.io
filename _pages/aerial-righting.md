---
layout: project-page
title: "Evaluating Spine–Tail Coordination for Aerial Righting in a Multi-Link Robot"
permalink: /projects/aerial-righting/
eyebrow: "24-775 Bioinspired Robot Design and Experimentation · Carnegie Mellon University · 2025"
description: "A cat-inspired multi-link robot with a two-degree-of-freedom spine and an active tail, tested in MuJoCo and in physical drop tests to see whether the tail improves mid-air righting."
summary: "Cats twist their bodies to land on their feet. We built a robot with a cat-like spine and an active tail to find out how much each part contributes to righting itself in mid-air."
teaser: /images/projects/aerial-righting/drop-test.webp
links:
  - label: Report
    url: https://drive.google.com/file/d/17U8vsB2_QIyJAHGgTMYTSeoXzvY_FC2b/view?usp=sharing
    icon: file-lines
  - label: Poster
    url: https://drive.google.com/file/d/1VESNB0DVD6kp11nX7SPKapXAHo_yUA91/view?usp=sharing
    icon: image
  - label: Video
    url: https://youtu.be/zh_afIG5tD8
    icon: youtube
---

<section class="pp-section pp-part" id="introduction">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">1</span>Introduction</h2>
    <div class="pp-prose">
      <p>
        Robots that fall, whether a legged robot slipping off a ledge or a rover dropped onto rough terrain, are
        often damaged on impact. Animals solve this problem in mid-air: a falling cat twists its spine and swings
        its tail to rotate its body so it lands feet-first. Copying that ability would let robots protect their
        hardware and keep working after a fall.
      </p>
      <p>
        Engineers usually borrow one of two mechanisms: a flexible <strong>spine</strong> or an inertial
        <strong>tail</strong>. The objective of this course project was to determine whether an active tail improves
        righting <strong>beyond what a two-degree-of-freedom spine achieves alone</strong> when the robot starts from
        different roll and pitch angles.
      </p>
    </div>
  </div>
</section>

<section class="pp-section pp-part" id="design">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">2</span>Design</h2>
    <div class="pp-prose">
      <p>
        The robot follows the cat’s body plan: a front and rear body joined by a <strong>2-DoF actuated spine</strong>,
        plus a <strong>1-DoF active tail</strong> that can swing to generate large inertial torques. This split lets
        us switch the tail on or off while keeping the rest of the robot the same.
      </p>
      <p>
        We developed the controller in three stages, from model to policy to real-world test:
      </p>
      <ul>
        <li><strong>Simulation in MuJoCo</strong> to iterate on mechanics and control before risking hardware.</li>
        <li><strong>Learning-based control</strong> (reinforcement learning, supported by model-based reasoning) to synthesize righting policies in simulation.</li>
        <li><strong>Physical drop tests</strong> to check whether simulated behaviors transfer, measuring attitude and angular velocity at impact.</li>
      </ul>
    </div>
  </div>
  {% include project-figure.html
    inline=true
    title="Figure 1. Drop test"
    src="/images/projects/aerial-righting/drop-test.webp"
    alt="The orange multi-link robot twisting in mid-air during a drop test, with its tail extended"
    caption="The robot reorients during a drop test. Front and rear bodies rotate relative to each other through the spine while the tail swings."
    narrow=true
  %}
</section>

<section class="pp-section pp-part" id="evaluation">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">3</span>Evaluation</h2>
    <div class="pp-prose">
      <p>
        <strong>The spine worked.</strong> Spine-driven control reoriented the robot toward a favorable landing
        attitude, both in simulation and in hardware drop tests.
      </p>
      <p>
        <strong>The tail did not add a measurable benefit.</strong> With the tail design, gains, and timing we
        tested, tail actuation did not significantly improve impact angle or angular velocity compared with the
        spine alone. For this platform, the spine was the dominant contributor to righting.
      </p>
    </div>
  </div>
  <div class="pp-wrap pp-media">
    <h3 class="pp-media__title">Video. Simulation and drop tests</h3>
    <div class="pp-card pp-card--narrow pp-embed">
      <iframe src="https://www.youtube-nocookie.com/embed/zh_afIG5tD8" title="Aerial righting robot: simulation and drop tests" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
    </div>
  </div>
</section>

<section class="pp-section pp-part" id="conclusion">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">4</span>Conclusion</h2>
    <div class="pp-prose">
      <p>
        A multi-link spine is sufficient for meaningful aerial reorientation, so designers can get righting ability
        without adding a tail. A tail is not free value: to help, its mass, inertia, range of motion, and control
        policy must be matched to the spine. Our hardware and policy did not achieve that match.
      </p>
      <p>
        A follow-up design would increase the tail’s inertia relative to the body and train the spine and tail
        policies jointly, then repeat the same drop tests to measure any gain.
      </p>
    </div>
  </div>
</section>
