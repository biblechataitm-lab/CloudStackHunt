'use client';

import React from 'react';

export function FeaturesSection() {
  return (
    <section class="cloud-features container">
  <div class="cloud-section-heading">
    <span class="cloud-blue-tag">// INFRASTRUCTURE SPEC</span>
    <h2>Engineered for High-Scale Availability</h2>
  </div>
  <div class="cloud-grid-3">
    <div class="cloud-card">
      <div class="c-icon">⚡</div>
      <h3>Sub-Millisecond Edge Routing</h3>
      <p>Intelligent Anycast networking that steers incoming requests to the geographically nearest server node.</p>
    </div>
    <div class="cloud-card">
      <div class="c-icon">💾</div>
      <h3>Instant Branchable Databases</h3>
      <p>Copy on write storage engines that spin up isolated dev and staging databases in less than 500ms.</p>
    </div>
    <div class="cloud-card">
      <div class="c-icon">📦</div>
      <h3>Self-Hosted Sovereignty</h3>
      <p>Run modern PaaS controllers on your own bare-metal servers without paying enterprise cloud markup.</p>
    </div>
  </div>
</section>
  );
}
