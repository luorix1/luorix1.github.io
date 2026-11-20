---
layout: page
title: Resume
permalink: /resume/
wide: true
plain: true
body_class: page-resume
description: "One-page resume of Jinwoo Hwang: skills, education, research and professional experience, publications, and patents."
redirect_from:
  - /cv/
  - /cv.html
---

{%- assign a = site.author -%}
{%- assign pdf = '/files/Hwang_Jinwoo_Resume.pdf' -%}

<div class="resume-actions">
  <a class="btn btn--primary" href="{{ pdf | relative_url }}" download><i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i>Download PDF (1 page)</a>
  <button type="button" class="btn" data-print><i class="fa-solid fa-print" aria-hidden="true"></i>Print</button>
  <a class="btn" href="{{ '/projects/' | relative_url }}"><i class="fa-solid fa-diagram-project" aria-hidden="true"></i>Projects</a>
</div>

<div class="resume">

<header class="resume__header">
  <p class="resume__name">Jinwoo Hwang</p>
  <p class="resume__contact">
    <span>Pittsburgh, PA</span>
    <span><a href="mailto:{{ a.email }}">{{ a.email }}</a></span>
    <span><a href="https://luorix1.github.io">luorix1.github.io</a></span>
    <span><a href="https://github.com/luorix1">github.com/luorix1</a></span>
  </p>
</header>

<section class="resume__section" aria-labelledby="r-skills">
  <h2 class="resume__heading" id="r-skills">Skills</h2>
  <dl class="resume-skills">
    {% for sk in site.data.skills %}
    <div><dt>{{ sk.name }}</dt><dd>{{ sk.tools | join: ', ' }}</dd></div>
    {% endfor %}
  </dl>
</section>

<section class="resume__section" aria-labelledby="r-education">
  <h2 class="resume__heading" id="r-education">Education</h2>
  <div class="cv-item">
    <div class="cv-item__head"><span class="cv-item__org">Carnegie Mellon University, Pittsburgh, PA</span><span class="cv-item__date">Aug 2025 – Present</span></div>
    <p class="cv-item__role">M.S. in Mechanical Engineering (Research Track) · QPA 4.0/4.0</p>
  </div>
  <div class="cv-item">
    <div class="cv-item__head"><span class="cv-item__org">Seoul National University, Seoul, Republic of Korea</span><span class="cv-item__date">Aug 2025</span></div>
    <p class="cv-item__role">B.S. in Electrical and Computer Engineering, Cum Laude · GPA 3.84/4.3</p>
  </div>
</section>

<section class="resume__section" aria-labelledby="r-research">
  <h2 class="resume__heading" id="r-research">Research Experience</h2>
  <div class="cv-item">
    <div class="cv-item__head"><span class="cv-item__org">MetaMobility Lab, Carnegie Mellon University · <span class="cv-item__title">Graduate Researcher</span></span><span class="cv-item__date">Aug 2025 – Present</span></div>
    <ul class="resume-bullets">
      <li>Designed a kinematics-based joint-moment estimator that transferred to 3 wearable platforms without fine-tuning (R² up to 0.85).</li>
      <li>Aggregated fragmented open-source biomechanics datasets into one OpenSim-processed training set.</li>
      <li>Reduced joint-moment RMSE by 17% by adding multi-joint kinematic context to IMU-based estimators.</li>
      <li>Trained reinforcement-learning controllers in musculoskeletal simulation (Hyfydy/SCONE, MuJoCo Warp) for sim-to-real transfer.</li>
    </ul>
  </div>
  <div class="cv-item">
    <div class="cv-item__head"><span class="cv-item__org">Wearable Robotics Lab, Seoul National University · <span class="cv-item__title">Research Intern</span></span><span class="cv-item__date">Apr 2024 – Jul 2025</span></div>
    <ul class="resume-bullets">
      <li>Developed the IMU stride-length pipeline for CMA-ES human-in-the-loop optimization with 10 Parkinson’s patients.</li>
      <li>Supported a study in which personalized hip assistance increased stride length by 23% and eliminated freezing in 1 patient.</li>
    </ul>
  </div>
  <div class="cv-item">
    <div class="cv-item__head"><span class="cv-item__org">Computer Vision Lab, Seoul National University · <span class="cv-item__title">Research Intern</span></span><span class="cv-item__date">Jun – Dec 2024</span></div>
    <ul class="resume-bullets">
      <li>Developed a visual SLAM system for omnidirectional cameras and a pose-estimation method for sparse images.</li>
    </ul>
  </div>
  <div class="cv-item">
    <div class="cv-item__head"><span class="cv-item__org">NXC Lab, Seoul National University · <span class="cv-item__title">Research Intern</span></span><span class="cv-item__date">Aug – Dec 2023</span></div>
    <ul class="resume-bullets">
      <li>Compressed immersive 3D media for streaming by encoding scenes as sets of 2D RGB and RGB-D images.</li>
    </ul>
  </div>
</section>

