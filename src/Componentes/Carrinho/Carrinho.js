import React from "react";
import BotoesLogado from "../BotoesLogado/BotoesLogado";
import { useNavigate } from "react-router-dom";
import {useProtecao} from "../useProtecao/useProtecao";
import { Body } from "./styled";

const Carrinho= () => {
    const navigate= useNavigate();
    useProtecao();

    const irParaHome= () => {
        navigate("/home");
    };

    return (
        <Body>
            <p>Carrinho</p>
            <div>
               <p>Não disponível no momento</p> 
            </div>            
            <BotoesLogado/>
        </Body>
    )
};


export default Carrinho;