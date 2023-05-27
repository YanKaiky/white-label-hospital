import { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default AppRoutes;
