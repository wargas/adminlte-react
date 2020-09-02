import React from 'react';

export const Header: React.SFC = props => {
    return (
        <React.Fragment>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="" className="nav-link">
                            <i className="fas fa-bars"></i>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        {/* <Dropdown */}
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export interface HeaderProps {}