import { Link } from 'react-router-dom';
import { LayoutComponents } from "../../components/LayoutComponents";
import { useState } from "react";

export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nameUser, setNameUser] = useState("")
    const [address, setAddress] = useState("")
    const [occupation, setOccupation] = useState("")

    return (
        <LayoutComponents>
             <form className="login-form">
                <span className="login-form-title">Criar Conta</span>
            
                <div className="wrap-input">
                    <input className={nameUser !== "" ? 'has-value input' : 'input'} value={nameUser} onChange={e => setNameUser(e.target.value)} type="text" />
                    <span className="focus-input" data-placeholder="Nome Completo"></span>
                </div>

                <div className="wrap-input">
                    <input className={occupation !== "" ? 'has-value input' : 'input'} value={occupation} onChange={e => setOccupation(e.target.value)} type="text" />
                    <span className="focus-input" data-placeholder="Profissão"></span>
                </div>

                <div className="wrap-input">
                    <input className={address !== "" ? 'has-value input' : 'input'} value={address} onChange={e => setAddress(e.target.value)} type="text" />
                    <span className="focus-input" data-placeholder="Endereço"></span>
                </div>

                <div className="wrap-input">
                    <input className={email !== "" ? 'has-value input' : 'input'} value={email} onChange={e => setEmail(e.target.value)} type="email" />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input className={password !== "" ? 'has-value input' : 'input'} value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <span className="focus-input" data-placeholder="Senha"></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn"><strong>Registrar Conta</strong></button>
                </div>

                <div className="div-routes">
                    <span className="div-routes-text">Já possui conta?</span>
                    <Link className="div-routes-link" to="/">Acessar com Email e Senha.</Link>
                </div>
            </form>
        </LayoutComponents>
    );
}