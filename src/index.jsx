import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import App from './App';

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme="light"
      insertionPoint="styles-insertion-point"
    >
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
