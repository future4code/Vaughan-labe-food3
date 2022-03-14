import React from "react";
import BotoesLogado from "../BotoesLogado/BotoesLogado";
import { useNavigate } from "react-router-dom";

const Carrinho= () => {
    const navigate= useNavigate();

    const irParaFinalizar= () => {
        navigate("/carrinho/finalizarpedido");
    };

    return (
        <div>
            <h1>Carrinho</h1>
            <button onClick={irParaFinalizar}>Confirmar</button>
            <BotoesLogado/>
        </div>
    )
};


export default Carrinho;