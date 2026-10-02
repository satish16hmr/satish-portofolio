import { CyberCanvas } from '../components/CyberCanvas';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { SkillsSection } from '../components/SkillsSection';
import { ApiPlaygroundSection } from '../components/ApiPlaygroundSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-gray-100 selection:bg-indigo-500 selection:text-white relative bg-cyber-grid">
      <CyberCanvas />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ApiPlaygroundSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

