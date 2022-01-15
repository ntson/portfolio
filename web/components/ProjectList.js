import Project from './Project';

const ProjectList = ({ projects }) => {
  return (
    <section className="p-2 w-11/12 max-w-7xl">
      <h2 className="text-3xl font-bold mb-4">Demo Projects</h2>
      <div className="flex flex-col gap-10">
        {projects.map((project) => {
          return <Project key={project._id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectList;
