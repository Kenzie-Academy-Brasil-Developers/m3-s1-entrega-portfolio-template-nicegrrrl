import { user } from "../../data/user.js";
import styles from "./style.module.css";

export const Footer = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.footer__top}>
            <h3 className="title2">Contato</h3>
            <div className={styles.footer__icons}>
              <img src="../../src/assets/whatsapp-icon.png" alt="" />
              <img src="../../src/assets/linkedin-icon.png" alt="" />
              <img src="../../src/assets/github-icon.png" alt="" />
            </div>
          </div>
          <div className={styles.footer__bottom}>
            <p>Todos os direitos reservados -</p>
            <span>{user}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
