import Image from 'next/image';
import { useRouter } from 'next/router';

const Logo = () => {
  const router = useRouter();
  const reload = () => {
    router.reload();
  };
  return (
    <div className="w-8 hidden md:block cursor-pointer" onClick={reload}>
      <Image src="/bible.png" alt="bible" width={35} height={35} />
    </div>
  );
};

export default Logo;
