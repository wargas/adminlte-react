import React, { Fragment, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';

export const Login = () => {

    const [loading, setLoading] = useState(false)
    const { logar } = useAuth();

    const handlerClickLogin = ev => {
        ev.preventDefault();
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            logar()
        }, 500)
    }

    return (
        <Fragment>
            <div className="login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="">
                            <b>Admin</b>LTE
                        </a>
                    </div>
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">
                                Sign in to start your session
                            </p>
                            <form action="">
                                <div className="input-group mb-3">
                                    <input type="email" placeholder="Email" className="form-control" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" placeholder="Senha" className="form-control" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <i className="fas fa-lock"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">

                                    </div>
                                    <div className="col-4">
                                        <button
                                            onClick={handlerClickLogin}
                                            className="btn btn-primary btn-block">
                                            {loading ? <Spinner animation="border" size="sm" /> : 'Entrar'}
                                        </button>
                                    </div>
                                </div>
                                <p className="mb-1">
                                    <a href="">Esqueci minha senha</a>
                                </p>
                                <p className="mb-1">
                                    <a href="">Fazer cadastro</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}