<section class="resume__section" aria-labelledby="r-work">
  <h2 class="resume__heading" id="r-work">Work Experience</h2>
  <div class="cv-item">
    <div class="cv-item__head"><span class="cv-item__org">DALPHA · <span class="cv-item__title">Machine Learning Engineer</span></span><span class="cv-item__date">Feb – Aug 2024</span></div>
    <ul class="resume-bullets">
      <li>Delivered 11 client contracts from 14+ proofs of concept in vision, audio, LLMs, and recommender systems.</li>
      <li>Established machine-learning team practices at a seed-stage enterprise-AI startup.</li>
    </ul>
  </div>
  <div class="cv-item">
    <div class="cv-item__head"><span class="cv-item__org">Deeping Source · <span class="cv-item__title">Computer Vision Research Engineer</span></span><span class="cv-item__date">Nov 2022 – Feb 2024</span></div>
    <ul class="resume-bullets">
      <li>Built pedestrian tracking and analytics for anonymization, spatial-AI, and store-care products.</li>
      <li>Authored 2 papers, including first-author WACV 2024, and co-invented a patent granted in Korea and the US.</li>
    </ul>
  </div>
  <div class="cv-item">
    <div class="cv-item__head"><span class="cv-item__org">KODEBOX (ZUZU) · <span class="cv-item__title">Software Engineer</span></span><span class="cv-item__date">Feb – Oct 2022</span></div>
    <ul class="resume-bullets">
      <li>Developed SaaS dashboards for 4 equity-management workflows, including a new stock-option feature.</li>
    </ul>
  </div>
</section>

<section class="resume__section" aria-labelledby="r-projects">
  <h2 class="resume__heading" id="r-projects">Projects</h2>
  <div class="cv-item">
    <div class="cv-item__head"><span class="cv-item__org"><a href="{{ '/projects/ethereal/' | relative_url }}">Ethereal: Tactile 3D CAD Interface</a> · <span class="cv-item__title">CES 2025 Innovation Awards Honoree</span></span><span class="cv-item__date">Jan 2025</span></div>
    <ul class="resume-bullets">
      <li>Co-designed a 45×45 actuated pin-array interface synchronized with a digital-twin CAD model (2-person team).</li>
    </ul>
  </div>
  <div class="cv-item">
    <div class="cv-item__head"><span class="cv-item__org"><a href="{{ '/projects/aerial-righting/' | relative_url }}">Aerial-Righting Multi-Link Robot</a> · <span class="cv-item__title">CMU 24-775 course project</span></span><span class="cv-item__date">2025</span></div>
    <ul class="resume-bullets">
      <li>Evaluated spine and tail contributions to mid-air righting via MuJoCo simulation, RL control, and drop tests.</li>
    </ul>
  </div>
</section>

<section class="resume__section" aria-labelledby="r-pubs">
  <h2 class="resume__heading" id="r-pubs">Publications</h2>
  <ol class="resume-pubs">
    <li><strong>J. Hwang</strong>, I. Park, C. Song, V. Phan, E. Halilaj, I. Kang. “A Unified Kinematic Representation Enables Reusable Biological Joint Moment Estimation.” <em>IEEE TBME</em>, under review, 2026.</li>
    <li>S. Kim, S. Noh, S. J. Yun, <strong>J. Hwang</strong>, et al. “Personalized Hip Assistance to Improve Gait Performance in Individuals with Parkinson’s Disease.” <em>JNER</em>, under review, 2026.</li>
    <li>S. Kim, <strong>J. Hwang</strong>, et al. “Evaluation of Personalized Hip Assistance for Gait Improvement in Individuals with Parkinson’s Disease.” <em>ICNR</em>, accepted extended abstract, 2026.</li>
    <li><strong>J. Hwang</strong>, P. Benz, P. Kim. “Booster-SHOT: Boosting Stacked Homography Transformations for Multiview Pedestrian Detection with Attention.” <em>IEEE/CVF WACV</em>, 2024.</li>
    <li>J. Jeong, M. Cho, P. Benz, <strong>J. Hwang</strong>, et al. “Privacy Safe Representation Learning via Frequency Filtering Encoder.” <em>IJCAI-ECAI AISafety Workshop</em>, 2022.</li>
  </ol>
</section>

<section class="resume__section" aria-labelledby="r-patents">
  <h2 class="resume__heading" id="r-patents">Patents and Awards</h2>
  <dl class="resume-skills resume-skills--short">
    <div><dt>Patents</dt><dd>Multi-view object detection with homography attention (<span class="nowrap">US 11,514,323; KR 10-2524234</span>) · Walking aid device (<span class="nowrap">KR 10-2107583</span>) · Window control system (<span class="nowrap">KR 10-2088983</span>) · Medical capsule (<span class="nowrap">KR 10-1839541</span>)</dd></div>
    <div><dt>Awards</dt><dd>Kwanjeong Study Abroad Scholarship (2025–present) · Presidential Science Scholar, Korea Student Aid Foundation (2019–2025) · CES 2025 Innovation Awards Honoree</dd></div>
  </dl>
</section>

</div>
