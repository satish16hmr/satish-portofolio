'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { Mail, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative bg-gray-950/60 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Initiate Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Build <span className="text-neon-cyan">Something Great</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Reach out directly for project proposals, engineering contracts, or full-time opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Direct Contact Bento Cell */}
          <div className="lg:col-span-5 bento-card rounded-3xl p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-violet-400" /> Direct Hub
              </h3>

              {/* Email Card */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                  Email Address
                </span>
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-900/90 border border-gray-800">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                    <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-gray-400 hover:text-white rounded-xl hover:bg-gray-800 transition-colors shrink-0"
                    title="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <p className="text-xs text-emerald-400 font-medium">
                    ✓ Email address copied to clipboard!
                  </p>
                )}
              </div>

              {/* Location Card */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                  Base Location
                </span>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-900/90 border border-gray-800 text-xs sm:text-sm text-gray-200">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-800/80 space-y-3">
              <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                Social Accounts
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-2xl bg-gray-900/90 border border-gray-800 hover:border-violet-500/40 text-xs font-bold text-gray-300 hover:text-white transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-2xl bg-gray-900/90 border border-gray-800 hover:border-violet-500/40 text-xs font-bold text-gray-300 hover:text-white transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form Bento Cell */}
          <div className="lg:col-span-7 bento-card rounded-3xl p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Message Transmitted!</h3>
                <p className="text-gray-400 text-sm max-w-md mx-auto">
                  Thank you for reaching out, Satish has received your inquiry and will respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-violet-600 rounded-full hover:bg-violet-500 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-2">Send Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-gray-400 uppercase">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-2xl bg-gray-900/90 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-gray-400 uppercase">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-gray-900/90 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-gray-400 uppercase">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-2xl bg-gray-900/90 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-gray-400 uppercase">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Satish, I would like to discuss..."
                    className="w-full px-4 py-3 rounded-2xl bg-gray-900/90 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
