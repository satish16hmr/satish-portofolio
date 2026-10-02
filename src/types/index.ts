export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  proficiency: number;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'saas';
  featured: boolean;
  role: string;
  keyFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  resumeUrl: string;
  location: string;
}
