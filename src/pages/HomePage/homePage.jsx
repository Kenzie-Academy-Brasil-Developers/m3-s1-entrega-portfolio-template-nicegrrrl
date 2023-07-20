import { BannerSection } from "../../components/sections/BannerSection";
import { AboutMeSection } from "../../components/sections/AboutMeSection";
import { TechSection } from "../../components/sections/TechSection";
import { ProjectsSection } from "../../components/sections/ProjectsSection";
import { DefaultTemplate } from "../../components/DefaultTemplate";

export const HomePage = () => {
  return (
    <>
      <DefaultTemplate>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectsSection />
      </DefaultTemplate>
    </>
  );
};
