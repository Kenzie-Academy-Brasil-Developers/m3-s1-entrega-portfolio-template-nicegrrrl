export const ProjectCard = ({ project }) => {
  return (
    <li>
      <div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a>Saiba mais</a>
      </div>
      <div>
        <img src="../../../../src/assets/git-icon.png" alt="" />
      </div>
    </li>
  );
};
