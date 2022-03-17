import React from "react";
import BotoesLogado from "../BotoesLogado/BotoesLogado";
import { useNavigate } from "react-router-dom";
import {useProtecao} from "../useProtecao/useProtecao";

const Carrinho= () => {
    const navigate= useNavigate();
    useProtecao();

    const irParaHome= () => {
        navigate("/home");
    };

    return (
        <div>
            <h1>Carrinho</h1>
            <button onClick={irParaHome}>Confirmar</button>
            <BotoesLogado/>
        </div>
    )
};


export default Carrinho;