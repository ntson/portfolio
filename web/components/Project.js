import Image from 'next/image';
import ProjectLink from './ProjectLink';

const Project = ({ project }) => {
  return (
    <article className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-10">
      <div>
        <h2 className="font-bold text-xl mb-3">{project.projectName}</h2>
        <Image
          className="rounded-md"
          src={project.projectImage.asset.url}
          alt={`${project.projectName} screenshot`}
          width={500}
          height={260}
        />
      </div>

      <div className="flex flex-col gap-2">
        <p>{project.description}</p>
        <ProjectLink url={project.githubUrl}>GitHub</ProjectLink>
        <ProjectLink url={project.homepageUrl}>Live</ProjectLink>
        <p>Tech stack: {project.tech.join(', ')}</p>
      </div>
    </article>
  );
};

export default Project;
