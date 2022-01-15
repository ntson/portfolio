import Image from 'next/image';
import { BiMap } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';

const Hero = ({ user }) => {
  return (
    <main className="flex flex-col items-center justify-center p-4 h-screen gap-10">
      <Image
        className="rounded-full"
        src={user.avatar_url}
        alt="Avatar"
        width={200}
        height={200}
      />

      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">{user.name}</h1>
        <p className="text-center">{user.bio}</p>
        <p className="flex items-center gap-1">
          <HiOutlineMail className="inline" />
          {user.email}
        </p>
        <p className="flex items-center gap-1">
          <BiMap className="inline" />
          {user.location}
        </p>
      </div>
    </main>
  );
};

export default Hero;
