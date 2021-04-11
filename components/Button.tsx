import { useState } from 'react';
import { KOR } from '../public/globalVar';
import versionStore, { changeVersion } from '../stores/versionStore';

const Button = () => {
  const [version, setVersion] = useState(versionStore.getState());
  versionStore.subscribe(() => {
    setVersion(versionStore.getState());
  });
  return (
    <button
      onClick={changeVersion}
      className="ml-3 bg-buttonColor py-1.5 px-2.5 rounded-full text-white focus:outline-none fixed right-5 bottom-5"
    >
      {version === KOR ? 'Change to NIV' : '개역한글로 변경'}
    </button>
  );
};

export default Button;
