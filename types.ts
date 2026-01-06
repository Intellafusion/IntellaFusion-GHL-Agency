export interface SolutionItem {
  id: string;
  title: string;
  benefit: string;
  features: string[];
  icon: any; // Lucide icon component
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  outcome: string;
  stats: { label: string; value: string }[];
  image: string;
  images?: string[]; // Gallery images
  deliverables?: string[]; // What was delivered
  website?: string; // Client website URL
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export enum Industry {
  HOME_SERVICES = "Home Services",
  MED_SPA = "Med Spa / Aesthetics",
  DENTAL = "Dental / Clinical",
  PROFESSIONAL = "Professional Services",
  OTHER = "Other"
}