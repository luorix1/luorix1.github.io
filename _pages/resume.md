---
layout: page
title: Resume
permalink: /resume/
wide: true
plain: true
redirect_from:
  - /cv/
  - /cv.html
---

{% assign resume_path = site.author.resume | default: '/files/Hwang_Jinwoo_Resume.docx' %}

<p class="lead">
  A web-formatted version of my resume, excluding the leadership and activities section.
  <a class="resume-download" href="{{ resume_path | relative_url }}" download="Hwang_Jinwoo_Resume.docx">Download the DOCX</a>.
</p>

<section class="section">
  <h2 class="section__title">Education</h2>
  <ul class="cv-list">
    <li>
      <span class="cv-list__when">Aug 2025 – Current</span>
      <span class="cv-list__what"><strong>Carnegie Mellon University</strong> — Pittsburgh, PA<br>M.S.M.E.-R, Mechanical Engineering | QPA: 4.0/4.0</span>
    </li>
    <li>
      <span class="cv-list__when">Aug 2025</span>
      <span class="cv-list__what"><strong>Seoul National University</strong> — Seoul, Republic of Korea<br>B.S., Electrical and Computer Engineering, Cum Laude | GPA: 3.84/4.3</span>
    </li>
    <li>
      <span class="cv-list__when">Feb 2019</span>
      <span class="cv-list__what"><strong>Seoul Science High School</strong> — Seoul, Republic of Korea<br>GPA: 4.23/4.3</span>
    </li>
  </ul>
</section>

<section class="section">
  <h2 class="section__title">Research Experience</h2>
  <ul class="cv-list">
    <li>
      <span class="cv-list__when">Current</span>
      <span class="cv-list__what">
        <strong>MetaMobility Lab, Carnegie Mellon University</strong> · Graduate Researcher (MSME-R)
        <ul class="resume-bullets">
          <li>Explored joint kinematics as a device-agnostic intermediary input domain for data-driven controllers for wearables.</li>
          <li>Aggregated fragmented open-source biomechanics datasets to expand training data for developing open-source controllers.</li>
          <li>Developed controllers trained via reinforcement learning in simulation (Hyfydy+Scone, Mujoco Warp) via imitation learning, AMP, and bridging the sim-to-real gap for deployment onto real assistive devices.</li>
        </ul>
      </span>
    </li>
    <li>
      <span class="cv-list__when">Apr 2024 – Jul 2025</span>
      <span class="cv-list__what">
        <strong>Wearable Robotics Lab, Seoul National University</strong> · Research Intern
        <ul class="resume-bullets">
          <li>Conducted a human-in-the-loop exoskeleton personalization study for Parkinson’s disease patients aimed at improving spatiotemporal parameters such as stride length and preventing freezing of gait (FoG).</li>
          <li>Developed an IMU-based spatiotemporal parameter extraction pipeline for 1) CMA-ES via foot-mounted IMUs during optimization and 2) auxiliary analysis during evaluation.</li>
        </ul>
      </span>
    </li>
    <li>
      <span class="cv-list__when">Jun – Dec 2024</span>
      <span class="cv-list__what">
        <strong>Computer Vision Lab, Seoul National University</strong> · Research Intern
        <ul class="resume-bullets">
          <li>Developed a visual SLAM system for omnidirectional cameras and proposed a pose-estimation solution for sparse images.</li>
        </ul>
      </span>
    </li>
    <li>
      <span class="cv-list__when">Aug – Dec 2023</span>
      <span class="cv-list__what">
        <strong>NXC Lab, Seoul National University</strong> · Research Intern
        <ul class="resume-bullets">
          <li>Studied efficient network-wide transmission of immersive 3D media using deep-learning-aided methods; encoded 3D scenes as sets of 2D RGB or RGB-D images for compression.</li>
        </ul>
      </span>
    </li>
  </ul>
</section>

