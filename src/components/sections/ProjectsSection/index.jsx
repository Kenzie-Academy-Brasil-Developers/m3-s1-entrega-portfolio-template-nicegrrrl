// import { projects } from "../../../data/projects.js";

import { ProjectsList } from "./ProjectsList/index.jsx";

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <div class="container">
        <h3 className="title2">Projetos</h3>
        <ProjectsList />
      </div>
    </section>
  );
};
