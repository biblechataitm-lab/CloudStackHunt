'use client';

import React from 'react';

export function Header({ siteName = 'CloudStackHunt' }: { siteName?: string }) {
  return (
    <header className="cloud-navbar">
      <div className="container cloud-nav-inner">
        <a href="/" className="cloud-brand">
          <span className="cloud-logo-cloud">☁️</span>
          <span className="cloud-brand-name">{siteName}</span>
          <span className="cloud-mesh-badge">EDGE·MESH</span>
        </a>

        <div className="cloud-nav-menu">
          <a href="/" className="cloud-nav-item active">Cloud Feed</a>
          <a href="/category/serverless" className="cloud-nav-item">Serverless &amp; Edge</a>
          <a href="/category/infrastructure" className="cloud-nav-item">PaaS &amp; DBs</a>
          <a href="/trends" className="cloud-nav-item">Latency Radar</a>
          <a href="/sponsor" className="cloud-nav-item cloud-nav-highlight">Underwrite</a>
        </div>

        <div className="cloud-nav-actions">
          <div className="cloud-status-chip">
            <span className="cloud-pulse-blue"></span>
            <span>REGIONS: 100% ONLINE</span>
          </div>
          <a href="/submit" className="cloud-cta-btn">
            + Deploy Stack <span className="cloud-cta-arrow">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}

