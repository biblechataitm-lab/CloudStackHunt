'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, TrendingUp } from 'lucide-react';

export function HeroLanding() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const children = hero.querySelectorAll('.csh-animate');
    children.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(24px)';
      setTimeout(() => {
        htmlEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        htmlEl.style.opacity = '1';
        htmlEl.style.transform = 'translateY(0)';
      }, 100 + i * 100);
    });
  }, []);

  return (
    <section ref={heroRef} className="csh-hero">
      <div className="csh-hero-bg" aria-hidden="true" />
      <div className="csh-hero-container">
        <div className="csh-hero-content">
          <div className="csh-animate csh-hero-badge">
            <span>Cloud Infrastructure Intelligence</span>
          </div>
          <h1 className="csh-animate csh-hero-title">
            Master Your{' '}
            <span className="csh-accent-text">Cloud Stack</span>
          </h1>
          <p className="csh-animate csh-hero-subtitle">
            Discover 1,300+ cloud infrastructure tools — from Kubernetes operators and serverless frameworks to IaC platforms and observability stacks.
          </p>
          <form
            className="csh-animate csh-hero-search"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector('input');
              if (input?.value.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(input.value.trim())}`;
              }
            }}
          >
            <Search size={16} className="csh-hero-search-icon" />
            <input type="text" placeholder="Search cloud tools, K8s operators..." />
            <button type="submit">Explore <ArrowRight size={14} /></button>
          </form>
          <div className="csh-animate csh-hero-tags">
            <Link href="/category/developer-tools" className="csh-tag">Kubernetes</Link>
            <Link href="/category/ai" className="csh-tag">AI Infra</Link>
            <Link href="/category/productivity" className="csh-tag">DevOps</Link>
            <Link href="/trends" className="csh-tag csh-tag-hot">
              <TrendingUp size={12} /> Trending
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
