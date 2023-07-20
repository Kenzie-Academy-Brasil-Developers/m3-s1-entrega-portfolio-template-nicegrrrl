import { ProjectCard } from "../ProjectCard";
import { projects } from "../../../../data/projects.js";
import styles from "./style.module.css";

export const ProjectsList = () => {
  return (
    <ul className={styles.projectList}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
};
