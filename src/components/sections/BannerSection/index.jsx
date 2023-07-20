import { username } from "../../../data/user.js";
import styles from "./style.module.css";
import banner from "../../../assets/banner-img.png";

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
          <div className={styles.contentImg}>
            <div className={styles.containerImg}>
              <img src={banner} alt="banner section" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
