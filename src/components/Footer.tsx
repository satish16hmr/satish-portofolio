'use client';

import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-900 text-gray-400 text-sm py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-900">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-bold">{PERSONAL_INFO.name}</span>
              <span className="block text-xs text-gray-500 font-mono">Full-Stack Developer</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 text-indigo-400 hover:text-white bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-600 rounded-lg transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="font-mono text-[11px] text-gray-600">
            Crafted with Next.js, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
