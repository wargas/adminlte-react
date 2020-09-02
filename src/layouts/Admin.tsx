import React from 'react';

export const Admin: React.SFC<AdminProps> = props => {
    return (
        <div className="wrapper layout-fixed">
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="" className="nav-link">
                            <i className="fas fa-bars"></i>
                        </a>
                    </li>
                </ul>
            </nav>
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
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <h1>Page Title</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="container-fluid">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quaerat delectus assumenda velit exercitationem enim inventore, beatae temporibus dignissimos perspiciatis sed. Fuga eos distinctio maiores amet? Optio recusandae maiores neque.
                    </div>
                </div>
            </div>
            <footer className="main-footer"></footer>
        </div>
    )
}

export interface AdminProps { }