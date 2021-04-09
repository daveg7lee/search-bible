import Image from 'next/image';

const Logo = (clearState) => (
  <div className="w-8 hidden md:block cursor-pointer">
    <Image
      src="/bible.png"
      alt="bible"
      width={35}
      height={35}
      onClick={clearState}
    />
  </div>
);

export default Logo;
