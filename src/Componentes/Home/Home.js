import React from "react";
import BotoesLogado from "../BotoesLogado/BotoesLogado";
import {useProtecao} from "../useProtecao/useProtecao";

const Home= () => {
    useProtecao();
    
    return (
        <div>
            <h1>Home</h1>
            <BotoesLogado/>
        </div>
    )
};


export default Home;