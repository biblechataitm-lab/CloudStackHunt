'use client';

import React from 'react';

export function Header({ siteName = 'CloudStackHunt' }: { siteName?: string }) {
  return (
    <header className="cloud-navbar">
      <div className="container cloud-nav-inner">
        <a href="/" className="cloud-brand">
          <span className="cloud-logo-cloud">☁</span>
          <span>CloudStackHunt</span>
        </a>
        <div className="cloud-nav-menu">
        <a href="/">Cloud Feed</a>
        <a href="/trends">Latency Index</a>
        <a href="/category/serverless">Serverless & Edge</a>
        <a href="/sponsor">Underwrite</a>
        </div>
        <a href="/submit" className="cloud-cta-btn">+ Add Cloud Tool</a>
      </div>
    </header>
  );
}
