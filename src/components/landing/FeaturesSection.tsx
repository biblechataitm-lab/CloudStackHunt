'use client';

import React from 'react';

export function FeaturesSection() {
  return (
    <section className="cloud-features container">
  <div className="cloud-section-heading">
    <span className="cloud-blue-tag">// INFRASTRUCTURE SPEC</span>
    <h2>Engineered for High-Scale Availability</h2>
  </div>
  <div className="cloud-grid-3">
    <div className="cloud-card">
      <div className="c-icon">⚡</div>
      <h3>Sub-Millisecond Edge Routing</h3>
      <p>Intelligent Anycast networking that steers incoming requests to the geographically nearest server node.</p>
    </div>
    <div className="cloud-card">
      <div className="c-icon">💾</div>
      <h3>Instant Branchable Databases</h3>
      <p>Copy on write storage engines that spin up isolated dev and staging databases in less than 500ms.</p>
    </div>
    <div className="cloud-card">
      <div className="c-icon">📦</div>
      <h3>Self-Hosted Sovereignty</h3>
      <p>Run modern PaaS controllers on your own bare-metal servers without paying enterprise cloud markup.</p>
    </div>
  </div>
</section>
  );
}
