export const TechCard = ({ tech }) => {
  return (
    <li className="card">
      <img src={tech.img} alt={tech.name} />
      <h4>{tech.name}</h4>
    </li>
  );
};
