'use client';

import React from 'react';
import Hero13 from '@/components/ui/hero-13';

export function HeroSection() {
  return (
    <div className="w-full mb-12">
      <Hero13
        brandName="CloudStackHunt"
        badgeText="✦ Production-Grade Cloud Infrastructure & DevOps"
        headingLine1="The Infrastructure Hub for"
        headingLine2="Kubernetes, Serverless & IaC."
        description="Explore 890+ verified cloud native tools, distributed databases, Terraform/Pulumi templates, and edge observability platforms curated for DevOps architects."
        primaryCtaLabel="Explore Cloud Stacks"
        primaryCtaHref="/category/cloud"
        secondaryCtaLabel="Submit Cloud Tool"
        secondaryCtaHref="/submit"
        loginLabel="Deploy Tool"
        loginHref="/submit"
        achievementText="Curating 890+ verified CNCF and enterprise cloud platforms"
      />
    </div>
  );
}
