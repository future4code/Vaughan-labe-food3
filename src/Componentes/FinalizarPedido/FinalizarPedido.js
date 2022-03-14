import React from "react";
import BotoesLogado from "../BotoesLogado/BotoesLogado";
import { useNavigate } from "react-router-dom";

const FinalizarPedido= () => {
    const navigate= useNavigate();

    const irParaHome= () => {
        navigate("/home");
    };

    return (
        <div>
            <h1>Finalizar Pedido</h1>
            <button onClick={irParaHome}>Confirmar</button>
            <BotoesLogado/>
        </div>
    )
};


export default FinalizarPedido;