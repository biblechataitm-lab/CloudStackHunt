import React from 'react';
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
                <li><a href="/">Today's Launches</a></li>
                <li><a href="/trends">Trending</a></li>
                <li><a href="/collections/this-week">Weekly Top</a></li>
                <li><a href="/collections/this-month">Monthly Top</a></li>
              </ul>
            </div>
            <div>
              <h4 className="csh-footer-heading">Categories</h4>
              <ul>
                <li><a href="/category/kubernetes">Kubernetes</a></li>
                <li><a href="/category/serverless">Serverless</a></li>
                <li><a href="/category/iac">IaC</a></li>
                <li><a href="/category/observability">Observability</a></li>
              </ul>
            </div>
            <div>
              <h4 className="csh-footer-heading">Directory</h4>
              <ul>
                <li><a href="/submit">Submit Product</a></li>
                <li><a href="/sponsor">Sponsor</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
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
