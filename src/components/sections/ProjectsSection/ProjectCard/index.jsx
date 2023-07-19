export const ProjectCard = ({ project }) => {
  return (
    <li>
      <div>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        <a>Saiba mais</a>
      </div>
      <div>
        <img src="../../../../src/assets/git-icon.png" alt="" />
      </div>
    </li>
  );
};
