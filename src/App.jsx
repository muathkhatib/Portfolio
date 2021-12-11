import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import * as pages from './pages';

import 'antd/dist/antd.css';
import './App.less';

const App = () => (

  <Router>
    <Routes>
      <Route path="/" element={<pages.Main />} />
    </Routes>
  </Router>

);

export default App;
