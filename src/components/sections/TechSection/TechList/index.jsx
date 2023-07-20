import { technologies } from "../../../../data/technologies.js";
import { TechCard } from "../TechCard/index.jsx";
import styles from "./style.module.css";

export const TechList = () => {
  return (
    <ul className={styles.techList}>
      {technologies.map((tech) => {
        return <TechCard key={tech.id} tech={tech} />;
      })}
    </ul>
  );
};
