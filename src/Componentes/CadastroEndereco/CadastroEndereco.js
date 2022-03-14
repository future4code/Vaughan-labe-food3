import React from "react";
import { useNavigate } from "react-router-dom";

const CadastroEndereco= () => {
    const navigate= useNavigate();

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