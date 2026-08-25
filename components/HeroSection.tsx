'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Cloud, Server, Cpu, Database, Activity, Terminal, Copy, Check, Search, ShieldCheck, ArrowRight, Layers } from 'lucide-react';

const INFRA_NODES = [
  {
    id: 'k8s-mesh',
    layer: 'Kubernetes Cluster Mesh',
    provider: 'Multi-Cloud Native',
    status: '99.999% Operational',
    cli: 'kubectl get nodes -o wide --watch',
    metrics: '42 Pods • 14ms latency • 0 errors',
    activePods: ['auth-service-v3', 'gateway-ingress-envoy', 'kafka-event-stream'],
  },
  {
    id: 'terraform-iac',
    layer: 'Terraform & OpenTofu Stacks',
    provider: 'AWS • GCP • Azure',
    status: 'Immutable State',
    cli: 'tofu apply -auto-approve -var="env=production"',
    metrics: '124 Resources managed • Zero-drift',
    activePods: ['vpc-us-east-1', 'rds-aurora-cluster', 's3-bucket-encrypted'],
  },
  {
    id: 'edge-serverless',
    layer: 'Edge Compute & Workers',
    provider: 'Cloudflare • Fastly',
    status: '280+ POPs Active',
    cli: 'wrangler deploy --env=production',
    metrics: '8ms TTFB • 4.2B req/day',
    activePods: ['wasm-router-edge', 'graphql-cache-layer', 'ddos-shield-proxy'],
  },
];

export function HeroSection() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const currentNode = INFRA_NODES[activeNodeIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentNode.cli);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="cloudstack-hero">
      <div className="cloudstack-hero-grid">
        {/* Left: Infrastructure Value Prop */}
        <div className="cloudstack-hero-content">
          <div className="cloudstack-badge">
            <span className="cloudstack-pulse-green" />
            <span>Multi-Cloud Architecture & DevOps Index</span>
          </div>

          <h1 className="cloudstack-title">
            The Definitive Directory for <span className="cloudstack-accent-text">Cloud Native</span> & Kubernetes Stacks.
          </h1>

          <p className="cloudstack-lead">
            Explore battle-tested infrastructure platforms, Terraform modules, service mesh tooling, CI/CD runners, and edge observability software.
          </p>

          {/* Search bar */}
          <form 
            action="/search" 
            method="GET" 
            className="cloudstack-search-bar"
            onSubmit={(e) => {
              if (!searchQuery.trim()) e.preventDefault();
            }}
          >
            <Search size={18} className="cloudstack-search-icon" />
            <input
              type="text"
              name="q"
              placeholder="Search Kubernetes operators, Terraform stacks, CI/CD..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="cloudstack-search-input"
            />
            <button type="submit" className="cloudstack-search-btn">
              Search Infra
            </button>
          </form>

          {/* Cloud ecosystem pills */}
          <div className="cloudstack-tags-row">
            <span className="cloudstack-tags-label">Ecosystems:</span>
            <div className="cloudstack-tags-list">
              <Link href="/category/cloud" className="cloudstack-tag-pill">
                <Server size={12} /> Kubernetes
              </Link>
              <Link href="/category/developer-tools" className="cloudstack-tag-pill">
                <Layers size={12} /> Terraform / IaC
              </Link>
              <Link href="/category/security" className="cloudstack-tag-pill">
                <Activity size={12} /> Observability
              </Link>
              <Link href="/category/automation" className="cloudstack-tag-pill">
                <Cloud size={12} /> Edge Workers
              </Link>
            </div>
          </div>

          {/* Metrics */}
          <div className="cloudstack-metrics-strip">
            <div className="cloudstack-metric-box">
              <span className="cloudstack-metric-val">3,400+</span>
              <span className="cloudstack-metric-sub">Cloud Stacks</span>
            </div>
            <div className="cloudstack-metric-divider" />
            <div className="cloudstack-metric-box">
              <span className="cloudstack-metric-val">99.999%</span>
              <span className="cloudstack-metric-sub">Uptime Verified</span>
            </div>
            <div className="cloudstack-metric-divider" />
            <div className="cloudstack-metric-box">
              <span className="cloudstack-metric-val">100% Free</span>
              <span className="cloudstack-metric-sub">Community Index</span>
            </div>
          </div>
        </div>

        {/* Right: Cluster Topology & Live Terminal Node Card */}
        <div className="cloudstack-topology-card">
          <div className="topology-card-header">
            <div className="topology-title-cluster">
              <Cloud size={16} className="text-sky-400" />
              <span className="topology-header-text">Live Infrastructure Topology</span>
            </div>
            <span className="topology-status-pill">{currentNode.status}</span>
          </div>

          {/* Topology Layer Switcher */}
          <div className="topology-layers-nav">
            {INFRA_NODES.map((node, idx) => (
              <button
                key={node.id}
                onClick={() => setActiveNodeIndex(idx)}
                className={`topology-layer-btn ${activeNodeIndex === idx ? 'active' : ''}`}
                type="button"
              >
                {node.layer}
              </button>
            ))}
          </div>

          {/* Active Node Detail Box */}
          <div className="topology-node-specs">
            <div className="node-spec-col">
              <span className="node-spec-title">Provider & Architecture</span>
              <span className="node-spec-content">{currentNode.provider}</span>
            </div>
            <div className="node-spec-col">
              <span className="node-spec-title">Telemetry & Health</span>
              <span className="node-spec-content">{currentNode.metrics}</span>
            </div>
          </div>

          {/* Active Workloads / Pods Preview */}
          <div className="topology-pods-wrapper">
            <span className="topology-pods-label">Active Deployments:</span>
            <div className="topology-pods-list">
              {currentNode.activePods.map((pod) => (
                <span key={pod} className="topology-pod-chip">
                  <span className="pod-pulse-dot" />
                  {pod}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Simulated CLI Box */}
          <div className="topology-cli-box">
            <div className="topology-cli-top">
              <div className="topology-cli-dots">
                <span className="cli-dot red" />
                <span className="cli-dot yellow" />
                <span className="cli-dot green" />
              </div>
              <button 
                onClick={handleCopy} 
                className="topology-copy-btn"
                title="Copy Command"
                type="button"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className="topology-cli-cmd">
              <span className="cli-prompt">$</span>
              <code>{currentNode.cli}</code>
            </div>
          </div>

          {/* Bottom Card CTA */}
          <div className="topology-card-footer">
            <div className="topology-verified-note">
              <ShieldCheck size={14} className="text-sky-400" />
              <span>Production Tested Cloud Stacks</span>
            </div>
            <Link href="/submit" className="topology-submit-link">
              Submit Cloud Stack <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
