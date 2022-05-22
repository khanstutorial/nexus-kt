
import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Status from '../pages/Status';
const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Status />} />
        <Route path='/welcome' element={<Welcome />} />
    </Routes>
    )
}

export default AppRoutes