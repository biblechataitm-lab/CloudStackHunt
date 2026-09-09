'use client';

import React from 'react';

const CATEGORIES = [
  {
    "label": "All",
    "path": "/"
  },
  {
    "label": "Serverless",
    "path": "/category/serverless"
  },
  {
    "label": "Kubernetes",
    "path": "/category/kubernetes"
  },
  {
    "label": "PaaS & Edge",
    "path": "/category/paas"
  },
  {
    "label": "Observability",
    "path": "/category/observability"
  },
  {
    "label": "Edge DBs",
    "path": "/category/database"
  },
  {
    "label": "FinOps",
    "path": "/category/finops"
  }
];

export function CategoryChips({ activeCategory }: { activeCategory?: string }) {
  return (
    <div className="category-chips-wrapper">
      <div className="category-chips-scroll">
        {CATEGORIES.map((cat) => {
          const isAll = cat.path === '/';
          const isActive = isAll ? !activeCategory : activeCategory === cat.path.replace('/category/', '');
          return (
            <a
              key={cat.path}
              href={cat.path}
              className={`chip ${isActive ? 'chip-active' : ''}`}
            >
              {cat.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
