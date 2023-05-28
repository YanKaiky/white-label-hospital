import { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Direction, Home, Hospital, Jobs } from '../pages';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/direction" element={<Direction />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default AppRoutes;
