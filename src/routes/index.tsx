import { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Direction, Home, Hospital, Jobs } from '../pages';
import { PalliativeCare } from '../pages/palliative.care';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/direction" element={<Direction />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/palliative-care" element={<PalliativeCare />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default AppRoutes;
