'use client';

import React from 'react';

const STATS = [
  { value: '1,300+', label: 'Cloud Tools' },
  { value: '18K+', label: 'Cloud Engineers' },
  { value: '3', label: 'Major Clouds' },
  { value: '98%', label: 'Uptime Tracked' },
];

export function StatsSection() {
  return (
    <section className="csh-stats">
      <div className="csh-stats-grid">
        {STATS.map((s) => (
          <div key={s.label} className="csh-stat-card">
            <div className="csh-stat-value">{s.value}</div>
            <div className="csh-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
