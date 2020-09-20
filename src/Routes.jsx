import React, { Fragment } from 'react';
import { useAuth } from './contexts/AuthContext';
import { Admin } from './layout/admin/Admin';
import { Login } from './pages/login/Login';

export const Routes = () => {

    const { isLogged } = useAuth();

    return (
        <Fragment>
            <Admin />
        </Fragment>
    )
}