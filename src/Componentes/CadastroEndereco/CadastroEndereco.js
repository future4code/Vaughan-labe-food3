import React from "react";
import { useNavigate } from "react-router-dom";
import {useSemProtecao} from "../useSemProtecao/useSemProtecao";

const CadastroEndereco= () => {
    const navigate= useNavigate();
    useSemProtecao();
    
    const irParaHome= () => {
        navigate("/home");
    }
    return (
        <div>
            <h1>Cadastrar Endereço</h1>
            <button onClick={irParaHome}>Salvar</button>

        </div>
    )
};


export default CadastroEndereco;