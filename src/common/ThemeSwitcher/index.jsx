import { useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { Switch } from 'antd';
import { UilMoon, UilSun } from '@iconscout/react-unicons';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState();
  const {
    switcher, currentTheme, status, themes,
  } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  // Avoid theme change flicker
  if (status === 'loading') {
    return null;
  }

  return (
    <div
      style={{
        width: '6rem',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      {currentTheme !== 'light' ? <UilMoon /> : <UilSun />}

      <Switch checked={isDarkMode} onChange={toggleTheme} />
    </div>
  );
};
export default ThemeSwitcher;
