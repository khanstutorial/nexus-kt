import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import BugReport from '../pages/BugReport';
import Footer from '../components/Footer/Footer';

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        {/* to be deleted */}
        <Route path="/footer" element={<Footer />} />
        <Route path="/bug-report" element={<BugReport />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile/:username" element={<Profile />} />
        {/* <Route path="/welcome" element={<Welcome />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
