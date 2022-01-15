const ProjectLink = ({ children, url }) => {
  return (
    <a className="underline block" href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default ProjectLink;
