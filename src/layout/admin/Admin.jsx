import React, { createContext, Fragment, useContext, useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Login } from '../../pages/login/Login';
import { Header } from '../header/Header';
import { Sidebar } from '../sidebar/Sidebar';

export const LayoutContext = createContext()

export const Admin = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { isLogged } = useAuth()

    useEffect(() => {
        if (!sidebarOpen) {
            document.body.classList.add('sidebar-collapse')
            document.body.classList.remove('sidebar-open')
        } else {
            document.body.classList.add('sidebar-open')
            document.body.classList.remove('sidebar-collapse')
        }
    }, [sidebarOpen])

    if (!isLogged) {
        return (
            <Login />
        )
    }

    return (
        <LayoutContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
            <div className="wrapper">
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-header">
                        <h1 className="mb-0 text-dark">Dashboard</h1>

                    </div>
                    <div className="container-fluid">
                        
                    </div>
                </div>
                <div onClick={() => setSidebarOpen(false)} id="sidebar-overlay"></div>
            </div>


        </LayoutContext.Provider>
    )
}