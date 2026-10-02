'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { MapPin, Mail, ArrowRight, Sparkles, Terminal, Code2, Cpu, CheckCircle, Play, CornerDownLeft, Server, Zap, Database } from 'lucide-react';

interface CommandOutput {
  command: string;
  output: string | React.ReactNode;
}

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cli' | 'architecture'>('cli');
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'satish --version',
      output: 'Satish OS v2.6.0 (Full-Stack Engineer CLI Environment)',
    },
    {
      command: 'cat status.json',
      output: JSON.stringify({ role: 'Full-Stack Developer', exp: '2+ Years', availability: 'Immediate / Remote' }, null, 2),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const availableCommands = ['help', 'skills', 'projects', 'integrations', 'contact', 'clear'];

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: string | React.ReactNode = '';

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-cyan-300">
            <div>Available commands:</div>
            <div>• <span className="text-amber-300">skills</span> - View core technical stack matrix</div>
            <div>• <span className="text-amber-300">projects</span> - List engineered full-stack SaaS apps</div>
            <div>• <span className="text-amber-300">integrations</span> - Display Enterprise API experience</div>
            <div>• <span className="text-amber-300">contact</span> - Show direct contact details</div>
            <div>• <span className="text-amber-300">clear</span> - Reset terminal history</div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="text-violet-300 space-y-1">
            <div>⚡ Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS</div>
            <div>⚡ Backend: Node.js, Express, NestJS, PostgreSQL, MongoDB, Prisma</div>
            <div>⚡ DevOps: Docker, AWS S3/EC2, Vercel, Render, Postman</div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="text-emerald-300 space-y-1">
            <div>1. ASO Dashboard (Full-Stack Keyword & Competitor Analytics)</div>
            <div>2. Superfunding SaaS (AI-Powered Crowdfunding & Stripe Billing)</div>
            <div>3. Winecountry Tracker (FedEx Logistics & Real-Time Tracking)</div>
          </div>
        );
        break;

      case 'integrations':
        outputNode = (
          <div className="text-amber-300 space-y-1">
            <div>✦ OAuth 2.0 Auth & Webhook Services</div>
            <div>✦ Stripe Metered Billing & Webhook Processing</div>
            <div>✦ FedEx Logistics Real-Time Tracking APIs</div>
            <div>✦ Supabase Real-Time DB & Auth Sync</div>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="text-cyan-300">
            Email: {PERSONAL_INFO.email} | Location: {PERSONAL_INFO.location}
          </div>
        );
        break;

      default:
        outputNode = <span className="text-rose-400">Command not recognized. Type 'help' to see valid commands.</span>;
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: outputNode }]);
    setInputVal('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-mesh-glow">
      {/* Background Decorative Mesh Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Main Hero Cell (Span 7) */}
          <div className="lg:col-span-7 bento-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="space-y-6">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Open for Full-Stack & Remote Roles</span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Hi, I'm <span className="text-neon-violet">{PERSONAL_INFO.name}</span>
                </h1>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-300 flex items-center gap-2">
                  <span className="text-cyan-400">&lt;</span>
                  <span>{PERSONAL_INFO.title}</span>
                  <span className="text-cyan-400">/&gt;</span>
                </h2>
              </div>

              {/* Tagline & Bio */}
              <p className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
                {PERSONAL_INFO.tagline}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                {PERSONAL_INFO.bio}
              </p>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-2">
                <div className="flex items-center gap-2 bg-gray-900/80 px-3.5 py-2 rounded-xl border border-gray-800">
                  <MapPin className="w-4 h-4 text-violet-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-900/80 px-3.5 py-2 rounded-xl border border-gray-800">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-800/80">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#api-playground"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-cyan-300 bento-card hover:bg-cyan-950/40 hover:text-white border border-cyan-500/30 transition-all hover:scale-[1.02]"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Live API Sandbox</span>
              </a>
            </div>
          </div>

          {/* Right Side Bento Grid Stack (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">

            {/* Interactive Terminal / Architecture Card */}
            <div className="bento-card rounded-3xl p-5 flex-1 flex flex-col justify-between relative overflow-hidden border border-gray-800 min-h-[340px]">

              {/* Window Header with Tabs */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                <div className="flex items-center gap-1 bg-gray-950 p-1 rounded-xl border border-gray-800">
                  <button
                    onClick={() => setActiveTab('cli')}
                    className={`px-3 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${activeTab === 'cli' ? 'bg-violet-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    CLI Sandbox
                  </button>
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-3 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${activeTab === 'architecture' ? 'bg-cyan-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    System Flow
                  </button>
                </div>
              </div>

              {/* Tab 1: Interactive CLI Terminal */}
              {activeTab === 'cli' && (
                <div className="flex-1 flex flex-col justify-between font-mono text-xs space-y-3">
                  {/* Console Log History */}
                  <div className="flex-1 overflow-y-auto max-h-[190px] space-y-2 pr-1 scrollbar-thin">
                    <div className="text-gray-500 text-[11px]">
                      // Satish Interactive CLI Terminal - Click buttons or type commands:
                    </div>

                    {history.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-1.5 text-violet-400 font-bold">
                          <span>guest@satish-dev:~$</span>
                          <span className="text-gray-200">{item.command}</span>
                        </div>
                        <div className="pl-3 text-gray-300 whitespace-pre-wrap leading-relaxed text-[11px]">
                          {item.output}
                        </div>
                      </div>
                    ))}
                    <div ref={terminalEndRef} />
                  </div>

                  {/* Runnable Command Shortcut Pills */}
                  <div className="pt-2 border-t border-gray-800/80 flex flex-wrap gap-1.5">
                    {availableCommands.map((cmd) => (
                      <button
                        key={cmd}
                        onClick={() => executeCommand(cmd)}
                        className="px-2.5 py-1 rounded-lg bg-gray-900/90 hover:bg-violet-950 hover:border-violet-500/50 border border-gray-800 text-[10px] text-cyan-300 font-mono transition-all cursor-pointer active:scale-95"
                      >
                        ${cmd}
                      </button>
                    ))}
                  </div>

                  {/* Input Prompt Box */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      executeCommand(inputVal);
                    }}
                    className="flex items-center gap-2 bg-gray-950 p-2 rounded-xl border border-gray-800"
                  >
                    <span className="text-cyan-400 font-bold text-xs pl-1">$&gt;</span>
                    <input
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder="type 'help' or click a command..."
                      className="w-full bg-transparent text-xs text-white placeholder-gray-600 focus:outline-none font-mono"
                    />
                    <button type="submit" className="text-gray-400 hover:text-white p-1">
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}

              {/* Tab 2: Live Architecture Node Flow */}
              {activeTab === 'architecture' && (
                <div className="flex-1 flex flex-col justify-center space-y-4 p-2 font-mono text-xs">
                  <div className="text-[11px] text-cyan-400 text-center font-bold">
                    Full-Stack Architecture Node Map
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-violet-950/40 border border-violet-500/30 rounded-xl p-2.5">
                      <Code2 className="w-4 h-4 text-violet-400 mx-auto mb-1" />
                      <div className="font-bold text-white text-[11px]">Frontend</div>
                      <div className="text-[9px] text-gray-400 mt-0.5">Next.js / React 19</div>
                    </div>

                    <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-xl p-2.5">
                      <Server className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                      <div className="font-bold text-white text-[11px]">Backend API</div>
                      <div className="text-[9px] text-gray-400 mt-0.5">Node / Express</div>
                    </div>

                    <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-2.5">
                      <Database className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                      <div className="font-bold text-white text-[11px]">Database</div>
                      <div className="text-[9px] text-gray-400 mt-0.5">Postgres / Mongo</div>
                    </div>
                  </div>

                  <div className="bg-gray-950/80 p-3 rounded-xl border border-gray-800 text-[10px] text-gray-300 space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-amber-400">⚡ Stripe Billing Hook:</span>
                      <span className="text-emerald-400">ACTIVE</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-400">⚡ FedEx API Tracking:</span>
                      <span className="text-emerald-400">SYNCED</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-violet-400">⚡ OAuth 2.0 Auth:</span>
                      <span className="text-emerald-400">CONNECTED</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Quick Metrics Cards Sub-Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bento-card rounded-2xl p-4 text-center">
                <div className="text-xl sm:text-2xl font-black text-violet-400">2+</div>
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-1">Years Exp.</div>
              </div>
              <div className="bento-card rounded-2xl p-4 text-center">
                <div className="text-xl sm:text-2xl font-black text-cyan-400">100%</div>
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-1">TypeScript</div>
              </div>
              <div className="bento-card rounded-2xl p-4 text-center">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">500+</div>
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-1">APIs Built</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

