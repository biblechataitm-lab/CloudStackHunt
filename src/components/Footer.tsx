import React from 'react';
import Link from 'next/link';
import { ExternalLink, MessageCircle, Mail } from 'lucide-react';

export function Footer({ siteName = 'CloudStackHunt' }: { siteName?: string }) {
  return (
    <footer className="csh-footer">
      <div className="csh-footer-content">
        <div className="csh-footer-top">
          <div className="csh-footer-brand-area">
            <div className="csh-footer-brand"><span>{siteName}</span></div>
            <p className="csh-footer-tagline">The cloud infrastructure tool directory. Discover Kubernetes operators, serverless frameworks, IaC tools, and observability platforms.</p>
            <div className="csh-footer-socials">
              <a href="#" aria-label="Website"><ExternalLink size={16} /></a>
              <a href="#" aria-label="Community"><MessageCircle size={16} /></a>
              <a href="#" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>
          <div className="csh-footer-links-grid">
            <div>
              <h4 className="csh-footer-heading">Explore</h4>
              <ul>
                <li><Link href="/">Today's Launches</Link></li>
                <li><Link href="/trends">Trending</Link></li>
                <li><Link href="/collections/this-week">Weekly Top</Link></li>
                <li><Link href="/collections/this-month">Monthly Top</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="csh-footer-heading">Categories</h4>
              <ul>
                <li><Link href="/category/kubernetes">Kubernetes</Link></li>
                <li><Link href="/category/serverless">Serverless</Link></li>
                <li><Link href="/category/iac">IaC</Link></li>
                <li><Link href="/category/observability">Observability</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="csh-footer-heading">Directory</h4>
              <ul>
                <li><Link href="/submit">Submit Product</Link></li>
                <li><Link href="/sponsor">Sponsor</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="csh-footer-bottom">
          <span>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</span>
          <span>Powered by the Publisher Ad Network</span>
        </div>
      </div>
    </footer>
  );
}
