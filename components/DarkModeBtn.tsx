import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import darkModeStore, { changeMode } from '../stores/darkModeStore';

const DarkModeBtn = () => {
  const [isDark, setIsDark] = useState(darkModeStore.getState());
  darkModeStore.subscribe(() => {
    setIsDark(darkModeStore.getState());
  });
  const toggleDarkMode = () => {
    darkModeStore.dispatch(changeMode(!isDark));
  };
  return (
    <button className="darkMode allCenter">
      <DarkModeSwitch
        checked={!isDark}
        onChange={toggleDarkMode}
        size={25}
        moonColor="#2F3437"
        sunColor="white"
      />
    </button>
  );
};

export default DarkModeBtn;
