import { username } from "../../../data/user.js";

export const BannerSection = () => {
  return (
    <section>
      <div>
        <p>{username}</p>
        <h2>Bem vindo ao meu portfólio</h2>
        <p>Uma frase interessante sobre mim</p>
        <button>Saiba mais</button>
      </div>
      <div>
        <img src="../../src/assets/banner-img.png" alt="banner section" />
      </div>
    </section>
  );
};
