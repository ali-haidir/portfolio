// src/data/projects.ts

import type { IconType } from "react-icons";
import { FaDocker , FaPython ,FaMicrochip , FaTelegram , FaMapMarkedAlt} from "react-icons/fa";
import { SiTypescript, SiFastapi , SiChromatic , SiSelenium, SiMysql , SiNextdotjs , SiN8N, SiJavascript} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoIosTimer } from "react-icons/io";

import { GiFlatPlatform } from "react-icons/gi";



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
    slug: "intelliRetrieval",
    title: "Intelligent Search",
    subtitle: "Hybrid Rag (BM25 + Vectors) with citations",
    image: "/images/projects/rag/rag_frontend.png",
    featured: true,
    heroMeta: [
      { label: "DELIVERABLES", value: "PLATFORM" },
      { label: "IMPACT", value: "Knowledge Fusion" },
      { label: "ROLE", value: "Solution Architect" },
      { label: "SERVICES", value: "RAG • OBSERVABILITY • AI" },
    ],
    media: [
      "/images/projects/rag/rag_chat_3.png",
      "/images/projects/rag/rag_qs_ans.png",
      "/images/projects/rag/rag_ingest.png",
      "/images/projects/rag/rag_settings.png",
      "/images/projects/rag/rag_qs_ans_2.png",
      "/images/projects/rag/query_flow_diagram.png"
    ],
    story: {
      eyebrow: "THE STORY",
      paragraphs: [
        "This project started as a practical need: make scattered documents (e.g. manuals, LLDs , reports, etc.) searchable and usable during day-to-day work.",
        "Solution is intelliSearch, ahybrid retrieval flow (BM25 + embeddings) with clean citations, and a structure that can scale from personal docs to team knowledge bases.",
        "The result is a fast, explainable search experience that feels like an internal assistant—grounded, auditable, and easy to extend.",
      ],
    },
    solution: {
      description:
        "A hybrid RAG platform combining structured chunking, fast retrieval, and citation-ready answers—optimized for reliability and scale.",
      languages: [
        { name: "Python", icon: FaPython },
        { name: "Docker", icon: FaDocker },
        { name: "TypeScript", icon: SiTypescript },
        { name: "LocalAI", icon: SiFastapi },
        { name: "Vector store", icon: SiChromatic},
        { name: "Microservices", icon: FaMicrochip},

        
      ],
      specsTitle: "Development Specifications",
      specs: [
        { label: "Chunk size", value: "500 tokens" },
        { label: "Overlap", value: "120 tokens" },
        { label: "Chunk strategy", value: "Fixed-size" },
        { label: "Vector store", value: "Chroma (HNSW)" },
        { label: "Keyword search", value: "BM25 (OpenSearch)" },
        { label: "Reranking", value: "Hybrid scoring (BM25 + cosine)" },
        { label: "Retreval", value: "Neighbours Aware" }
      ],
      githubUrl: "https://github.com/ali-haidir/REPO_NAME",  //change here to the actual github repo
    },
    userFlow: {
      title: "USER FLOW",
      image: "/images/projects/rag/simple_flow.png",
      description:
        "User submits question → Hybrid retrieval (BM25 + vector search) → Context building → LLM generates answer → Answer returned with citations",
      bullets: [
        "Upload / ingest documents",
        "Chunking + embeddings + indexing",
        "Hybrid retrieval (BM25 + vector search)",
        "Rerank + build context + generate answer",
      ],
    },  
    demoVideo: {
      title: "WORKING DEMO",
      video: "/images/projects/rag/demo_video.mov",
      poster: "/images/projects/rag/rag_qs_ans_2.png",
      description:
        "Short walkthrough showing ingestion → search → cited answers in real-time.",
    },
  },

  {
    slug: "balady-automation",
    title: "Baladiya Automation & Risk Guard",
    subtitle: "Automated excavation approvals",
    image: "/images/projects/ripc/main_page.png",
    featured: true,
    heroMeta: [
      { label: "DELIVERABLES", value: "PLATFORM" },
      { label: "IMPACT", value: "Reliability" },
      { label: "ROLE", value: "Automation Engineer" },
      { label: "SERVICES", value: "SCRAPING • OTP • Handling" },
    ],
    media: [
      "/images/projects/ripc/main_page.png",
      "/images/projects/ripc/otp_page.png",
      "/images/projects/ripc/request_details.jpeg",
      "/images/projects/ripc/request_major_details.jpeg",
      "/images/projects/ripc/requests.jpeg"
    ],
    story: { eyebrow: "THE STORY", paragraphs: ["Thousands of excavation requests arrive daily, and approving the wrong one can cut provider’s fiber and trigger major outages. I built an end-to-end automation that logs into the government Baladiya portal, pulls new requests, checks each request’s lat/long against our topology within a safety radius, then auto-accepts, rejects, or raises a joint-visit case. ", "Result: faster approvals, fewer outages, and reduced operational workload and joint visits."] },
    solution: {
      description:
        "An automated approval system that evaluates government excavation requests against telecom topology to prevent cable damage, streamline responses, and coordinate joint site visits when uncertainty exists.",
      languages: [
        { name: "Python", icon: FaPython },
        { name: "Selenium", icon: SiSelenium },
        { name: "Rest Apis", icon: SiFastapi },
        { name: "Nextjs", icon: SiNextdotjs },
        { name: "Telegram Bot", icon: FaTelegram},
        { name: "Gis", icon: FaMapMarkedAlt},

        
      ],
      specsTitle: "Development Specifications",
      specs: [
        { label: "Authentication", value: "2 Factor Authentication" },
        { label: "Database", value: "PostgreSQL" },
        { label: "Gis", value: "Here Tech" },
        { label: "Automation", value: "Selenium" },
      ],
      githubUrl: "https://github.com/ali-haidir/REPO_NAME",  //change here to the actual github repo
    },
    userFlow: {
      title: "USER FLOW",
      image: "/images/projects/ripc/user_flow.png",
      description:
        "New request received → Bot logs into Baladiya portal (OTP) → Fetch requests → Geo-compare (lat/long + radius) against topology DB → Decision: Accept / Reject / Joint Visit → Portal action submitted + audit logged → Technician notified for joint visit (if needed)",
      bullets: [
        "Automated retrieval of excavation requests from a non-API government portal (Selenium)",
        "OTP-enabled login workflow using Telegram bot relay + mobile forwarding script",
        "Geo-radius matching (lat/long) against internal topology/asset database",
        "Auto-decision engine: Accept / Reject / Joint Visit based on proximity confidence",
        "Joint-visit case creation with technician details (time/day/location/contact)",
        "Next.js dashboard for tracking, audit logs, and manual override when required"
      ],
    },  
    
},

  {
    slug: "self_managed_inventory",
    title: "Self Managed Inventory",
    subtitle: "Inventory management system",
    image: "/images/projects/inventory/dash.png",
    featured: true,
    heroMeta: [
      { label: "DELIVERABLES", value: "PLATFORM" },
      { label: "IMPACT", value: "Management" },
      { label: "ROLE", value: "Architech" },
      { label: "SERVICES", value: "Services • NatBox • SNMP" },
    ],
    media: [
      "/images/projects/inventory/devices.png",
      "/images/projects/inventory/region.png",
      "/images/projects/inventory/import.png",
      "/images/projects/inventory/dash.png",
    ],
    story: {
      eyebrow: "THE STORY",
      paragraphs: ["Manual inventory tracking breaks the moment the network changes. Solution is a self-managed inventory platform where devices are created/updated automatically by syncing with NetBox, while teams can still manage attributes through clean CRUD workflows.","Result: always-current inventory, fewer manual updates, and faster operational reporting."],
    },
    solution: {
      description:
        "An inventory management system that stays up-to-date automatically by syncing devices from NetBox, while providing full CRUD operations, filtering, and operational views for daily use.",
      languages: [
        { name: "Python", icon: FaPython },
        { name: "Docker", icon: FaDocker },
        { name: "FastAPI", icon: SiFastapi },
        { name: "PostgreSQL", icon: BiLogoPostgresql },
        { name: "NetBox", icon: GiFlatPlatform },
      ],
      specs: [
        { label: "Framework", value: "FastAPI + Uvicorn" },
        { label: "Database", value: "PostgreSQL" },
        { label: "Sync", value: "NetBox" },
      ],
      // githubUrl optional
      githubUrl: "https://github.com/ali-haidir/REPO_NAME", 
    },
    userFlow: {
      title: "USER FLOW",
      image: "/images/projects/inventory/flow.png",
      description:
        "End-to-end flow from upload → retrieval → answer with citations.",
      bullets: [
        "CRUD inventory operations (devices, sites, regions, ownership)",
        "Auto-discovery sync from NetBox (create/update devices automatically)",
        "Upsert logic to prevent duplicates and keep records current",
        "Search, filtering, and quick edits via a lightweight Next.js UI",
        "PostgreSQL-backed source of truth ready for dashboards and automation",
        "Extensible design for future health checks, alerts, and reporting"
      ]
      
    },
    
  },

  {
    slug: "alarm-ticket-collaboration",
    title: "SOC–NOC Collaboration: Alarm-to-Ticket Automation",
    subtitle: "Alarms into action",
    image: "/images/projects/soc_noc/dash.png",
    featured: true,
    heroMeta: [
      { label: "DELIVERABLES", value: "AUTOMATION" },
      { label: "IMPACT", value: "Efficiency" },
      { label: "ROLE", value: "Automation Engineer" },
      { label: "SERVICES", value: "ALARMS • Tickets • FIELD" },
    ],
    media: [
      "/images/projects/soc_noc/tickets.png",
      "/images/projects/soc_noc/ticket_lifecycle.png",
      "/images/projects/soc_noc/n8n_flow.png",
      "/images/projects/soc_noc/dash.png",
      "/images/projects/soc_noc/it_ticketing_system.png",
    ],
    story: {
      eyebrow: "THE STORY",
      paragraphs: ["Operations teams were drowning in noisy alarms and manual ticket handling, slowing response time during incidents. I built an automation pipeline that cleans and suppresses alarms, extracts critical details, correlates events, and automatically creates and assigns tickets to the right teams/field crews. It also calculates customer impact and flags blackout zones when a major area is affected—resulting in faster triage, fewer duplicate tickets, and clearer outage visibility."],
    },
    solution: {
      description:
        "An end-to-end SOC–NOC workflow that transforms raw alarms into clean, enriched incidents with automatic ticket creation, smart assignment, and real-time customer impact/blackout classification.",
      languages: [
        { name: "Python" , icon:FaPython },
        { name: "JavaScript" , icon: SiJavascript },
        { name: "MySQL" , icon: SiMysql },
        { name: "Jobs" , icon: IoIosTimer },
        { name: "Workflow" , icon: SiN8N},

        
      ],
      specs: [
        { label: "Workflow", value: "Business Process" },
        { label: "DataBase", value: "MySQL" },
        { label: "Jobs", value: "Air Flow" },
      ],
      // githubUrl optional
      githubUrl: "https://github.com/ali-haidir/REPO_NAME", 
    },
    userFlow: {
      title: "USER FLOW",
      image: "/images/projects/soc_noc/ticket_lifecycle.png",
      description:
        "Alarms received → Clean + suppress + normalize → Extract & enrich critical context → Correlate + apply rules → Create ticket → Auto-assign to team/field → Compute customer impact + blackout % → Update ticket + dashboard until resolution",
      bullets: [
        "Ingest and load alarms at scale (batch/stream-ready)",
    "Cleaning, deduplication, and suppression to reduce noise",
    "Extraction of critical alarm context for actionable incidents",
    "Automated ticket creation with correct severity and metadata",
    "Smart assignment to relevant teams and field dispatch groups",
    "Customer impact calculation (count + blackout % classification)",
    "Dashboards and audit logs for end-to-end operational visibility"
      ]
      
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