import { Experience, PersonalInfo, Project, Skill } from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Satish Chotaliya',
  title: 'Full-Stack Developer',
  tagline: 'Building robust, scalable, and user-centric web applications.',
  bio: 'A passionate Full-Stack Developer with 2 years of professional experience building high-performance web applications. I specialize in Next.js, React, Node.js, and cloud deployments, bridging the gap between elegant user interfaces and scalable backend systems.',
  email: 'satishchotaliya79@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  resumeUrl: '#',
  location: 'Surat, Gujrat (Open to Remote)',
};

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React.js', category: 'frontend', proficiency: 90 },
  { name: 'Next.js', category: 'frontend', proficiency: 77 },
  { name: 'TypeScript', category: 'frontend', proficiency: 75 },
  { name: 'JavaScript (ES6+)', category: 'frontend', proficiency: 92 },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 85 },
  { name: 'Redux Toolkit', category: 'frontend', proficiency: 90 },
  { name: 'React Query', category: 'frontend', proficiency: 82 },

  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 87 },
  { name: 'Express.js', category: 'backend', proficiency: 85 },
  { name: 'NestJS', category: 'backend', proficiency: 75 },
  { name: 'PostgreSQL', category: 'backend', proficiency: 80 },
  { name: 'MongoDB', category: 'backend', proficiency: 85 },
  { name: 'Prisma ORM', category: 'backend', proficiency: 83 },
  { name: 'REST & GraphQL APIs', category: 'backend', proficiency: 88 },

  // DevOps & Tools
  { name: 'Git & GitHub', category: 'tools', proficiency: 90 },
  { name: 'Docker', category: 'tools', proficiency: 75 },
  { name: 'AWS (S3 / EC2)', category: 'tools', proficiency: 50 },
  { name: 'Vercel / Netlify', category: 'tools', proficiency: 92 },
  { name: 'Fly.io / Render', category: 'tools', proficiency: 92 },
  { name: 'Postman', category: 'tools', proficiency: 88 },
  { name: 'Linux / Bash', category: 'tools', proficiency: 75 },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'HMR Tech',
    role: 'Full-Stack Developer',
    location: 'Surat, Gujarat',
    period: 'Feb 2025 - Present',
    description: [
      'Developed and scaled full-stack web applications and multi-tenant SaaS platforms using Next.js, React, Node.js, and PostgreSQL.',
      'Designed and integrated enterprise APIs including OAuth 2.0 Auth, Stripe billing, and FedEx real-time shipment tracking.',
      'Implemented real-time data synchronization and secure authentication pipelines using Supabase and Firebase.',
      'Optimized component rendering and page performance, building responsive user interfaces with TypeScript and Tailwind CSS.',
    ],
    technologies: ['Next.js', 'React.js', 'Redux', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Supabase', 'Firebase', 'Tailwind CSS'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'aso-dashboard',
    title: 'Full-Stack App Store Optimization Dashboard',
    description: 'A full-stack app store optimization dashboard built with modern web technologies for managing app keyword performance, competitor research, and subscription-based analytics.',
    longDescription: 'Provides authenticated user access with signup, login, email verification, password reset, and profile settings. Lets users create and manage app/project entries and track app store keyword performance across iOS and Android. Supports keyword discovery, ranking history, related keyword suggestions, and bulk translation. Includes a competitor spy feature and optimization tools for keyword analysis and app store visibility. Integrates Stripe billing with usage-based plan limits for tracked apps, keywords, and historical data.',
    technologies: ['React', 'TypeScript', 'Vite', 'React Router', 'Redux Toolkit', 'MUI', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Stripe', 'SendGrid', 'Cloudinary'],
    image: 'aso-dashboard',
    category: 'fullstack',
    featured: true,
    role: 'Full-Stack Developer',
    keyFeatures: [
      'Dashboard and project overview pages for app performance monitoring.',
      'Keyword search, app keyword ranking, and top app insights across iOS and Android.',
      'Bulk keyword translation and language-specific optimization tools.',
      'Competitor spy feature to benchmark ranking performance and app store visibility.',
      'Subscription and billing management with plan enforcement via Stripe.',
      'Frontend charts and interactive tables for visualizing trend data and keyword history.',
      'Uses real app store scraping and translation workflows for actionable optimization data.',
      'Designed as a scalable full-stack SaaS-style application with separate frontend and backend layers.'
    ],
  },
  {
    id: 'superfunding',
    title: 'AI-Powered Crowdfunding SaaS Platform',
    description: 'AI-driven SaaS fundraising platform built with React, Supabase, and Stripe integrations for subscription management, automated payments, and campaign analytics.',
    longDescription: 'An innovative multi-tenant SaaS fundraising platform designed for creators, startups, and organizations. Built with React and Supabase, it features seamless real-time database syncing, multi-tier subscription billing, secure user authentication, and automated payment processing powered by Stripe.',
    technologies: ['React', 'Supabase', 'Stripe', 'TypeScript', 'Tailwind CSS'],
    image: 'superfunding',
    category: 'saas',
    featured: true,
    role: 'Full-Stack Developer',
    keyFeatures: [
      'Multi-tenant SaaS platform architecture for campaign management and backings.',
      'Seamless payment processing and subscription billing powered by Stripe.',
      'Real-time database updates and user authentication built on Supabase.',
      'AI-assisted campaign creation and real-time analytics insights dashboard.',
      'Responsive, high-performance UI tailored with React and Tailwind CSS.',
    ],
  },
  {
    id: 'winecountry',
    title: 'Beverage Logistics & Shipment Tracker',
    description: 'Logistics and delivery management portal with FedEx API tracking points integration, powered by React and Firebase.',
    longDescription: 'A specialized delivery and shipment tracking application built for logistics and wine distributors. It integrates FedEx Tracking APIs for real-time shipment milestone tracking points, while leveraging Firebase Firestore for order updates and Firebase Authentication for secure access management.',
    technologies: ['React', 'Firebase', 'FedEx API', 'Firestore', 'Firebase Auth', 'Tailwind CSS', 'JavaScript'],
    image: 'winecountry',
    category: 'fullstack',
    featured: true,
    role: 'Full-Stack Developer',
    keyFeatures: [
      'FedEx Tracking API integration for automated package movement and milestone tracking points.',
      'Real-time shipment tracking and order status updates using Firebase Firestore.',
      'Secure client access with Firebase Authentication.',
      'Fast global deployment hosted on Firebase Hosting.',
      'Mobile-first responsive shipping management dashboard.',
    ],
  },
];
