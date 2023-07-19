import { Header } from "../../components/Header";
import { BannerSection } from "../../components/sections/BannerSection";
import { AboutMeSection } from "../../components/sections/AboutMeSection";
import { TechSection } from "../../components/sections/TechSection";
import { ProjectsSection } from "../../components/sections/ProjectsSection";
import { Footer } from "../../components/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <ProjectsSection />
      <Footer />
    </>
  );
};
