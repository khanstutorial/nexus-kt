import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DefaultLayout from './layout/layout';
import AppRoutes from './routes/AppRoutes';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <DefaultLayout>
          <AppRoutes />
        </DefaultLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
