import React, { Fragment } from 'react';

export const SidebarUserInfo = () => {
    return (
        <Fragment>
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg"
                        alt=""
                        className="img-circle elevation-2" />
                </div>
                <div className="info">
                    <a href="" className="d-block">Wargas Teixeira</a>
                </div>
            </div>
        </Fragment>
    )
}