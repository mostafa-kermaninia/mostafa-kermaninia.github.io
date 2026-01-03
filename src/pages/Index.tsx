import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { EducationSection } from '@/components/EducationSection';
import { HonorsSection } from '@/components/HonorsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { TeachingSection } from '@/components/TeachingSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <HonorsSection />
      <SkillsSection />
      <TeachingSection />
      <ExperienceSection />
      <CaseStudiesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
