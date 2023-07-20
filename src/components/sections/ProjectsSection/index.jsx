import styles from "./style.module.css";

import { ProjectsList } from "./ProjectsList/index.jsx";

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className={styles.projectsSection}>
          <h3 className="title2">Projetos</h3>
          <ProjectsList />
        </div>
      </div>
    </section>
  );
};
