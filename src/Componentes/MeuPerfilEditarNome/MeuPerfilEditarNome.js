import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import {useProtecao} from "../useProtecao/useProtecao";
import axios from "axios";
import Contexto from "../../Contexto/Contexto";
import Voltar from "../../Assets/back.svg";
import {ProfilePageedituser, Bar, Imagem, ContainerTitle, Title, Form,Input} from "./styled";

const MeuPerfilEditarNome= () => {
    const navigate= useNavigate();
    useProtecao();
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [cpf, setCpf] = useState();
    const [profile, armazenarProfile]= useContext(Contexto);

    const manNome = (event) => {
        setNome(event.target.value);
    };

    const manEmail = (event) => {
        setEmail(event.target.value);
    };

    const manCpf = (event) => {
        setCpf(event.target.value);
    };
    
    const atualizarCadastro= event => {
        event.preventDefault();
        const url= "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile";
        const token= localStorage.getItem("token");
    
        const header={
            headers:{
                "auth": token,
                "Content-Type": "application/json"
            }
        };

        const body={
            "id":profile[0].id,
            "name": nome,
	        "email": email,
	        "cpf": cpf,
            "hasAddress":profile[0].hasAddress,
            "address":profile[0].address,
        };

        axios
            .put(url, body, header)
            .then(response => { 
                alert("Dados atualizados com sucesso!");
                navigate("/meuperfil");
            })
            .catch(error => alert("Erro na atualização de dados!"))
    };
    
    return (
        <ProfilePageedituser>
            <Bar>
                <Imagem src={Voltar} onClick={() => navigate("/meuperfil")}/>
                <Title>Editar</Title>
            </Bar>

            <Form onSubmit={atualizarCadastro}>
                <Input
                    placeholder="Nome e sobrenome"
                    type="text"
                    value={nome}
                    onChange={manNome}
                    required
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    value={email}
                    onChange={manEmail}
                    required
                />
                <Input
                    placeholder="CPF"
                    value={cpf}
                    onChange={manCpf}
                    type="text"
                    name="cpf"
                    pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
                    title={"Digite um CPF no formato: xxx.xxx.xxx-xx"}
                    required
                />

                <button>Salvar</button>
                
            </Form>
            
        </ProfilePageedituser>
    )
};


export default MeuPerfilEditarNome;