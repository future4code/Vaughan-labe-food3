import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {useProtecao} from "../useProtecao/useProtecao";
import axios from "axios";
import Contexto from "../../Contexto/Contexto";
import {ProfilePage, Bar, ContainerTitle, Title, EnderecoCadastrado, Rua, ContainerHistorico, HistoricoDePedidos, ContainerTitleHistorico, Imagem, ContainerImagens, Icones, CardUserDetails, CardUserAdress, DivUserDetails, DivUserAdress} from "./styled";
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
            <CardUserDetails>
                <p>{usuario.name}</p>
                <p>{usuario.email}</p>
                <p>{usuario.cpf}</p>
            </CardUserDetails>
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
            <CardUserAdress>
                <EnderecoCadastrado>Endere??o cadastrado</EnderecoCadastrado>
                <Rua>{`Rua ${endereco.street}, ${endereco.number} - ${endereco.neighbourhood}`}</Rua>
            </CardUserAdress>
        );
    };
    
    return (
        <ProfilePage>
                
            <ContainerTitle>

                <Title>Meu Perfil</Title>

            </ContainerTitle>
            
            <DivUserDetails>
                {mostrarDadosDoUsuario()}
                <Imagem src={Editar} onClick={irParaEditarNome}/>
            </DivUserDetails>

            <DivUserAdress>
                {mostrarEndereco()}
                <Imagem src={Editar} onClick={irParaEditarEndereco}/>
            </DivUserAdress>

            <ContainerHistorico>
                <HistoricoDePedidos>Hist??rico de pedidos</HistoricoDePedidos>

                <ContainerTitleHistorico>

                    {historico.length?"":"Voc?? n??o realizou nenhum pedido"}

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