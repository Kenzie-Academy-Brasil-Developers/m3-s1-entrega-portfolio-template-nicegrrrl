import { Header } from "./components/Header";
import { AboutMeSection } from "./components/sections/AboutMeSection";
import { BannerSection } from "./components/sections/BannerSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { TechSection } from "./components/sections/TechSection";
import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <ProjectsSection />
    </>
  );
}

export default App;
