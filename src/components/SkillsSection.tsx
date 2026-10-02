'use client';

import React, { useState } from 'react';
import { SKILLS } from '../data/portfolio';
import { Layout, Server, Wrench, Cpu, CheckCircle2, Search } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Cpu },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend & DB', icon: Server },
    { id: 'tools', label: 'DevOps & Tools', icon: Wrench },
  ];

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative bg-gray-950/40 border-y border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="text-neon-violet">Proficiency Matrix</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Modern full-stack technologies, frameworks, and engineering tools mastered over professional experience.
          </p>

          {/* Search Bar & Category Filter Pills */}
          <div className="space-y-4 pt-4">
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g. React, PostgreSQL, Docker)..."
                className="w-full bg-gray-900/90 text-xs text-white placeholder-gray-500 pl-10 pr-4 py-3 rounded-full border border-gray-800 focus:outline-none focus:border-violet-500/50 transition-colors font-mono"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs cursor-pointer font-bold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30 scale-105'
                        : 'bento-card text-gray-400 hover:text-white hover:bg-gray-800/80'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bento Grid Matrix */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="bento-card rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-violet-500/50 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {skill.proficiency}%
                  </span>
                </div>

                {/* Progress Level Gauge */}
                <div className="w-full bg-gray-900/90 h-2 rounded-full overflow-hidden p-0.5 border border-gray-800">
                  <div
                    className="bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 text-sm font-mono">
            No technology skills matching "{searchQuery}"
          </div>
        )}
      </div>
    </section>
  );
};

