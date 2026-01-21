// src/data/projects.ts

import type { IconType } from "react-icons";
import { FaDocker , FaPython } from "react-icons/fa";
import { SiTypescript, SiFastapi } from "react-icons/si";


export type ProjectMetaItem = {
  label: string; // e.g. "DELIVERABLES"
  value: string; // e.g. "PLATFORM"
};

export type ProjectSpecItem = {
  label: string; // e.g. "Chunk size"
  value: string; // e.g. "800 tokens"
};

export type ProjectLanguageItem = {
  name: string;
  icon?: IconType;
};

export type ProjectSolution = {
  description?: string;
  languages?: ProjectLanguageItem[]; 
  specsTitle?: string;
  specs?: ProjectSpecItem[];
  githubUrl?: string; // optional
};

export type ProjectDetail = {
  slug: string; // must match /projects/[slug]
  title: string;
  subtitle?: string; // used for grid + featured captions
  image: string;
  media?: string[]; // carousel images

  heroMeta: ProjectMetaItem[];
  featured?: boolean;

  story?: {
    eyebrow?: string;
    paragraphs: string[];
  };

  // ✅ new
  solution?: ProjectSolution;
  userFlow?: ProjectUserFlow;
  demoVideo?: ProjectDemoVideo;
};


export type ProjectUserFlow = {
  title?: string;          // e.g. "USER FLOW"
  image: string;           // /public path
  description?: string;    // short paragraph
  bullets?: string[];      // optional details
};

export type ProjectDemoVideo = {
  title?: string;          // e.g. "WORKING DEMO"
  video: string;           // required if section should appear (path in /public)
  poster?: string;         // optional poster image path
  description?: string;    // short paragraph under the video
};


