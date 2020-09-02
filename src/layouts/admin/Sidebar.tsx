import React from 'react';

export const Sidebar: React.SFC<SidebarProps> = props => {
    return (
        <React.Fragment>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="" className="brand-link">
                    <img src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png" alt="" className="brand-image img-circle elevation-3" />
                    <div className="brand-text">ADMINLTE</div>
                </a>
                <div className="sidebar">
                    <div className="user-panel">
                        <div className="info my-3 d-flex">
                            <a href="" className="d-block">Wargas Texeira</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column">
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    <i className="nav-icon fas fa-cog"></i>
                                    <p>Configurações</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </React.Fragment> 
    )
}

export interface SidebarProps {}