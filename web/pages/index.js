import Image from 'next/image';
import { BiMap } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import Project from '../components/Project';
import { sanityClient } from '../lib/sanity';

const Home = ({ userData, projects }) => {
  return (
    <div className="min-h-screen bg-background text-white">
      <main className="flex flex-col items-center justify-center p-4 h-screen gap-10">
        <div>
          <Image
            className="rounded-full"
            src={userData.avatar_url}
            alt="Avatar"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">{userData.name}</h1>
          <p className="text-center">{userData.bio}</p>
          <p className="flex items-center gap-1">
            <HiOutlineMail className="inline" />
            {userData.email}
          </p>
          <p className="flex items-center gap-1">
            <BiMap className="inline" />
            {userData.location}
          </p>
        </div>
      </main>
      <section>
        <h1>Demo project</h1>
        {projects.map((project) => {
          return <Project key={project._id} project={project} />;
        })}
      </section>
    </div>
  );
};

export const getServerSideProps = async () => {
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
  };
};

export default Home;
