import { KOR } from '../public/globalVar';

const Button = ({ changeVersion, version }) => (
  <button
    onClick={changeVersion}
    className="ml-3 bg-buttonColor py-1.5 px-2.5 rounded-full text-white focus:outline-none absolute right-5 bottom-5"
  >
    {version === KOR ? 'Change to NIV' : '개역한글로 변경'}
  </button>
);

export default Button;
