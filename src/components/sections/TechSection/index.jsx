import { technologies } from "../../../data/technologies.js";
import { TechCard } from "./TechCard/index.jsx";
import { TechList } from "./TechList/index.jsx";

export const TechSection = () => {
  return (
    <section>
      <h3>Tecnologias</h3>
      <TechList />
    </section>
  );
};
