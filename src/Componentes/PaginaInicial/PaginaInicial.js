import React from "react";
import { useNavigate } from "react-router-dom";
import { Img, Tela } from "./styled";
import Telainicial from "../../Assets/telainicial.png"

const PaginaInicial = () => {
    const navigate = useNavigate();

    const temporizador = () => {
        setTimeout(() => {
            navigate("/login")
        }, 3000)
    }

    return (
        <Tela>
            <Img src={Telainicial} alt="imagem ver" />
            {temporizador()}

        </Tela>
    )
};


export default PaginaInicial;