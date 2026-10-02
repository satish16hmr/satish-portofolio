'use client';

import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolio';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Sparkles, Code2, Globe, Search, Award } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'saas'>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'aso-dashboard':
        return <Search className="w-6 h-6 text-cyan-400" />;
      case 'superfunding':
        return <Sparkles className="w-6 h-6 text-violet-400" />;
      case 'winecountry':
        return <Globe className="w-6 h-6 text-emerald-400" />;
      default:
        return <Code2 className="w-6 h-6 text-violet-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider">
            Engineered Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured <span className="text-neon-violet">SaaS & Full-Stack Apps</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Scalable applications built with React, Next.js, Node.js, Express, MongoDB, PostgreSQL, and Stripe.
          </p>

          {/* Filter Pills */}
          <div className="flex justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30'
                  : 'bento-card text-gray-400 hover:text-white'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'fullstack'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30'
                  : 'bento-card text-gray-400 hover:text-white'
              }`}
            >
              Full-Stack
            </button>
            <button
              onClick={() => setActiveFilter('saas')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'saas'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30'
                  : 'bento-card text-gray-400 hover:text-white'
              }`}
            >
              SaaS Platforms
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bento-card rounded-3xl p-6 flex flex-col justify-between space-y-6 group hover:border-violet-500/50"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gray-900/90 border border-gray-800 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {getProjectIcon(project.id)}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        <Award className="w-3 h-3" /> Featured
                      </span>
                    )}
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-2 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Technologies & CTA */}
              <div className="space-y-4 pt-4 border-t border-gray-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[11px] font-mono text-gray-300 bg-gray-900/90 border border-gray-800 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-0.5 text-[11px] font-mono text-violet-400 bg-violet-500/10 rounded-lg">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center cursor-pointer justify-between px-4 py-2.5 rounded-2xl bg-gray-900/80 hover:bg-violet-600/20 border border-gray-800 hover:border-violet-500/40 text-xs font-bold text-violet-300 hover:text-white transition-all group/btn"
                >
                  <span>View System Architecture</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
