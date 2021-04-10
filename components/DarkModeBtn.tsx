import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkModeBtn = ({ setDark, dark }) => {
  const toggleDarkMode = () => {
    setDark((previous) => !previous);
  };
  return (
    <button className="darkMode allCenter">
      <DarkModeSwitch
        checked={!dark}
        onChange={toggleDarkMode}
        size={25}
        moonColor="#2F3437"
        sunColor="white"
      />
    </button>
  );
};

export default DarkModeBtn;
