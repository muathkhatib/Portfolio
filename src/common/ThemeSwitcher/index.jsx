import { useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { Switch } from 'antd';
import { UilMoon, UilSun } from '@iconscout/react-unicons';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const {
    switcher, status, themes,
  } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode((prevState) => !prevState);
    switcher({ theme: isChecked ? themes.dark : themes.light });
    localStorage.setItem('theme', isChecked ? 'dark' : 'light');
  };

  // Avoid theme change flicker
  if (status === 'loading') {
    return null;
  }

  return (
    <Switch
      style={{ marginRight: '1.5rem' }}
      checkedChildren={<UilMoon />}
      unCheckedChildren={<UilSun />}
      checked={localStorage.getItem('theme') === 'dark' || isDarkMode}
      onChange={toggleTheme}
    />

  );
};
export default ThemeSwitcher;
