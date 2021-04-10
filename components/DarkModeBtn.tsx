import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeBtn = ({ setDark, dark }) => (
  <button className="darkMode allCenter" onClick={() => setDark(!dark)}>
    {dark ? (
      <FaSun color="white" size={20} />
    ) : (
      <FaMoon color="#373C3F" size={20} />
    )}
  </button>
);

export default DarkModeBtn;
