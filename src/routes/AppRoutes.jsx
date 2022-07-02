import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
