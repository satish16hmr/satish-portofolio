'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { Menu, X, FileText, Sparkles, Terminal, Volume2, VolumeX, Zap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Synthesize Web Audio click sound effect
  const playClickSfx = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {
      // Ignore audio context errors
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['about', 'skills', 'api-playground', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'API Sandbox', href: '#api-playground', id: 'api-playground' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Floating Pill Bar */}
        <div className="w-full floating-dock rounded-full px-5 py-2.5 flex items-center justify-between border border-white/10 shadow-2xl">
          {/* Brand Logo / Avatar Pill */}
          <a href="#about" onClick={playClickSfx} className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-violet-500/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-gray-950 rounded-full flex items-center justify-center font-bold text-xs text-white">
                SC
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-bold text-white tracking-tight group-hover:text-violet-300 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="block text-[10px] text-cyan-400 font-mono">
                Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-gray-950/60 p-1 rounded-full border border-gray-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={playClickSfx}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all relative ${
                    isActive
                      ? 'text-white bg-violet-600 shadow-md shadow-violet-600/40'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Social Icons, SFX Toggle & Resume Action */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                playClickSfx();
              }}
              title={soundEnabled ? 'Disable UI Sound Effects' : 'Enable Cyber Sound Effects'}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                soundEnabled
                  ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40 shadow-sm'
                  : 'text-gray-400 hover:text-white border-gray-800 hover:bg-gray-800/60'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800/60 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800/60 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-full shadow-lg shadow-violet-600/30 transition-all hover:scale-[1.03]"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white rounded-full bg-gray-900/60 border border-gray-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 floating-dock rounded-2xl p-5 border border-white/10 space-y-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-gray-400 hover:text-white bg-gray-900 rounded-full"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-gray-400 hover:text-white bg-gray-900 rounded-full"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-violet-600 rounded-full"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

