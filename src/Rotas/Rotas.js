import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../Componentes/Cadastro/Cadastro";
import CadastroEndereco from "../Componentes/CadastroEndereco/CadastroEndereco";
import Carrinho from "../Componentes/Carrinho/Carrinho";
import DetalhesDoProduto from "../Componentes/DetalhesDoProduto/DetalhesDoProduto";
import Home from "../Componentes/Home/Home";
import Login from "../Componentes/Login/Login";
import MeuPerfil from "../Componentes/MeuPerfil/MeuPerfil";
import PaginaInicial from "../Componentes/PaginaInicial/PaginaInicial";
import FinalizarPedido from "../Componentes/FinalizarPedido/FinalizarPedido";
import MeuPerfilEditarNome from "../Componentes/MeuPerfilEditarNome/MeuPerfilEditarNome";
import MeuPerfilEditarEndereco from "../Componentes/MeuPerfilEditarEndereco/MeuPerfilEditarEndereco";

const Rotas= () => {
    return(
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<PaginaInicial/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                    <Route path="/cadastro/endereco" element={<CadastroEndereco/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/detalhes/:id" element={<DetalhesDoProduto/>}/>
                    <Route path="/meuperfil" element={<MeuPerfil/>}/>
                    <Route path="/meuperfil/editarnome" element={<MeuPerfilEditarNome/>}/>
                    <Route path="/meuperfil/editarendereco" element={<MeuPerfilEditarEndereco/>}/>
                    <Route path="/carrinho" element={<Carrinho/>}/>
                    <Route path="/carrinho/finalizarpedido" element={<FinalizarPedido/>}/>

                </Routes>
            
            </BrowserRouter>
        </div>
    )
};

export default Rotas;