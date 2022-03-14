import React from "react";
import { useNavigate } from "react-router-dom";

const MeuPerfilEditarEndereco= () => {
    const navigate= useNavigate();

    const irParaMeuPerfil= () => {
        navigate("/meuperfil");
    };

    return (
        <div>
            <h1>Meu Perfil Editar Endereco</h1>
            <button onClick={irParaMeuPerfil}>Salvar</button>
            
        </div>
    )
};


export default MeuPerfilEditarEndereco;