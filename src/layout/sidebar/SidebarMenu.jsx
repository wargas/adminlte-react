/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import config from '../../config';

export const SidebarMenu = () => {

    const [, setCurrentMenu] = useState(-1);



    return (
        <Fragment>
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column nav-child-indent nav-legacy nav-flat">
                    {config.menu.map((item, index) =>
                        <MenuItem
                            key={index}
                            data={item}
                        />
                    )}
                </ul>
            </nav>
        </Fragment>
    )
}

export const MenuItem = ({ data }) => {

    const [opened, setOpened] = useState(false);
    const navRef = useRef();


    const handlerOnOpen = useCallback((ev) => {
        ev.preventDefault();

        setOpened(old => !old)

    }, [])

    useEffect(() => {
        if (navRef.current) {
            if(opened) {

                const tree = navRef.current.querySelector('.nav');
                let treeHeight = 0;

                if(tree) {
                    tree.style.display = 'block';
                    
                    treeHeight = tree.scrollHeight;
                }

                navRef.current.style.display = 'block'; 

                navRef.current.style.maxHeight = `${navRef.current.scrollHeight + treeHeight}px`;
                
            } else {
                navRef.current.style.maxHeight = `0px`;
            }
            
        }
    }, [opened])

    return (
        <Fragment>
            <li
                className={`nav-item ${opened ? 'menu-open' : ''}`}>
                <a
                    onClick={ev => handlerOnOpen(ev)}
                    href=""
                    className={`nav-link ${data.link === '/dashboard' ? 'active' : ''}`}>
                    <i className={`nav-icon fas fa-${data.icon}`}></i>
                    <p>
                        {data.label}
                        {!!data.children &&
                            <i className="right fas fa-angle-left"></i>
                        }
                    </p>
                </a>
                {!!data.children &&
                    <ul
                        ref={navRef}
                        className="nav nav-treeview" style={{ maxHeight: 0 }}>
                        {data.children.map((sub, s_index) =>
                            <MenuItem key={s_index} data={sub} />
                        )}
                    </ul>
                }
            </li>
        </Fragment>
    )
}