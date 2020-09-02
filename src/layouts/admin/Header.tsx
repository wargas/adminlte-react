import React from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';

export const Header: React.SFC<HeaderProps> = props => {
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
                </ul>
                <Nav>
                    <NavDropdown title="Wargas Teixeira" id="nav-user">
                        <NavDropdown.Item>Sair</NavDropdown.Item>
                        <NavDropdown.Item>Preferências</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </nav>
        </React.Fragment>
    )
}

export interface HeaderProps {}