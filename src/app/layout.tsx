import type { Metadata } from 'next';
import './globals.css';
import { PERSONAL_INFO } from '../data/portfolio';

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
  description: `${PERSONAL_INFO.bio} Specialized in Next.js, React, Node.js, TypeScript, PostgreSQL, and cloud deployments.`,
  keywords: [
    'Satish Chotaliya',
    'Full-Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Node.js Engineer',
    'TypeScript Portfolio',
    'App Store Optimization Dashboard',
    'Crowdfunding SaaS',
    'Surat Gujarat Developer',
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  openGraph: {
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.tagline,
    type: 'website',
    locale: 'en_US',
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#030712] text-gray-100 antialiased selection:bg-violet-500 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
