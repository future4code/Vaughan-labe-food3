import React from "react";
import { useNavigate } from "react-router-dom";
import {useProtecao} from "../useProtecao/useProtecao";

const MeuPerfilEditarNome= () => {
    const navigate= useNavigate();
    useProtecao();

    const irParaMeuPerfil= () => {
        navigate("/meuperfil");
    };

    return (
        <div>
            <h1>Meu Perfil Editar Nome</h1>
            <button onClick={irParaMeuPerfil}>Salvar</button>
            
        </div>
    )
};


export default MeuPerfilEditarNome;