'use client';

import React from 'react';
import { EXPERIENCES } from '../data/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Engineering Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Professional <span className="text-neon-cyan">Career Timeline</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Building enterprise-level SaaS applications, microservices, real-time database sync pipelines, and third-party API integrations.
          </p>
        </div>

        {/* Bento Timeline Card */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bento-card rounded-3xl p-8 sm:p-10 border border-gray-800 hover:border-violet-500/40 relative shadow-2xl space-y-6"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg shadow-violet-600/30 shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>{exp.role}</span>
                      <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                        <ShieldCheck className="w-3 h-3" /> Active
                      </span>
                    </h3>
                    <div className="text-violet-400 font-semibold text-base mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400">
                  <div className="flex items-center gap-1.5 bg-gray-900/80 px-3 py-1.5 rounded-xl border border-gray-800">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-gray-900/80 px-3 py-1.5 rounded-xl border border-gray-800">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                  Key Achievements & Impact
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
                  {exp.description.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-900/40 border border-gray-800/60">
                      <CheckCircle className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="pt-4 border-t border-gray-800/80">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Core Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
