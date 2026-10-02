'use client';

import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Award, Network, Server, Database, ShieldCheck, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getArchitectureNodes = (id: string) => {
    switch (id) {
      case 'aso-dashboard':
        return [
          { label: 'Client App', tech: 'React + Vite + Redux', color: 'violet' },
          { label: 'API Gateway', tech: 'Node.js + Express', color: 'cyan' },
          { label: 'Database', tech: 'MongoDB + Mongoose', color: 'emerald' },
          { label: 'External Services', tech: 'Stripe + SendGrid + AppStore Scraper', color: 'amber' },
        ];
      case 'superfunding':
        return [
          { label: 'Web Platform', tech: 'React + TypeScript', color: 'violet' },
          { label: 'BaaS Engine', tech: 'Supabase Real-Time DB', color: 'emerald' },
          { label: 'Billing API', tech: 'Stripe Metered Webhooks', color: 'amber' },
          { label: 'AI Layer', tech: 'Automated Campaign Insights', color: 'cyan' },
        ];
      case 'winecountry':
        return [
          { label: 'Client Portal', tech: 'React + Tailwind', color: 'violet' },
          { label: 'Auth & DB', tech: 'Firebase Auth + Firestore', color: 'amber' },
          { label: 'Logistics Integration', tech: 'FedEx Real-Time Tracking API', color: 'emerald' },
          { label: 'Hosting', tech: 'Firebase Global CDN', color: 'cyan' },
        ];
      default:
        return [
          { label: 'Frontend', tech: 'React / Next.js', color: 'violet' },
          { label: 'Backend API', tech: 'Node.js Express', color: 'cyan' },
          { label: 'Database', tech: 'PostgreSQL / Prisma', color: 'emerald' },
          { label: 'Cloud Infrastructure', tech: 'Vercel / Render', color: 'amber' },
        ];
    }
  };

  const nodes = getArchitectureNodes(project.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Modal Container */}
      <div 
        className="glass-panel w-full max-w-4xl rounded-3xl border border-gray-700/80 shadow-2xl relative overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar with Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/80 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-xs font-mono text-violet-300 font-semibold uppercase tracking-wider">
              {project.category} SaaS System Spec
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-gray-950 p-1 rounded-xl border border-gray-800">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === 'overview' ? 'bg-violet-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'architecture' ? 'bg-cyan-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Network className="w-3.5 h-3.5" />
                <span>Architecture Flow</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto scrollbar-thin">
          {/* Title & Role */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h2>
              {project.featured && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Award className="w-3.5 h-3.5" /> Featured Project
                </span>
              )}
            </div>
            <p className="text-xs font-mono font-semibold text-cyan-400 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Role: {project.role}
            </p>
          </div>

          {activeTab === 'overview' ? (
            <>
              {/* Detailed Overview */}
              <div className="space-y-3 bg-gray-900/40 p-4 sm:p-5 rounded-2xl border border-gray-800/80">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" /> Platform Architecture & Scope
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                  Engineered Platform Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-900/40 border border-gray-800/80 hover:border-violet-500/30 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Tech Stack */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                  Tech Stack & Integration Matrix
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Tab 2: Visual Architecture Flowchart */
            <div className="space-y-6">
              <div className="bg-gray-950/80 p-5 rounded-2xl border border-gray-800 text-center space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  <Zap className="w-3.5 h-3.5" /> Real-time System Flow Diagram
                </div>
                <p className="text-xs text-gray-400 max-w-lg mx-auto">
                  Architectural breakdown of data flow from client interfaces to backend micro-services, APIs, and enterprise cloud persistence.
                </p>
              </div>

              {/* Flowchart Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                {nodes.map((node, idx) => (
                  <div
                    key={idx}
                    className="bento-card p-4 rounded-2xl border border-gray-800 text-center space-y-2 relative group hover:border-cyan-500/50"
                  >
                    <div className="w-8 h-8 rounded-xl bg-gray-900 mx-auto flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <h4 className="text-sm font-bold text-white">{node.label}</h4>
                    <p className="text-xs font-mono text-cyan-300 bg-gray-950 p-2 rounded-xl border border-gray-900">
                      {node.tech}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-violet-950/20 border border-violet-500/20 p-4 rounded-2xl text-xs text-gray-300 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-violet-400 shrink-0" />
                <div>
                  <span className="font-bold text-white">Full-Stack Security & Scale: </span>
                  Designed with JWT authentication pipelines, CORS security headers, rate-limiting, and micro-service API abstractions.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-gray-800 bg-gray-900/80 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold cursor-pointer text-gray-300 bento-card hover:bg-gray-800 rounded-xl transition-colors"
          >
            Close Details
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-gray-200 bento-card hover:bg-gray-800 rounded-xl transition-colors"
              >
                <GithubIcon className="w-4 h-4" /> Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-violet-600/30 transition-all"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

