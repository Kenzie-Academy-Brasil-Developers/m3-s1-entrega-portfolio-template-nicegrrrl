import { user } from "../../data/user.js";
import styles from "./style.module.css";
import whatsappIcon from "../../assets/whatsapp-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import githubIcon from "../../assets/github-icon.png";

export const Footer = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.footer__top}>
            <h3 className="title2">Contato</h3>
            <div className={styles.footer__icons}>
              <img src={whatsappIcon} alt="whatsapp icon" />
              <img src={linkedinIcon} alt="linkedin icon" />
              <img src={githubIcon} alt="github icon" />
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
