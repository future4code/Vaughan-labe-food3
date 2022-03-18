import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {useProtecao} from "../useProtecao/useProtecao";
import axios from "axios";
import Contexto from "../../Contexto/Contexto";
import {ProfilePage, Bar, ContainerTitle, Title, ContainerSpan, NomeUsuario, EmailUsuario, Span, Rectangle, EnderecoCadastrado, Rua, ContainerHistorico, HistoricoDePedidos, Linha, ContainerTitleHistorico, DivDeImagens, Imagem, ContainerImagens, Icones} from "./styled";
import Editar from "../../Assets/edit.svg";
import Carrinho from "../../Assets/shopping-cart.svg";
import Avatar from "../../Assets/avatar.svg";
import Home from "../../Assets/homepage.svg";

const MeuPerfil= () => {
    const navigate= useNavigate();
    useProtecao();
    useEffect(() => {
        historicoDePedidos();
        pegarPerfil();
        pegarEndereco();
    }, []);
    const [profile, armazenarProfile]= useContext(Contexto);
    
    const [historico, setHistorico]= useState([])
    const [usuario, setUsuario]= useState({})
    const [endereco, setEndereco]= useState({})

    const irParaEditarNome= () => {
        navigate("/meuperfil/editarnome");
    };

    const irParaEditarEndereco= () => {
        navigate("/meuperfil/editarendereco");
    };

    const historicoDePedidos= () => {
        const url= "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/orders/history";
        const token= localStorage.getItem("token");

        const header={
            headers:{
                "auth": token,
                "Content-Type": "application/json"
            }
        };

        axios
            .get(url, header)
            .then(response => { 
                setHistorico(response.data.orders)
            })
            .catch(error => console.log(error.response.data))
    };

    const pegarPerfil= () => {
        const url= "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile";
        const token= localStorage.getItem("token");

        const header={
            headers:{
                "auth": token,
                "Content-Type": "application/json"
            }
        };

        axios
            .get(url, header)
            .then(response => { 
                setUsuario(response.data.user);
                armazenarProfile([response.data.user])
            })
            .catch(error => console.log(error.response.data))
    };
    
    const mostrarDadosDoUsuario= () => {
        return(
            <ContainerSpan>
                <NomeUsuario>{usuario.name}</NomeUsuario>
                <EmailUsuario>{usuario.email}</EmailUsuario>
                <Span>{usuario.cpf}</Span>
            </ContainerSpan>
        );
    };

    const pegarEndereco= () => {
        const url= "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile/address";
        const token= localStorage.getItem("token");

        const header={
            headers:{
                "auth": token,
            }
        };

        axios
            .get(url, header)
            .then(response => { 
                setEndereco(response.data.address);
            })
            .catch(error => console.log(error.response.data))
    };

    const mostrarEndereco= () => {
        return(
            <Rectangle>
                <EnderecoCadastrado>Endereço cadastrado</EnderecoCadastrado>
                <Rua>{`Rua ${endereco.street}, ${endereco.number} - ${endereco.neighbourhood}`}</Rua>
            </Rectangle>
        );
    };
    
    return (
        <ProfilePage>
            <Bar>
                <ContainerTitle>
                    <Title>Meu Perfil</Title>

                </ContainerTitle>
            </Bar>
            
            <DivDeImagens>
                {mostrarDadosDoUsuario()}
                <Imagem src={Editar} onClick={irParaEditarNome}/>
            </DivDeImagens>

            <DivDeImagens>
                {mostrarEndereco()}
                <Imagem src={Editar} onClick={irParaEditarEndereco}/>
            </DivDeImagens>

            <ContainerHistorico>
                <HistoricoDePedidos>Histórico de pedidos</HistoricoDePedidos>

                <Linha></Linha>

                <ContainerTitleHistorico>
                    {historico.length?"":"Você não realizou nenhum pedido"}

                </ContainerTitleHistorico>

            </ContainerHistorico>

            
            <ContainerImagens>
                <Icones src={Home} onClick={() => navigate("/home")}/>
                <Icones src={Carrinho} onClick={() => navigate("/carrinho")}/>
                <Icones src={Avatar} onClick={() => navigate("/meuperfil")}/>

            </ContainerImagens>
            
        </ProfilePage>
    )
};


export default MeuPerfil;