import React from 'react';
import { Header } from './Header';

import './Admin.scss';
import { Sidebar } from './Sidebar';

export const Admin: React.SFC<AdminProps> = props => {
    return (
        <div className="wrapper layout-fixed">
            <Header />
            <Sidebar />
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