import { technologies } from "../../../data/technologies.js";
import { TechCard } from "./TechCard/index.jsx";
import { TechList } from "./TechList/index.jsx";

export const TechSection = () => {
  return (
    <section id="#tech">
      <h3 className="title2">Tecnologias</h3>
      <TechList />
    </section>
  );
};
