import styles from "./style.module.css";

export const TechCard = ({ tech }) => {
  return (
    <li className="card">
      <div class={styles.techCard}>
        <img src={tech.img} alt={tech.name} />
        <h4 className="title3">{tech.name}</h4>
      </div>
    </li>
  );
};
