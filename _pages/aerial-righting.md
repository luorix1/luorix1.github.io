---
layout: page
title: "Evaluating Spine–Tail Coordination for Aerial Righting in a Multi-Link Robot"
permalink: /projects/aerial-righting/
---

This page describes a course project for **24-775 Bioinspired Robot Design and Experimentation** at Carnegie Mellon University (2025).

## Overview

Many animals recover stable orientations mid-air after being thrown or falling. Cats are a classic example: they reorient their bodies during free fall so they land on their feet. Engineers often draw on this idea to build robots that must survive drops or control attitude before impact.

This project evaluated **spine–tail coordination for aerial righting** on a **multi-link robot** with a **two-degree-of-freedom spine** and a **one-degree-of-freedom active tail**. The main question was practical: **does actuating the tail meaningfully improve righting** when initial roll and pitch vary, compared to relying on the spine alone?

## Platform and approach

The hardware concept follows a **bioinspired**, cat-like decomposition of the body: a flexible midsection (spine) plus an appendage that can apply large inertial torques (tail). Simulation and experiments were designed to isolate what each part contributes under comparable initial conditions.

The workflow combined:

- **Simulation in MuJoCo** to iterate on mechanics and control before hardware risk.
- **Learning-based control** (reinforcement learning) together with model-based ideas where appropriate, to synthesize policies that achieve reorientation in simulation.
- **Physical drop tests** to check whether simulated behaviors transfer and to measure outcomes such as impact attitude and angular rates.

Together, these pieces form a closed loop from model to policy to real-world validation.

## What we observed

**Spine-driven control successfully produced aerial reorientation** in both simulation and the hardware experiments we ran. The spine was able to drive the body toward a more favorable attitude before impact.

For the **tail implementation tested in this project**, tail actuation **did not show a clear, significant improvement** in metrics such as **impact angle** and **angular velocity** relative to spine-only behavior. Interpreting that result in context: with the present tail design, gains, and timing, the **spine appeared to be the dominant contributor** to righting performance. A different tail mass, inertia, workspace, or control policy might change that tradeoff; here the evidence supported spine-first righting rather than strong complementary benefit from the tail as built.

## Takeaways

- Multi-link spine actuation is **sufficient** for meaningful aerial reorientation in this platform.
- **Tail coordination is not “free” value**: realizing a measurable gain requires matching the tail’s dynamics and control to the spine and the task—something this study suggests was not yet achieved with the current hardware and policy.
- The project illustrates a **full pipeline** typical of bioinspired design courses: literature and biology as motivation, modeling and simulation, learning-based control, and experimentation.

## Resources

- [Written report (Google Drive)](https://drive.google.com/file/d/17U8vsB2_QIyJAHGgTMYTSeoXzvY_FC2b/view?usp=sharing)
- [Poster (Google Drive)](https://drive.google.com/file/d/1VESNB0DVD6kp11nX7SPKapXAHo_yUA91/view?usp=sharing)
- [Video (YouTube)](https://youtu.be/zh_afIG5tD8?si=M9-uuBIkWfsQ_fZE)

[← Back to all projects](/projects/)
