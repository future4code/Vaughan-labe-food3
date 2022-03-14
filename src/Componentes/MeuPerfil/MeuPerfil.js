import React from "react";
import BotoesLogado from "../BotoesLogado/BotoesLogado";
import { useNavigate } from "react-router-dom";

const MeuPerfil= () => {
    const navigate= useNavigate();

    const irParaEditarNome= () => {
        navigate("/meuperfil/editarnome");
    };

    const irParaEditarEndereco= () => {
        navigate("/meuperfil/editarendereco");
    };

    return (
        <div>
            <h1>Meu Perfil</h1>
            <button onClick={irParaEditarNome}>Editar Nome</button>
            <button onClick={irParaEditarEndereco}>Editar Endereço</button>
            <BotoesLogado/>
        </div>
    )
};


export default MeuPerfil;