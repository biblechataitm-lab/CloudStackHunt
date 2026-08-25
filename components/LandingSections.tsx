'use client';

import React from 'react';
import Link from 'next/link';
import { Cloud, Server, Database, Shield, Terminal, ArrowRight, CheckCircle2, Zap, Radio, Layers } from 'lucide-react';

export function LandingSections() {
  return (
    <div className="landing-additional-sections">
      {/* 1. Feature Highlights Bento Grid */}
      <section className="landing-feature-grid-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Radio size={12} className="text-cyan-400" />
            <span>Curated Infrastructure Matrix</span>
          </div>
          <h2 className="landing-section-heading">Architected for Platform & DevOps Leads</h2>
          <p className="landing-section-sub">
            Discover production-grade Kubernetes operators, immutable Terraform templates, distributed database engines, and edge computing proxies.
          </p>
        </div>

        <div className="landing-bento-grid">
          {/* Bento Card 1: Kubernetes & Mesh */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box cyan">
                <Server size={20} />
              </div>
              <span className="bento-badge">Multi-Cloud Ready</span>
            </div>
            <h3 className="bento-card-title">Kubernetes Mesh & GitOps Control Planes</h3>
            <p className="bento-card-desc">
              Battle-tested ArgoCD pipelines, Cilium eBPF network security fabrics, and Envoy edge gateway ingress configurations.
            </p>
            <div className="bento-metric-row">
              <div className="metric-pill">
                <span className="pill-val">3,400+</span>
                <span className="pill-lbl">Verified Stacks</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">99.999%</span>
                <span className="pill-lbl">SLA Standard</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">CNCF</span>
                <span className="pill-lbl">Compliant</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Immutable IaC */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box blue">
                <Layers size={20} />
              </div>
              <span className="bento-badge">Terraform / OpenTofu</span>
            </div>
            <h3 className="bento-card-title">Immutable IaC Blueprints</h3>
            <p className="bento-card-desc">
              Zero-drift AWS, GCP, and Azure Terraform & Pulumi infrastructure modules.
            </p>
            <div className="bento-check-list">
              <span className="check-item"><CheckCircle2 size={13} /> OpenTofu 1.8+ Native</span>
              <span className="check-item"><CheckCircle2 size={13} /> Automated Cost Checks</span>
            </div>
          </div>

          {/* Bento Card 3: Distributed DBs */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box emerald">
                <Database size={20} />
              </div>
              <span className="bento-badge">Global Scale</span>
            </div>
            <h3 className="bento-card-title">Distributed OLTP & Vector DBs</h3>
            <p className="bento-card-desc">
              High-concurrency PostgreSQL extensions, ClickHouse analytical clusters, and Milvus vector search.
            </p>
          </div>

          {/* Bento Card 4: Edge POPs & Zero-Trust */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box purple">
                <Shield size={20} />
              </div>
              <span className="bento-badge">Zero-Trust</span>
            </div>
            <h3 className="bento-card-title">Global Edge POPs & WebAssembly Runtimes</h3>
            <p className="bento-card-desc">
              Sub-10ms cold-start serverless runtimes, Cloudflare Worker harnesses, and WireGuard VPN tunnels.
            </p>
            <div className="bento-tag-row">
              <span className="tag-chip">eBPF Security</span>
              <span className="tag-chip">Cilium Mesh</span>
              <span className="tag-chip">Envoy Proxy</span>
              <span className="tag-chip">ArgoCD Native</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curation Process Section */}
      <section className="landing-process-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Cloud size={12} className="text-cyan-400" />
            <span>DevOps Verification</span>
          </div>
          <h2 className="landing-section-heading">How CloudStackHunt Verifies Stacks</h2>
          <p className="landing-section-sub">
            Every infrastructure template is sanity-checked against CNCF benchmarks and security standards.
          </p>
        </div>

        <div className="process-steps-grid">
          <div className="process-step-card">
            <div className="step-number">01</div>
            <h4 className="step-title">Architecture & IaC Audit</h4>
            <p className="step-desc">
              We inspect Helm charts, Terraform schemas, and container security manifests for vulnerabilities.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">02</div>
            <h4 className="step-title">Dry-Run Cluster Deploy</h4>
            <p className="step-desc">
              We execute synthetic load testing and cold-start measurement on real multi-region clusters.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">03</div>
            <h4 className="step-title">Featured Production Radar</h4>
            <p className="step-desc">
              Passed blueprints receive verified badges, 1-click CLI deploy snippets, and distribution to 45,000+ SREs.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Launch CTA Banner */}
      <section className="landing-launch-cta">
        <div className="launch-cta-content">
          <span className="launch-cta-tag">✦ LAUNCH ON CLOUDSTACKHUNT</span>
          <h3 className="launch-cta-heading">Ship Your Cloud Infrastructure Stack to 45,000+ DevOps Leads</h3>
          <p className="launch-cta-desc">
            Get your developer tooling, Kubernetes operator, or cloud service in front of enterprise decision makers.
          </p>
          <div className="launch-cta-buttons">
            <Link href="/submit" className="launch-cta-primary">
              Deploy Stack Now <ArrowRight size={15} />
            </Link>
            <Link href="/category/cloud" className="launch-cta-secondary">
              Explore Stacks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
