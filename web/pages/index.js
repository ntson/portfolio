import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';
import { sanityClient } from '../lib/sanity';

const Home = ({ userData, projects }) => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center py-6">
      <Hero user={userData} />
      <ProjectList projects={projects} />
    </div>
  );
};

export const getStaticProps = async () => {
  const accessToken = process.env.GITHUB_ACCESS_TOKEN;

  const res = await fetch('https://api.github.com/users/ntson', {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  });

  const userData = await res.json();

  const projects = await sanityClient.fetch(`
    *[_type == 'project']{
      _id,
      projectName,
      description,
      githubUrl,
      homepageUrl,
      tech,
      projectImage{
        asset->{ url }
      }
    }`);

  return {
    props: {
      userData,
      projects: projects,
    },
    revalidate: 1,
  };
};

export default Home;
