'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket } from 'lucide-react';

export function CTASection() {
  return (
    <section className="csh-cta">
      <div className="csh-cta-glow" aria-hidden="true" />
      <div className="csh-cta-content">
        <h2 className="csh-cta-title">Submit Your Cloud Tool</h2>
        <p className="csh-cta-subtitle">Get discovered by 18K+ cloud engineers, SREs, and platform engineering teams.</p>
        <div className="csh-cta-buttons">
          <Link href="/submit" className="csh-cta-btn-primary">
            <Rocket size={15} /> Submit Product
          </Link>
          <Link href="/sponsor" className="csh-cta-btn-secondary">
            Sponsor <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
