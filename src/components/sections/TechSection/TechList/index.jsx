import { technologies } from "../../../../data/technologies.js";
import { TechCard } from "../TechCard/index.jsx";

export const TechList = () => {
  return (
    <ul>
      {technologies.map((tech) => {
        return <TechCard key={tech.id} tech={tech} />;
      })}
    </ul>
  );
};
