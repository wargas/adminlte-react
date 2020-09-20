/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useCallback, useContext, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LayoutContext } from '../admin/Admin';

export const Header = () => {

    const { sidebarOpen, setSidebarOpen } = useContext(LayoutContext);
    const { logout } = useAuth();


    const handlerToggle = useCallback((ev) => {
        ev.preventDefault();
        setSidebarOpen(!sidebarOpen)
    }, [setSidebarOpen, sidebarOpen])

    return (
        <Fragment>
            <nav className="main-header navbar navbar-expand navbar-dark navbar-success shadow-sm">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            onClick={handlerToggle}
                            className="nav-link" role="button">
                            <i className="fas fa-bars"></i>
                        </a>
                    </li>
                </ul>

                <form className="form-inline ml-3">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" className="nav-link">
                            <i className="far fa-comments"></i>
                        </a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">
                            <i className="far fa-bell"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a style={{cursor: 'pointer'}} onClick={logout} className="nav-link btn-link">Sair</a>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}