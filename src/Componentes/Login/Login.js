import React from "react";
import { useNavigate } from "react-router-dom";

const Login= () => {
    const navigate= useNavigate();

    const irParaHome= () => {
        navigate("/home");
    }

    const irParaCadastro= () => {
        navigate("/cadastro");
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={irParaHome}>Entrar</button>
            <button onClick={irParaCadastro}>Não possui cadastro? Clique aqui</button>
        </div>
    )
};


export default Login;