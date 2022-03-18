import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../Assets/homepage.svg";
import Carrinho from "../../Assets/shopping-cart.svg";
import Avatar from "../../Assets/avatar.svg";
import {ContainerImagens, Imagem} from "./styled";

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
        <ContainerImagens>
            <Imagem src={Home} onClick={irParaHome}/>
            <Imagem src={Carrinho} onClick={irParaCarrinho}/>
            <Imagem src={Avatar} onClick={irParaMeuPerfil}/>
        </ContainerImagens>
    )
};

export default BotoesLogado;