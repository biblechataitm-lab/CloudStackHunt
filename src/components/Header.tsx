'use client';

import React from 'react';

export function Header({ siteName = 'CloudStackHunt' }: { siteName?: string }) {
  return (
    <header class="cloud-navbar">
  <div class="container cloud-nav-inner">
    <a href="/" class="cloud-brand">
      <span class="cloud-logo-cloud">☁</span>
      <span>CloudStackHunt</span>
    </a>
    <div class="cloud-nav-menu">
      <a href="/">Cloud Feed</a>
      <a href="/trends">Latency Index</a>
      <a href="/category/developer-tools">PaaS &amp; Edge</a>
      <a href="/sponsor">Underwrite</a>
    </div>
    <a href="/submit" class="cloud-cta-btn">+ Add Cloud Tool</a>
  </div>
</header>
  );
}
