import { technologies } from "../../../data/technologies.js";
import { TechCard } from "./TechCard/index.jsx";
import { TechList } from "./TechList/index.jsx";
import styles from "./style.module.css";

export const TechSection = () => {
  return (
    <section id="#tech">
      <div className="container">
        <div className={styles.techSection}>
          <h3 className="title2">Tecnologias</h3>
          <TechList />
        </div>
      </div>
    </section>
  );
};
