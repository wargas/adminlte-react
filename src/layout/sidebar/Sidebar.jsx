/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useRef, useEffect} from 'react';
import { SidebarMenu } from './SidebarMenu';
import { SidebarUserInfo } from './SidebarUserInfo';

import PerfectScrollbar from 'perfect-scrollbar';

import './Sidebar.scss';

export const Sidebar = () => {

    const refSidebar = useRef();
    let ps = null;

    useEffect(() => {
        ps = new PerfectScrollbar(refSidebar.current);

        return () => ps.destroy();
    }, [])

    return (
        <Fragment>
            <aside className="main-sidebar sidebar-dark-success elevation-4">
                <a href="" className="brand-link navbar-success navbar-dark">
                    <img src="logo.png" alt="" className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
                <div onMouseMove={() => ps.update()} className="sidebar" ref={refSidebar}>
                    <SidebarUserInfo />

                    <SidebarMenu />
                </div>
            </aside>
        </Fragment>
    )
}