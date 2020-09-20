import React, { Fragment } from 'react';
import { AuthContextProvider, useAuth } from './contexts/AuthContext';
import { Admin } from './layout/admin/Admin';
import { Login } from './pages/login/Login';
import { Routes } from './Routes';

import './scss/AdminLTE.scss';

function App() {


  return (
    <AuthContextProvider>
      <Admin />
    </AuthContextProvider>
  );
}

export default App;
