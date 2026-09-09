'use client';

import React from 'react';

export function HeroLanding() {
  return (
    <section class="cloud-hero">
  <div class="cloud-hero-grid container">
    <div class="cloud-hero-left">
      <div class="cloud-telemetry-tag">
        <span class="cloud-dot"></span>
        <span>EDGE TOPOLOGY · 300+ DATA CENTERS MONITORED</span>
      </div>
      <h1 class="cloud-title">
        The Modern Cloud &amp; <span class="cloud-blue">Serverless Stack</span>
      </h1>
      <p class="cloud-desc">
        Explore serverless Postgres databases, edge compute runtimes, self-hosted PaaS engines, and storage rails.
      </p>
      <div class="cloud-search-bar">
        <input type="text" placeholder="Search cloud runtimes, edge DBs, PaaS: Coolify, Neon, Railway..." class="cloud-input" />
        <button class="cloud-btn">Deploy</button>
      </div>
    </div>
    <div class="cloud-hero-right">
      <div class="cloud-region-monitor">
        <div class="region-row"><span class="region-name">🇺🇸 US-EAST-1</span><span class="region-ping ping-green">12ms · 99.999%</span></div>
        <div class="region-row"><span class="region-name">🇪🇺 EU-CENTRAL-1</span><span class="region-ping ping-green">24ms · 99.998%</span></div>
        <div class="region-row"><span class="region-name">🇯🇵 AP-NORTHEAST-1</span><span class="region-ping ping-green">38ms · 100.0%</span></div>
        <div class="region-row"><span class="region-name">🇧🇷 SA-EAST-1</span><span class="region-ping ping-green">45ms · 99.995%</span></div>
      </div>
    </div>
  </div>
</section>
  );
}
