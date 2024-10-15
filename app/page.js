import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import CTASection from "@/components/CTASection/CTASection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import { getAboutData, getCTAData, getHeroData, getProjectData, getServicesData } from "./data/landing";

export default function Home() { 
  return (
    <main>
      <HeroSection heroData={getHeroData} />
      <AboutSection aboutData={getAboutData} />
      <ServicesSection servicesData={getServicesData} />
      <ProjectsSection projectData={getProjectData} />
      <CTASection ctaData={getCTAData} />
    </main>
  );
}
