export const TechCard = ({ tech }) => {
  return (
    <li>
      <img src={tech.img} alt={tech.name} />
      <h3>{tech.name}</h3>
    </li>
  );
};
