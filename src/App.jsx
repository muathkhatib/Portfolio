import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

import { useDispatch } from 'react-redux';

import * as pages from './pages';

import { setWidth, storeData } from './sotre/actions';

import { getDetails } from './api';

import 'antd/dist/antd.css';

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    window.addEventListener('resize', () => dispatch(setWidth(window.innerWidth)));
    const requestData = await getDetails();
    dispatch(storeData(requestData));
  }, []);

  return (
    <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme={localStorage.getItem('theme') || 'dark'}
      insertionPoint="styles-insertion-point"
    >
      <Router>
        <Routes>
          <Route path="/" element={<pages.Main />} />
        </Routes>
      </Router>
    </ThemeSwitcherProvider>
  );
};

export default App;
