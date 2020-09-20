/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { SidebarMenu } from './SidebarMenu';
import { SidebarUserInfo } from './SidebarUserInfo';

import './Sidebar.scss';

export const Sidebar = () => {
    return (
        <Fragment>
            <aside className="main-sidebar sidebar-dark-success elevation-4">
                <a href="" className="brand-link navbar-success navbar-dark">
                    <img src="logo.png" alt="" className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>

                <div className="sidebar">
                    <SidebarUserInfo />

                    <SidebarMenu />
                </div>
            </aside>
        </Fragment>
    )
}