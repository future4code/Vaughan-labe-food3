import React from "react";
import { useNavigate } from "react-router-dom";
import {useSemProtecao} from "../useSemProtecao/useSemProtecao"

const Cadastro= () => {
    const navigate=useNavigate();
    useSemProtecao();

    const cadastrarEndereco= () => {
        navigate("/cadastro/endereco");
    }
    return (
        <div>
            <h1>Cadastrar</h1>
            <button onClick={cadastrarEndereco}>Criar</button>
        </div>
    )
};


export default Cadastro;