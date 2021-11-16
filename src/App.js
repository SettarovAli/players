import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Matches from './pages/Matches';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Admin from './pages/Admin';
import { GlobalStyle } from './GlobalStyles';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="matches" element={<Matches />} />
        <Route path="teams" element={<Teams />} />
        <Route path="players" element={<Players />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </Fragment>
  );
};

export default App;
