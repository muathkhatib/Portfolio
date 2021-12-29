import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as pages from './pages';

import personalData from './context';
import { getDetails } from './api';

import 'antd/dist/antd.css';

const App = () => {
  const [info, setInfo] = useState({});

  useEffect(async () => {
    const data = await getDetails();
    setInfo(data);
  }, []);

  return (
    <personalData.Provider value={info}>
      <Router>
        <Routes>
          <Route path="/" element={<pages.Main />} />
        </Routes>
      </Router>
    </personalData.Provider>
  );
};

export default App;
