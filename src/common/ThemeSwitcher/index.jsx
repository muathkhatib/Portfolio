import { useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { Switch } from 'antd';
import { UilMoon, UilSun } from '@iconscout/react-unicons';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState();
  const {
    switcher, status, themes,
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
    <Switch
      style={{ marginRight: '1.5rem' }}
      checkedChildren={<UilMoon />}
      unCheckedChildren={<UilSun />}
      checked={isDarkMode}
      onChange={toggleTheme}
    />

  );
};
export default ThemeSwitcher;
