import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Status from '../pages/Status';
import Login from '../pages/Login';
import Layout from '../layout/statusLayout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Status />
          </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
};

export default AppRoutes;
