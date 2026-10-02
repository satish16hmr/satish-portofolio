'use client';

import React, { useState } from 'react';
import { Terminal, Play, CheckCircle2, Copy, Check, ShieldCheck, Zap, Activity, Database, CreditCard, Truck, FileSignature } from 'lucide-react';

interface ApiEndpoint {
  id: string;
  name: string;
  category: string;
  icon: any;
  method: 'GET' | 'POST' | 'PUT';
  url: string;
  description: string;
  requestPayload?: any;
  mockResponse: any;
  latencyMs: number;
}

export const ApiPlaygroundSection: React.FC = () => {
  const endpoints: ApiEndpoint[] = [
    {
      id: 'oauth',
      name: 'OAuth 2.0 Security Server',
      category: 'Enterprise API',
      icon: ShieldCheck,
      method: 'POST',
      url: 'https://api.satish.dev/v1/auth/token',
      description: 'Generates secure JWT access tokens, refresh tokens, and enforces RBAC authorization policies.',
      requestPayload: {
        grantType: 'authorization_code',
        clientId: 'client_app_8892',
        clientSecret: 'sec_8839210948',
        scope: 'read:profile write:data',
      },
      mockResponse: {
        status: 'authenticated',
        tokenType: 'Bearer',
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        expiresIn: 3600,
        refreshToken: 'rt_993847291048',
      },
      latencyMs: 22,
    },
    {
      id: 'stripe',
      name: 'Stripe Usage Billing',
      category: 'Fintech & SaaS',
      icon: CreditCard,
      method: 'POST',
      url: 'https://api.satish.dev/v1/stripe/checkout-session',
      description: 'Handles tiered subscription billing, usage metering, and automated webhook event fulfillment.',
      requestPayload: {
        customerId: 'cus_N8392109',
        planTier: 'pro_monthly',
        trackedKeywordsLimit: 500,
        currency: 'usd',
      },
      mockResponse: {
        status: 'active',
        sessionId: 'cs_test_a1b2c3d4e5f6',
        clientSecret: 'pi_3M0000000000000000_secret_xxx',
        subscriptionStatus: 'ACTIVE',
        usageMetered: true,
      },
      latencyMs: 34,
    },
    {
      id: 'fedex',
      name: 'FedEx Real-Time Logistics',
      category: 'Logistics API',
      icon: Truck,
      method: 'GET',
      url: 'https://api.satish.dev/v1/fedex/tracking?trackingNumber=FX-98420119',
      description: 'Retrieves automated shipment tracking milestones and updates package delivery states in real time.',
      mockResponse: {
        trackingNumber: 'FX-98420119',
        carrier: 'FedEx Express',
        currentStatus: 'IN_TRANSIT',
        origin: 'Surat, IN',
        destination: 'San Francisco, CA',
        milestones: [
          { status: 'PICKED_UP', timestamp: '2026-08-10T14:30:00Z' },
          { status: 'DEPARTED_FACILITY', timestamp: '2026-08-11T09:15:00Z' },
          { status: 'CUSTOMS_CLEARED', timestamp: '2026-08-12T06:00:00Z' },
        ],
        estimatedDelivery: '2026-08-13T18:00:00Z',
      },
      latencyMs: 19,
    },
    {
      id: 'supabase',
      name: 'Supabase Real-Time Auth',
      category: 'Multi-Tenant SaaS',
      icon: Database,
      method: 'POST',
      url: 'https://api.satish.dev/v1/supabase/realtime-sync',
      description: 'Synchronizes multi-tenant database states and validates JWT security policies across distributed nodes.',
      requestPayload: {
        tenantId: 'tenant_enterprise_prod',
        action: 'SUBSCRIBE_CHANGES',
        table: 'live_events',
      },
      mockResponse: {
        connection: 'ESTABLISHED',
        channel: 'realtime:live_events:tenant_enterprise_prod',
        syncLatency: '12ms',
        securityPolicy: 'ROW_LEVEL_SECURITY_ENFORCED',
      },
      latencyMs: 14,
    },
  ];

  const [selectedApi, setSelectedApi] = useState<ApiEndpoint>(endpoints[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeResponse, setActiveResponse] = useState<any>(endpoints[0].mockResponse);
  const [copied, setCopied] = useState(false);
  const [lastLatency, setLastLatency] = useState(endpoints[0].latencyMs);

  const handleExecute = (api: ApiEndpoint) => {
    setIsLoading(true);
    setLastLatency(api.latencyMs);

    setTimeout(() => {
      setActiveResponse(api.mockResponse);
      setIsLoading(false);
    }, 450);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(activeResponse, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="api-playground" className="py-24 relative bg-gray-950/60 border-y border-gray-900 overflow-hidden">
      {/* Background Accent Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> Interactive Integration Sandbox
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Live API <span className="text-neon-cyan">Playground & Integrations</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Test and inspect real-time mock responses from enterprise APIs built & integrated by Satish Chotaliya.
          </p>
        </div>

        {/* API Playground Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Endpoint Selector Column */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono text-gray-400 uppercase tracking-wider px-2 flex items-center justify-between">
              <span>Select Integration Endpoint</span>
              <span className="text-cyan-400">4 Active</span>
            </div>

            {endpoints.map((api) => {
              const Icon = api.icon;
              const isSelected = selectedApi.id === api.id;
              return (
                <button
                  key={api.id}
                  onClick={() => {
                    setSelectedApi(api);
                    setActiveResponse(api.mockResponse);
                    setLastLatency(api.latencyMs);
                  }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-gradient-to-r from-violet-950/70 to-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-500/10 scale-[1.01]'
                      : 'bento-card hover:bg-gray-900/60 border-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-gray-900 text-gray-400'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                        {api.name}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                        api.method === 'GET' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-violet-500/10 text-violet-400 border border-violet-500/20'
                      }`}>
                        {api.method}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                      {api.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Console & Response Viewer */}
          <div className="lg:col-span-8 bento-card rounded-3xl p-6 flex flex-col justify-between space-y-6 border border-gray-800 relative overflow-hidden">
            
            {/* Top Bar: URL & Trigger Button */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-gray-950/90 p-3 rounded-2xl border border-gray-800">
                <div className="flex items-center gap-2 overflow-hidden flex-1 px-2">
                  <span className={`text-xs font-mono px-2 py-1 rounded font-bold shrink-0 ${
                    selectedApi.method === 'GET' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-violet-500/20 text-violet-400'
                  }`}>
                    {selectedApi.method}
                  </span>
                  <span className="text-xs font-mono text-gray-300 truncate">
                    {selectedApi.url}
                  </span>
                </div>

                <button
                  onClick={() => handleExecute(selectedApi)}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 transition-all shadow-md shadow-cyan-500/20 active:scale-95 shrink-0 cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current" />
                  )}
                  <span>{isLoading ? 'Executing...' : 'Execute Request'}</span>
                </button>
              </div>

              {/* Status Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono pt-1 text-gray-400 border-b border-gray-800/80 pb-3">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 200 OK
                  </span>
                  <span className="flex items-center gap-1.5 text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                    <Activity className="w-3.5 h-3.5" /> {lastLatency}ms latency
                  </span>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors cursor-pointer bg-gray-900/80 px-3 py-1 rounded-lg border border-gray-800"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Payload!' : 'Copy JSON'}</span>
                </button>
              </div>
            </div>

            {/* Request & Response Split Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              
              {/* Left Box: Request Payload (if POST) */}
              <div className="bg-gray-950/80 rounded-2xl p-4 border border-gray-900 flex flex-col font-mono text-xs">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Headers & Body</span>
                  <span>Content-Type: json</span>
                </div>
                {selectedApi.requestPayload ? (
                  <pre className="text-cyan-300 overflow-x-auto p-2 bg-gray-900/50 rounded-xl flex-1 leading-relaxed">
                    {JSON.stringify(selectedApi.requestPayload, null, 2)}
                  </pre>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-gray-600 italic text-center p-4">
                    HTTP GET Request — No Request Body Required
                  </div>
                )}
              </div>

              {/* Right Box: Response Payload */}
              <div className="bg-gray-950/80 rounded-2xl p-4 border border-gray-900 flex flex-col font-mono text-xs">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Response JSON Payload</span>
                  <span className="text-emerald-400">Verified Integration</span>
                </div>
                <pre className="text-emerald-300 overflow-x-auto p-2 bg-gray-900/50 rounded-xl flex-1 leading-relaxed">
                  {JSON.stringify(activeResponse, null, 2)}
                </pre>
              </div>
            </div>

            {/* Integration Summary Footer */}
            <div className="bg-violet-950/20 border border-violet-500/20 rounded-2xl p-4 text-xs text-gray-300 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-violet-400 shrink-0" />
              <div>
                <span className="font-bold text-white">Production-Ready Integration Highlight: </span>
                {selectedApi.description}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
