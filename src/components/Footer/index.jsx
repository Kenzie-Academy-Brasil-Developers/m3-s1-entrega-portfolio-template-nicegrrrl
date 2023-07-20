import { user } from "../../data/user.js";

export const Footer = () => {
  return (
    <section id="projects">
      <div>
        <h3>Contato</h3>
        <div>
          <img src="../../src/assets/whatsapp-icon.png" alt="" />
          <img src="../../src/assets/linkedin-icon.png" alt="" />
          <img src="../../src/assets/github-icon.png" alt="" />
        </div>
        <p>Todos os direitos reservados - {user}</p>
      </div>
    </section>
  );
};
