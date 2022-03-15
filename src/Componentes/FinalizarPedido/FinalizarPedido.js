import React from "react";
import BotoesLogado from "../BotoesLogado/BotoesLogado";
import { useNavigate } from "react-router-dom";
import {useProtecao} from "../useProtecao/useProtecao";

const FinalizarPedido= () => {
    const navigate= useNavigate();
    useProtecao();

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