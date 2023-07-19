import { ProjectCard } from "../ProjectCard";
import { projects } from "../../../../data/projects.js";

export const ProjectsList = () => {
  return (
    <ul>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
};
