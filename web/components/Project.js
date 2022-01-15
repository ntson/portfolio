import Image from 'next/image';

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
        <a className="underline block" href={project.githubUrl} target="_blank">
          GitHub
        </a>
        <a
          className="underline block"
          href={project.homepageUrl}
          target="_blank"
        >
          Live
        </a>
        <p>Tech stack: {project.tech.join(', ')}</p>
      </div>
    </article>
  );
};

export default Project;
