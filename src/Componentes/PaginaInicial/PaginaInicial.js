import React from "react";
import { useNavigate } from "react-router-dom";

const PaginaInicial= () => {
    const navigate= useNavigate();
    
    const temporizador= () => {
        setTimeout(() => {
            navigate("/login")
        }, 3000)
    }

    return (
        <div>
            <h1>4Food</h1>
            {temporizador()}
        </div>
    )
};


export default PaginaInicial;