<section class="section">
  <h2 class="section__title">Professional Experience</h2>
  <ul class="cv-list">
    <li>
      <span class="cv-list__when">Feb – Aug 2024</span>
      <span class="cv-list__what">
        <strong>DALPHA</strong> · Machine Learning Engineer
        <ul class="resume-bullets">
          <li>Developed and shipped B2B AI SaaS products spanning computer vision, audio processing, LLMs, and recommender systems; delivered 11 contracts through 14+ proof-of-concept projects.</li>
          <li>Built ML team best practices and contributed to a collaborative engineering culture at a seed-stage enterprise AI startup.</li>
        </ul>
      </span>
    </li>
    <li>
      <span class="cv-list__when">Nov 2022 – Feb 2024</span>
      <span class="cv-list__what">
        <strong>DEEPING SOURCE</strong> · Computer Vision Research Engineer
        <ul class="resume-bullets">
          <li>Delivered tailored AI solutions in anonymization, spatial AI, and store-care technologies; implemented pedestrian tracking and analytics for clients and executive demonstrations.</li>
          <li>Authored international-conference papers and contributed to a registered patent.</li>
        </ul>
      </span>
    </li>
    <li>
      <span class="cv-list__when">Feb – Oct 2022</span>
      <span class="cv-list__what">
        <strong>KODEBOX (ZUZU)</strong> · Software Engineer
        <ul class="resume-bullets">
          <li>Developed SaaS dashboards for shareholder lists, stock options, required filings, and shareholder meetings; implemented a new stock-option feature.</li>
        </ul>
      </span>
    </li>
  </ul>
</section>

<section class="section">
  <h2 class="section__title">Selected Projects</h2>
  <ul class="cv-list">
    <li>
      <span class="cv-list__when">Jan 2025</span>
      <span class="cv-list__what">
        <strong>Tactile Interface for 3D CAD Modeling</strong> — CES 2025 Innovation Awards Honoree
        <ul class="resume-bullets">
          <li>Reinventing CAD interaction with a tactile interface inspired by work from the MIT Tangible Media Group (2-person team).</li>
        </ul>
      </span>
    </li>
    <li>
      <span class="cv-list__when">Aug – Dec 2023</span>
      <span class="cv-list__what">
        <strong>AR-based 3D Visual Art Experience via Mobile App</strong>
        <ul class="resume-bullets">
          <li>Built an AR camera app with on-device object detection and interactive 3D rendering above detected objects (2-person team).</li>
        </ul>
      </span>
    </li>
    <li>
      <span class="cv-list__when">Sep 2020 – Feb 2021</span>
      <span class="cv-list__what">
        <strong>Remote Proctor System for COVID-era Testing</strong>
        <ul class="resume-bullets">
          <li>Developed Windows/macOS clients with RTSP streaming, recording, and login functionality.</li>
        </ul>
      </span>
    </li>
    <li>
      <span class="cv-list__when">Jul – Sep 2019</span>
      <span class="cv-list__what">
        <strong>Arm Rehabilitation Robot</strong>
        <ul class="resume-bullets">
          <li>Implemented stepper-motor control using potentiometers as angle sensors, plus recording and playback of desired motion patterns for the SNU Creative Design Fair.</li>
        </ul>
      </span>
    </li>
  </ul>
</section>

<section class="section">
  <h2 class="section__title">Patents</h2>
  <ul class="cv-list">
    <li>
      <span class="cv-list__when">Apr 2023</span>
      <span class="cv-list__what">
        <strong>Methods for Performing Multi-view Object Detection Using a Homography Attention Module</strong>
        <ul class="resume-bullets">
          <li>Registrations: KR 10-2524234 B1, US 11,514,323 B1, EP 22176028 A. Developed an attention module tailored to the overall architecture and achieved state-of-the-art pedestrian-detection performance.</li>
        </ul>
      </span>
    </li>
    <li>
      <span class="cv-list__when">Apr 2020</span>
      <span class="cv-list__what">
        <strong>Walking Aid Device</strong>
        <ul class="resume-bullets">
          <li>Registration: KR 10-2107583. Designed a pressure-sensor, servomotor, and cloud-enabled walking aid for people with mobility issues; awarded a $400 prize.</li>
        </ul>
      </span>
    </li>
    <li>
      <span class="cv-list__when">Mar 2020</span>
      <span class="cv-list__what">
        <strong>System for Controlling Window</strong>
        <ul class="resume-bullets">
          <li>Registration: KR 10-2088983. Used indoor/outdoor pollutant sensing to automatically lock, unlock, open, or close windows based on air-quality conditions.</li>
        </ul>
      </span>
    </li>
    <li>
      <span class="cv-list__when">Mar 2018</span>
      <span class="cv-list__what">
        <strong>Medical Capsule Design</strong>
        <ul class="resume-bullets">
          <li>Registration: KR 10-1839541. Used gelatin and glycerin density differences to maintain vertical pill orientation and ease swallowing; awarded a Silver Prize.</li>
        </ul>
      </span>
    </li>
  </ul>
