import React from "react";
import BotoesLogado from "../BotoesLogado/BotoesLogado";
import {useProtecao} from "../useProtecao/useProtecao";

const DetalhesDoProduto= () => {
    useProtecao();

    return (
        <div>
            <h1>Detalhes do Produto</h1>
            <BotoesLogado/>
        </div>
    )
};


export default DetalhesDoProduto;