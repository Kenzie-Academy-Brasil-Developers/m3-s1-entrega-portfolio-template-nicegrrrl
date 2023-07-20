import styles from "./style.module.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.flexBox}>
          <h1 className="title3">Portfólio</h1>
          <nav className={styles.navbar}>
            <a href="#aboutMe">Sobre</a>
            <a href="#tech">Stack</a>
            <a href="#projects">Projetos</a>
          </nav>
          <button className="primary__button">
            <a href="#contact">Contato</a>
          </button>
        </div>
      </div>
    </header>
  );
};
