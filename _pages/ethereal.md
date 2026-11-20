---
layout: project-page
title: "Ethereal: A Digital-Twin 3D Modelling Interface"
permalink: /projects/ethereal/
redirect_from:
  - /portfolio/portfolio-1/
eyebrow: "CES 2025 Innovation Awards Honoree · Industrial Equipment & Machinery"
description: "Ethereal is a tactile 3D-modelling device: a 45×45 actuated pin array that stays synchronized with a digital-twin CAD model."
summary: "Instead of pushing a mouse around a flat screen, you shape a 3D model with your hands on a surface of 2,025 actuated pins that stays synchronized with its digital twin."
teaser: /images/projects/ethereal/render.webp
links:
  - label: CES Innovation Awards entry
    url: https://www.ces.tech/innovation-awards/2025/ethereal-digital-twin-3d-modelling-solution/
    icon: trophy
---

<section class="pp-section pp-part" id="introduction">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">1</span>Introduction</h2>
    <div class="pp-prose">
      <p>
        Computer-aided design (CAD) lets people model almost any object, but building a 3D shape with a mouse on a
        flat screen takes training and separates the designer from the physical form. That barrier slows experienced
        engineers and discourages newcomers.
      </p>
      <p>
        Research on shape-changing displays from the MIT Tangible Media Group showed that a surface of moving pins can
        render 3D form. Ethereal applied that idea to CAD. The objective was a device on which users
        <strong>create and edit a 3D model by touching a physical surface</strong>, while a synchronized digital twin
        keeps the CAD model up to date.
      </p>
    </div>
  </div>
</section>

<section class="pp-section pp-part" id="design">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">2</span>Design</h2>
    <div class="pp-prose">
      <p>
        The build plate is a <strong>45 × 45 array of modular pins</strong> (2,025 in total). A microcontroller
        drives a series of linear actuators that raise each pin to reproduce part of the model’s surface (Figure 1).
      </p>
      <p>
        Two modes connect the physical and digital models:
      </p>
      <ul>
        <li><strong>Edit mode:</strong> pressing pins on the plate reshapes the model, and the digital twin updates in real time.</li>
        <li><strong>Reorientation mode:</strong> on the embedded touchscreen, users pan, rotate, and zoom the digital model, then push the displayed surface back onto the plate.</li>
      </ul>
    </div>
  </div>
  {% include project-figure.html
    inline=true
    title="Figure 1. Ethereal prototype"
    src="/images/projects/ethereal/render.webp"
    alt="Rendering of the Ethereal device: a pin-array build plate showing a bent pipe shape next to a touchscreen displaying the same model"
    caption="The pin-array build plate renders an elbow pipe while the touchscreen shows its digital twin with Edit and Reorient controls."
    narrow=true
  %}
</section>

<section class="pp-section pp-part" id="evaluation">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">3</span>Evaluation</h2>
    <div class="pp-prose">
      <p>
        <strong>External recognition.</strong> Ethereal was named a <strong>CES 2025 Innovation Awards Honoree</strong>
        in Industrial Equipment &amp; Machinery. An independent judging panel selected it for innovation, engineering,
        and design.
      </p>
      <p>
        <strong>Design limits.</strong> A pin array can show only one surface height per pin, so overhangs and
        undercuts cannot be rendered. With 45 pins per side, fine detail is lost. Each additional pin also adds an
        actuator, which increases cost, power use, and the time needed to refresh the surface.
      </p>
    </div>
  </div>
</section>

<section class="pp-section pp-part" id="conclusion">
  <div class="pp-wrap pp-wrap--narrow">
    <h2 class="pp-part__title"><span class="pp-part__num">4</span>Conclusion</h2>
    <div class="pp-prose">
      <p>
        Ethereal showed that a synchronized physical and digital model can make 3D modelling more direct: users shape
        form with their hands and keep a precise CAD record. The next steps are a structured user study that
        compares task time and learning curve with screen-based CAD, and a higher-density, lower-cost actuation scheme.
      </p>
    </div>
  </div>
</section>
