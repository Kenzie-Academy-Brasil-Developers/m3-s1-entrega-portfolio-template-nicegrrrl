import styles from "./style.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <li className={styles.card}>
      <div className={styles.card__top}>
        <div className={styles.card__info}>
          <h4 class="title3">{project.name}</h4>
          <p class="paragraph">{project.description}</p>
        </div>
        <div>
          <button href="" className="link__button">
            Saiba mais
          </button>
        </div>
      </div>
      <div>
        <img src="../../../../src/assets/git-icon.png" alt="" />
      </div>
    </li>
  );
};
