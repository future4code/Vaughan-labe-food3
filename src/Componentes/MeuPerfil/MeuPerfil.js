import React, { useState, useEffect, useContext } from "react";
import BotoesLogado from "../BotoesLogado/BotoesLogado";
import { useNavigate } from "react-router-dom";
import {useProtecao} from "../useProtecao/useProtecao";
import axios from "axios";
import Contexto from "../../Contexto/Contexto";

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
            <div>
                <p>{usuario.name}</p>
                <p>{usuario.email}</p>
                <p>{usuario.cpf}</p>
            </div>
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
            <div>
                <p>{`Rua ${endereco.street}, ${endereco.number} - ${endereco.neighbourhood}`}</p>
            </div>
        );
    };
    
    return (
        <div>
            <h1>Meu Perfil</h1>
            
            <div>
                {mostrarDadosDoUsuario()}
                <button onClick={irParaEditarNome}>Editar Nome</button>
            </div>
            <div>
                <h3>Endereço cadastrado</h3>
                {mostrarEndereco()}
                <button onClick={irParaEditarEndereco}>Editar Endereço</button>
            </div>

            <div>
                <h3>Histórico de pedidos</h3>

            </div>
            <BotoesLogado/>
        </div>
    )
};


export default MeuPerfil;