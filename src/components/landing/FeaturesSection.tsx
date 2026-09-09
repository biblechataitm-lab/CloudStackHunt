'use client';

import React from 'react';
import { Cloud, Cpu, Zap, Eye, Shield, TrendingUp } from 'lucide-react';

const FEATURES = [
  { icon: Cloud, title: 'Multi-Cloud', desc: 'AWS, GCP, Azure, and bare-metal — every cloud platform covered.' },
  { icon: Cpu, title: 'K8s Ecosystem', desc: 'Operators, Helm charts, service meshes, and cluster management tools.' },
  { icon: Zap, title: 'Serverless Hub', desc: 'Lambda, Cloud Functions, and edge computing platforms compared.' },
  { icon: Eye, title: 'Observability', desc: 'Monitoring, logging, tracing, and APM tools benchmarked side-by-side.' },
  { icon: Shield, title: 'Cloud Security', desc: 'CSPM, CWPP, and cloud-native security posture management tools.' },
  { icon: TrendingUp, title: 'Infra Trends', desc: 'Emerging patterns — platform engineering, FinOps, and AI infrastructure.' },
];

export function FeaturesSection() {
  return (
    <section className="csh-features">
      <div className="csh-features-header">
        <h2 className="csh-section-title">
          Why <span className="csh-accent-text">CloudStackHunt</span>
        </h2>
        <p className="csh-section-subtitle">More than a directory — a curated ecosystem built for your workflow.</p>
      </div>
      <div className="csh-features-grid">
        {FEATURES.map((f) => (
          <div key={f.title} className="csh-feature-card">
            <div className="csh-feature-icon"><f.icon size={22} /></div>
            <h3 className="csh-feature-title">{f.title}</h3>
            <p className="csh-feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
