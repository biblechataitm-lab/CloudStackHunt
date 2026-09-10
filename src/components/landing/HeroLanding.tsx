'use client';

import React from 'react';

export function HeroLanding() {
  return (
    <section className="cloud-hero">
      <div className="cloud-hero-grid container">
        <div className="cloud-hero-left">
          <div className="cloud-telemetry-tag">
            <span className="cloud-dot"></span>
            <span>EDGE TOPOLOGY · 300+ GLOBAL POPS ACTIVE</span>
          </div>

          <h1 className="cloud-title">
            The Modern Cloud &amp; <br />
            <span className="cloud-blue">Serverless Stack</span>
          </h1>

          <p className="cloud-desc">
            Explore distributed edge compute runtimes, serverless Postgres engines, self-hosted PaaS frameworks, and global object storage rails.
          </p>

          <div className="cloud-search-bar">
            <span className="cloud-search-icon">⚡</span>
            <input 
              type="text" 
              placeholder="Search edge runtimes, Postgres DBs, PaaS: Coolify, Neon, Supabase..." 
              className="cloud-input" 
              aria-label="Search cloud stacks"
            />
            <button className="cloud-btn" type="button">
              <span>Deploy</span>
            </button>
          </div>

          <div className="cloud-tech-chips">
            <span className="cloud-chip-label">POPS:</span>
            <span className="cloud-chip">AWS Lambda</span>
            <span className="cloud-chip">Cloudflare Workers</span>
            <span className="cloud-chip">Fly.io</span>
            <span className="cloud-chip">Neon DB</span>
          </div>
        </div>

        <div className="cloud-hero-right">
          <div className="cloud-region-monitor">
            <div className="cloud-monitor-header">
              <span className="cloud-monitor-title">GLOBAL EDGE TELEMETRY</span>
              <span className="cloud-live-indicator">LIVE</span>
            </div>
            <div className="region-row">
              <span className="region-name"><span className="region-flag">🇺🇸</span> US-EAST-1 (N. Virginia)</span>
              <span className="cloud-ping ping-green">Edge Compute</span>
            </div>
            <div className="region-row">
              <span className="region-name"><span className="region-flag">🇪🇺</span> EU-CENTRAL-1 (Frankfurt)</span>
              <span className="cloud-ping ping-green">Distributed SQL</span>
            </div>
            <div className="region-row">
              <span className="region-name"><span className="region-flag">🇯🇵</span> AP-NORTHEAST-1 (Tokyo)</span>
              <span className="cloud-ping ping-green">Object Storage</span>
            </div>
            <div className="region-row">
              <span className="region-name"><span className="region-flag">🇧🇷</span> SA-EAST-1 (São Paulo)</span>
              <span className="cloud-ping ping-green">Managed PaaS</span>
            </div>
            <div className="cloud-monitor-footer">
              <span>TOPOLOGY: GLOBAL MULTI-REGION</span>
              <span className="ping-green">NOMINAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

