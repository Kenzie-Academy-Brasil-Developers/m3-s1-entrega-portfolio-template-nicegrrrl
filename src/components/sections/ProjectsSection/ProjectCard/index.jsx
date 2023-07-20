import styles from "./style.module.css";
import github from "../../../../assets/git-icon.png";

export const ProjectCard = ({ project }) => {
  return (
    <li className={styles.card}>
      <div className={styles.card__top}>
        <div className={styles.card__info}>
          <h4 className="title3">{project.name}</h4>
          <p className="paragraph">{project.description}</p>
        </div>
        <div>
          <button className="link__button">Saiba mais</button>
        </div>
      </div>
      <div>
        <img src={github} alt="github icon" />
      </div>
    </li>
  );
};
