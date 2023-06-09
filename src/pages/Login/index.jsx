
import { Link, Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import imgGraphic from '../../assets/bar-graphic.png'

import { LayoutComponents } from '../../components/LayoutComponents';
import { AuthContext } from '../../context/auth';

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signIn, signed } = useContext(AuthContext);

    const handleSignIn = async (e) => {
        e.preventDefault();
        
        await signIn(email, password);
    } 

    if(signed) {
        return <Navigate to="/dashboard"/>
    } else {
    return (
        <LayoutComponents>
            <form onSubmit={handleSignIn} className="login-form">
                <span className="login-form-title"></span>
                <span className="login-form-title">
                    <img src={imgGraphic} alt="Grafico"></img>
                </span>

                <div className="wrap-input">
                    <input className={email !== "" ? 'has-value input' : 'input'} value={email} onChange={e => setEmail(e.target.value)} type="email" />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input className={password !== "" ? 'has-value input' : 'input'} value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <span className="focus-input" data-placeholder="Senha"></span>
                </div>

                <div className="container-login-form-btn">
                    <button type="submit" className="login-form-btn"><strong>Login</strong></button>
                </div>

                <div className="div-routes">
                    <span className="div-routes-text">Não possui conta?</span>
                    <Link className="div-routes-link" to="/register">Criar conta.</Link>
                </div>
            </form>
        </LayoutComponents>
    );
   }
}