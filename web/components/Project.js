const Project = ({ project }) => {
  return (
    <article>
      <h2>{project.projectName}</h2>
      <p>{project.description}</p>
      <a href={project.githubUrl} target="_blank">
        GitHub
      </a>
      <a href={project.homepageUrl} target="_blank">
        Live
      </a>
      <p>{project.tech.join(', ')}</p>
    </article>
  );
};

export default Project;
