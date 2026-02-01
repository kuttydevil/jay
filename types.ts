
export interface TechStackItem {
  category: string;
  items: string[];
}

export interface Section {
  title: string;
  content: string;
}

export interface ProjectLinks {
  demo?: string;
  repo?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string; // e.g., "AI / PWA"
  executiveSummary: string;
  techStack: string[];
  keyFeatures: Section[];
  architecture: Section[];
  technicalHighlights: Section[];
  links?: ProjectLinks;
}

export interface StatTile {
  id: number;
  label: string;
  value: string;
  icon: 'Server' | 'Cpu' | 'Shield' | 'Users';
}

export interface TechCategory {
  title: string;
  skills: string[];
}