</section>

<section class="section">
  <h2 class="section__title">Publications</h2>
  <ul class="cv-list">
    <li>
      <span class="cv-list__when">2026</span>
      <span class="cv-list__what">
        <strong>Kinematics Enable Device-Agnostic Biological Joint Moment Estimation</strong>
        <ul class="resume-bullets">
          <li>Manuscript in preparation for submission to IEEE Transactions on Biomedical Engineering.</li>
          <li>Developed a kinematics-based framework for estimating biological joint moments across hip and knee exoskeletons and an IMU sensing system, reducing dependence on device-specific sensor configurations.</li>
        </ul>
      </span>
    </li>
    <li>
      <span class="cv-list__when">2026</span>
      <span class="cv-list__what">
        <strong>Personalized Hip Assistance to Improve Gait Performance in Individuals with Parkinson’s Disease</strong>
        <ul class="resume-bullets">
          <li>Manuscript submitted to the Journal of NeuroEngineering and Rehabilitation.</li>
          <li>Demonstrated that personalized hip assistance increased stride length and improved multiple gait metrics in individuals with Parkinson’s disease, including eliminating freezing episodes in one participant.</li>
        </ul>
      </span>
    </li>
    <li>
      <span class="cv-list__when">2026</span>
      <span class="cv-list__what">
        <strong>Evaluation of Personalized Hip Assistance for Gait Improvement in Individuals with Parkinson’s Disease</strong>
        <ul class="resume-bullets">
          <li>Extended abstract accepted to the 7th International Conference on NeuroRehabilitation (ICNR 2026), Seoul, Republic of Korea.</li>
          <li>Showed that personalized hip assistance improved stride length and whole-body gait biomechanics, with benefits largely maintained during cognitively demanding dual-task walking.</li>
        </ul>
      </span>
    </li>
    <li>
      <span class="cv-list__when">2024</span>
      <span class="cv-list__what">
        <strong>Booster-SHOT: Boosting Stacked Homography Transformations for Multiview Pedestrian Detection with Attention</strong>
        <ul class="resume-bullets">
          <li>IEEE/CVF WACV 2024, pp. 362–371. Proposed the Homography Attention Module and Booster-SHOT, an end-to-end multiview pedestrian-detection architecture using novel channel and spatial gates.</li>
        </ul>
      </span>
    </li>
    <li>
      <span class="cv-list__when">2022</span>
      <span class="cv-list__what">
        <strong>Privacy Safe Representation Learning via Frequency Filtering Encoder</strong>
        <ul class="resume-bullets">
          <li>IJCAI-ECAI Workshop on AI Safety; arXiv:2208.02482. Showed that reconstruction attackers can recover original images from existing adversarial representation-learning methods; proposed a low-pass-filtering encoder that limits frequency-domain information.</li>
        </ul>
      </span>
    </li>
  </ul>
</section>

<section class="section">
  <h2 class="section__title">Honors &amp; Awards</h2>
  <ul class="cv-list">
    <li>
      <span class="cv-list__when">Aug 2025 – Present</span>
      <span class="cv-list__what">Study Abroad Scholarship — Kwanjeong Educational Foundation</span>
    </li>
    <li>
      <span class="cv-list__when">Mar 2019 – Aug 2025</span>
      <span class="cv-list__what">Presidential Science Scholar — Korea Student Aid Foundation</span>
    </li>
    <li>
      <span class="cv-list__when">Nov 2024</span>
      <span class="cv-list__what">CES 2025 Innovation Awards Honoree</span>
    </li>
  </ul>
</section>

<p class="lead">Leadership &amp; Activities are intentionally omitted from this web version.</p>
