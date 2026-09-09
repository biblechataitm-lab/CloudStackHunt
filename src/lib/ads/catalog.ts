import type { Product, ProductPage, GetProductsOptions, SiteConfig } from './types';
import { request, mockMode } from './client';

const MOCK_PRODUCTS: Product[] = [
  {
    "id": "csh-1",
    "title": "Coolify",
    "tagline": "An open-source & self-hostable Heroku / Netlify alternative to manage servers and apps easily",
    "link": "https://coolify.io",
    "category": "CI/CD & DevOps",
    "upvotes": 520,
    "tags": [
      "self-hosted",
      "cloud",
      "paas"
    ],
    "techStack": [
      "PHP",
      "Laravel",
      "Docker"
    ],
    "maker": {
      "name": "Andras Bacsai",
      "avatar": "https://placehold.co/64x64/38bdf8/080e1a?text=CF"
    }
  },
  {
    "id": "csh-2",
    "title": "Neon DB",
    "tagline": "Serverless Postgres with autoscaling, instantaneous branching, and bottomless storage tiering",
    "link": "https://neon.tech",
    "category": "Search & Data",
    "upvotes": 470,
    "tags": [
      "postgres",
      "database",
      "serverless"
    ],
    "techStack": [
      "Rust",
      "PostgreSQL",
      "C"
    ],
    "maker": {
      "name": "Nikita Shamgunov",
      "avatar": "https://placehold.co/64x64/10b981/080e1a?text=ND"
    }
  },
  {
    "id": "csh-3",
    "title": "Cloudflare Workers",
    "tagline": "Deploy serverless compute and web applications globally across 300+ cities in milliseconds",
    "link": "https://workers.cloudflare.com",
    "category": "Developer Tools",
    "upvotes": 440,
    "tags": [
      "edge-compute",
      "serverless",
      "cdn"
    ],
    "techStack": [
      "V8 Isolates",
      "Rust",
      "TypeScript"
    ],
    "maker": {
      "name": "Matthew Prince",
      "avatar": "https://placehold.co/64x64/f59e0b/080e1a?text=CW"
    }
  },
  {
    "id": "csh-4",
    "title": "Railway",
    "tagline": "Deploy code and infrastructure from GitHub with instant preview environments and automated databases",
    "link": "https://railway.com",
    "category": "CI/CD & DevOps",
    "upvotes": 410,
    "tags": [
      "cloud",
      "paas",
      "containers"
    ],
    "techStack": [
      "Rust",
      "TypeScript",
      "Kubernetes"
    ],
    "maker": {
      "name": "Brock Herion",
      "avatar": "https://placehold.co/64x64/ec4899/080e1a?text=RW"
    }
  },
  {
    "id": "csh-5",
    "title": "Upstash",
    "tagline": "Serverless Redis, Kafka, and QStash with per-request pricing designed for Edge and Serverless",
    "link": "https://upstash.com",
    "category": "Search & Data",
    "upvotes": 380,
    "tags": [
      "redis",
      "kafka",
      "edge"
    ],
    "techStack": [
      "Go",
      "TypeScript"
    ],
    "maker": {
      "name": "Enes Akar",
      "avatar": "https://placehold.co/64x64/8b5cf6/080e1a?text=UP"
    }
  },
  {
    "id": "csh-6",
    "title": "Fly.io",
    "tagline": "Run full-stack apps and databases close to your users on physical servers worldwide",
    "link": "https://fly.io",
    "category": "CI/CD & DevOps",
    "upvotes": 350,
    "tags": [
      "containers",
      "edge",
      "firecracker"
    ],
    "techStack": [
      "Rust",
      "Go",
      "Firecracker"
    ],
    "maker": {
      "name": "Kurt Mackey",
      "avatar": "https://placehold.co/64x64/a78bfa/080e1a?text=FL"
    }
  }
];

const MOCK_SITE: SiteConfig = {
  "key": "cloudstackhunt",
  "name": "CloudStackHunt",
  "domain": "cloudstackhunt.com",
  "category": "cloud",
  "tags": [
    "cloud",
    "kubernetes",
    "serverless",
    "devops",
    "aws",
    "gcp"
  ],
  "status": "live",
  "statusMessage": null,
  "slots": [
    {
      "key": "sidebar-1",
      "slotType": "sidebar",
      "format": "native"
    }
  ]
};

export async function getSiteConfig(timeoutMs?: number): Promise<SiteConfig | null> {
  if (mockMode()) return MOCK_SITE;
  const data = await request<{ site: SiteConfig }>('/api/v1/site', {}, timeoutMs, 'getSiteConfig');
  return data?.site ?? MOCK_SITE;
}

export async function getProducts(options: GetProductsOptions = {}): Promise<ProductPage> {
  const mock = mockMode();
  if (mock) {
    if (mock === 'empty') return { products: [], nextCursor: null, appliedTags: [] };
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted = options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  const data = await request<ProductPage>(
    '/api/v1/catalog/products',
    {
      tags: options.tags?.join(','),
      category: options.category,
      q: options.q,
      since: options.since,
      sort: options.sort,
      limit: options.limit ? String(options.limit) : undefined,
      cursor: options.cursor,
    },
    options.timeoutMs,
    'getProducts',
  );

  if (!data || !data.products || data.products.length === 0) {
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted =
      options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  return data;
}

export async function getProduct(id: string, timeoutMs?: number): Promise<Product | null> {
  if (mockMode()) return MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];

  const data = await request<{ product: Product }>(
    `/api/v1/catalog/products/${encodeURIComponent(id)}`,
    {},
    timeoutMs,
    'getProduct',
  );
  return data?.product ?? MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];
}
