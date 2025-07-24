import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import InteractiveGame from "@/components/interactive-game";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import AnimatedCursor from "@/components/animated-cursor";
import ScrollProgress from "@/components/scroll-progress";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <ScrollProgress />
      <AnimatedCursor />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <InteractiveGame />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
