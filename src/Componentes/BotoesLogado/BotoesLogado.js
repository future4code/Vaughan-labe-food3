import React from "react";
import { useNavigate } from "react-router-dom";

const BotoesLogado= () => {
    const navigate= useNavigate();

    const irParaHome= () => {
        navigate("/home");
    };

    const irParaCarrinho= () => {
        navigate("/carrinho");
    };

    const irParaMeuPerfil= () => {
        navigate("/meuperfil");
    }


    return(
        <div>
            <button onClick={irParaHome}>Home</button>
            <button onClick={irParaCarrinho}>Carrinho</button>
            <button onClick={irParaMeuPerfil}>Meu Perfil</button>
        </div>
    )
};

export default BotoesLogado;