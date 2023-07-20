import { username } from "../../../data/user.js";
import styles from "./style.module.css";

export const BannerSection = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.flexBox}>
          <div className={styles.content}>
            <p className="label">{username}</p>
            <h2 className="title1">Bem vindo ao meu portfólio</h2>
            <p className={styles.text}>Uma frase interessante sobre mim</p>
            <button className="primary__button">Saiba mais</button>
          </div>
          <div className={styles.img}>
            <img src="../../src/assets/banner-img.png" alt="banner section" />
          </div>
        </div>
      </div>
    </section>
  );
};