export const PROJECTS: ProjectDetail[] = [
  {
    slug: "rag-document-search",
    title: "RAG DOCUMENT SEARCH PLATFORM",
    subtitle: "Hybrid retrieval (BM25 + Vectors) with citations",
    image: "/images/projects/placeholder.jpeg",
    featured: true,
    heroMeta: [
      { label: "DELIVERABLES", value: "PLATFORM" },
      { label: "IMPACT", value: "Talk to LLD" },
      { label: "ROLE", value: "Solution Architect" },
      { label: "SERVICES", value: "RAG • OBSERVABILITY • AI" },
    ],
    media: [
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
    ],
    story: {
      eyebrow: "THE STORY",
      paragraphs: [
        "This project started as a practical need: make scattered documents searchable and usable during day-to-day work.",
        "I built a hybrid retrieval flow (BM25 + embeddings) with clean citations, and a structure that can scale from personal docs to team knowledge bases.",
        "The result is a fast, explainable search experience that feels like an internal assistant—grounded, auditable, and easy to extend.",
      ],
    },
    solution: {
      description:
        "A hybrid RAG platform combining structured chunking, fast retrieval, and citation-ready answers—optimized for reliability and scale.",
      languages: [
        { name: "Python", icon: FaPython },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Docker", icon: FaDocker },
        { name: "FastAPI", icon: SiFastapi },
      ],
      specsTitle: "Development Specifications",
      specs: [
        { label: "Chunk size", value: "800 tokens" },
        { label: "Overlap", value: "120 tokens" },
        { label: "Chunk strategy", value: "Recursive splitter (headings-aware)" },
        { label: "Vector store", value: "Chroma (HNSW)" },
        { label: "Keyword search", value: "BM25 (OpenSearch)" },
        { label: "Reranking", value: "Hybrid scoring (BM25 + cosine)" },
      ],
      githubUrl: "https://github.com/ali-haidir/REPO_NAME",
    },
    userFlow: {
      title: "USER FLOW",
      image: "/images/projects/placeholder.jpeg",
      description:
        "End-to-end flow from upload → retrieval → answer with citations. Lorem sahdkajsakhsdalksjdklals djaslk jdalks dkljaskdj aslkjdklasj dlkjaskdljaakjsdlksjdklajsdlkj aslkj ajsd ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos ashdksajhdkja.",
      bullets: [
        "Upload / ingest documents",
        "Chunking + embeddings + indexing",
        "Hybrid retrieval (BM25 + vector search)",
        "Rerank + build context + generate answer",
      ],
    },  
    demoVideo: {
      title: "WORKING DEMO",
      video: "/videos/demo-placeholder.mp4",
      poster: "/images/projects/placeholder.jpeg",
      description:
        "Short walkthrough showing ingestion → search → cited answers in real-time.",
    },
  },

  {
    slug: "webex-notifier",
    title: "WEBEX NOTIFIER MICROSERVICE",
    subtitle: "FastAPI service for room/user notifications",
    image: "/images/projects/placeholder.jpeg",
    featured: true,
    heroMeta: [
      { label: "DELIVERABLES", value: "MICROSERVICE" },
      { label: "IMPACT", value: "Faster incident comms" },
      { label: "ROLE", value: "Backend Engineer" },
      { label: "SERVICES", value: "INTEGRATIONS • EVENTS • NOTIFICATIONS" },
    ],
    media: [
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
    ],
    story: {
      eyebrow: "THE STORY",
      paragraphs: ["This is the story of the project", "This is the story of the project"],
    },
    solution: {
      description:
        "A lightweight notification service that sends messages to Webex rooms/users, designed for reliability and quick integration.",
      languages: [
        { name: "Python", icon: FaDocker },
        { name: "Docker", icon: FaDocker },
      ],
      specs: [
        { label: "Framework", value: "FastAPI + Uvicorn" },
        { label: "Delivery", value: "Webex REST API" },
        { label: "Deployment", value: "Docker (compose-ready)" },
      ],
      // githubUrl optional
    },
    userFlow: {
      title: "USER FLOW",
      image: "/images/projects/userflow-placeholder.png",
      description:
        "End-to-end flow from upload → retrieval → answer with citations.",
      bullets: [
        "Upload / ingest documents",
        "Chunking + embeddings + indexing",
        "Hybrid retrieval (BM25 + vector search)",
        "Rerank + build context + generate answer",
      ],
    },
  },

  {
    slug: "network-config-rollout",
    title: "NEXTGEN CONFIG ROLLOUT",
    subtitle: "Approval workflow + scheduled pushes + rollback readiness",
    image: "/images/projects/placeholder.jpeg",
    featured: true,
    heroMeta: [
      { label: "DELIVERABLES", value: "AUTOMATION" },
      { label: "IMPACT", value: "Reduced rollout risk" },
      { label: "ROLE", value: "Automation Engineer" },
      { label: "SERVICES", value: "VALIDATION • APPROVALS • ROLLBACK" },
    ],
    media: [
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
    ],
    story: {
      eyebrow: "THE STORY",
      paragraphs: ["This is the story of the project", "This is the story of the project"],
    },
    solution: {
      description:
        "A controlled rollout pipeline with approvals, scheduling, validation, and rollback readiness to reduce network change risk.",
      languages: [
        { name: "Python" },
        { name: "JavaScript" },
      ],
      specs: [
        { label: "Workflow", value: "Requester → Approval → Scheduled rollout" },
        { label: "Validation", value: "Syntax + pre-check + dry run" },
        { label: "Safety", value: "Rollback plan + audit logs" },
      ],
    },
  },

  {
    slug: "inventory-management",
    title: "INVENTORY MANAGEMENT SYSTEM",
    subtitle: "FastAPI + Postgres + Docker + RBAC",
    image: "/images/projects/placeholder.jpeg",
    featured: true,
    heroMeta: [
      { label: "DELIVERABLES", value: "PLATFORM" },
      { label: "IMPACT", value: "Cleaner asset visibility" },
      { label: "ROLE", value: "Backend Engineer" },
      { label: "SERVICES", value: "RBAC • AUDIT • IMPORTS" },
    ],
    media: [
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
    ],
    story: {
      eyebrow: "THE STORY",
      paragraphs: ["This is the story of the project", "This is the story of the project"],
    },
    solution: {
      description:
        "An inventory platform focused on clean data, RBAC, imports, and auditability—built for operational reliability.",
      languages: [
        { name: "Python" },
        { name: "SQL" },
        { name: "Docker", icon: FaDocker },
      ],
      specs: [
        { label: "DB", value: "PostgreSQL" },
        { label: "ORM", value: "Peewee" },
        { label: "Access", value: "RBAC + audit trails" },
      ],
    },
    userFlow: {
      title: "USER FLOW",
      image: "/images/projects/userflow-placeholder.png",
      description:
        "End-to-end flow from upload → retrieval → answer with citations.",
      bullets: [
        "Upload / ingest documents",
        "Chunking + embeddings + indexing",
        "Hybrid retrieval (BM25 + vector search)",
        "Rerank + build context + generate answer",
      ],
    },
  },

  // remaining projects (keep as-is; add solution later anytime)
  {
    slug: "balady-automation",
    title: "BALADY PERMIT AUTOMATION",
    subtitle: "Selenium + APIs + OTP handling + status updates",
    image: "/images/projects/placeholder.jpeg",
    featured: false,
    heroMeta: [
      { label: "DELIVERABLES", value: "AUTOMATION" },
      { label: "IMPACT", value: "Less manual effort" },
      { label: "ROLE", value: "Automation Engineer" },
      { label: "SERVICES", value: "SCRAPING • OTP • API UPDATES" },
    ],
    media: [
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
    ],
    story: { eyebrow: "THE STORY", paragraphs: ["This is the story of the project"] },
  },
  {
    slug: "device-health-check",
    title: "NETWORK DEVICE HEALTH CHECKS",
    subtitle: "Automation for large-scale Cisco/Juniper monitoring",
    image: "/images/projects/placeholder.jpeg",
    featured: false,
    heroMeta: [
      { label: "DELIVERABLES", value: "AUTOMATION" },
      { label: "IMPACT", value: "Proactive monitoring" },
      { label: "ROLE", value: "Network Automation" },
      { label: "SERVICES", value: "CHECKS • ALERTING • REPORTS" },
    ],
    media: [
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
    ],
    story: { eyebrow: "THE STORY", paragraphs: ["This is the story of the project"] },
    userFlow: {
      title: "USER FLOW",
      image: "/images/projects/userflow-placeholder.png",
      description:
        "End-to-end flow from upload → retrieval → answer with citations.",
      bullets: [
        "Upload / ingest documents",
        "Chunking + embeddings + indexing",
        "Hybrid retrieval (BM25 + vector search)",
        "Rerank + build context + generate answer",
      ],
    },
  },  
  {
    slug: "gis-customer-dashboard",
    title: "GIS CUSTOMER INTELLIGENCE DASHBOARD",
    subtitle: "Map-based visualization + data enrichment",
    image: "/images/projects/placeholder.jpeg",
    featured: false,
    heroMeta: [
      { label: "DELIVERABLES", value: "DASHBOARD" },
      { label: "IMPACT", value: "Better field insight" },
      { label: "ROLE", value: "Data Engineer" },
      { label: "SERVICES", value: "GIS • ENRICHMENT • ANALYTICS" },
    ],
    media: [
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
    ],
    story: { eyebrow: "THE STORY", paragraphs: ["This is the story of the project"] },
    userFlow: {
      title: "USER FLOW",
      image: "/images/projects/userflow-placeholder.png",
      description:
        "End-to-end flow from upload → retrieval → answer with citations.",
      bullets: [
        "Upload / ingest documents",
        "Chunking + embeddings + indexing",
        "Hybrid retrieval (BM25 + vector search)",
        "Rerank + build context + generate answer",
      ],
    },
  },
  {
    slug: "excel-import-template",
    title: "EXCEL IMPORT TEMPLATE SYSTEM",
    subtitle: "Validated templates + dropdowns + import pipeline",
    image: "/images/projects/placeholder.jpeg",
    featured: false,
    heroMeta: [
      { label: "DELIVERABLES", value: "FEATURE" },
      { label: "IMPACT", value: "Fewer data errors" },
      { label: "ROLE", value: "Backend Engineer" },
      { label: "SERVICES", value: "VALIDATION • TEMPLATES • IMPORT" },
    ],
    media: [
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
      "/images/projects/placeholder.jpeg",
    ],
    story: { eyebrow: "THE STORY", paragraphs: ["This is the story of the project"] },
    userFlow: {
      title: "USER FLOW",
      image: "/images/projects/userflow-placeholder.png",
      description:
        "End-to-end flow from upload → retrieval → answer with citations.",
      bullets: [
        "Upload / ingest documents",
        "Chunking + embeddings + indexing",
        "Hybrid retrieval (BM25 + vector search)",
        "Rerank + build context + generate answer",
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return PROJECTS.filter((p) => p.featured);
}