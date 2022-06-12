import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DefaultLayout from './layout/layout';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <AppRoutes />
      </DefaultLayout>
    </BrowserRouter>
  );
}
export default App;
