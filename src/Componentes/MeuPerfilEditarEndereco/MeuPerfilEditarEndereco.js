import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {useProtecao} from "../useProtecao/useProtecao";
import Voltar from "../../Assets/back.svg";
import axios from "axios";
import { Bar, Body, Imagem, Title } from "./styled";

const MeuPerfilEditarEndereco= () => {
    const [logradouro, setLogradouro] = useState();
    const [numero, setNumero] = useState();
    const [complemento, setComplemento] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const navigate= useNavigate();
    useProtecao();

    const irParaMeuPerfil = () => {
        navigate("/meuperfil");
    };
    
    const manLogradouro = (event) => {
        setLogradouro(event.target.value);
    };
  
    const manNumero = (event) => {
        setNumero(event.target.value);
    };
  
    const manComplemento = (event) => {
        setComplemento(event.target.value);
    };
  
    const manBairro = (event) => {
        setBairro(event.target.value);
    };
  
    const manCidade = (event) => {
        setCidade(event.target.value);
    };
  
    const manEstado = (event) => {
        setEstado(event.target.value);
    };
  
    const limpaInput = () => {
        setLogradouro("");
        setNumero("");
        setComplemento("");
        setBairro("");
        setCidade("");
        setEstado("");
    };
  
    const atualizarCadastro = event => {
        event.preventDefault();
  
        const body = {
        "street": logradouro,
        "number": numero,
        "neighbourhood": bairro,
        "city": cidade,
        "state": estado,
        "complement": complemento,
    };
  
        const token= localStorage.getItem("token");
        const url="https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/address";
        const header={
        headers:{
            "auth": token,
            "Content-Type": "application/json"
        }
    }
  
        axios
        .put(url, body, header)
        .then((resp) => {
            localStorage.setItem("token", resp.data.token);
            alert("Cadastro do endereço atualizado com sucesso!");
            limpaInput();
            irParaMeuPerfil();
        })
        .catch((err) => {
            alert(
                "Ops, algo deu errado, tente novamente em alguns instantes.",
                err.response
            );
        });
    };

    return (
        <Body>

            <Bar>
                <Imagem src={Voltar} onClick={() => navigate("/meuperfil")}/>
                <Title>Editar Endereço</Title>
            </Bar>


            <form onSubmit={atualizarCadastro}>
                <input
                    placeholder="Rua/Av."
                    type="text"
                    value={logradouro}
                    onChange={manLogradouro}
                    required
                />
                <input
                    placeholder="Numero"
                    type="Number"
                    value={numero}
                    onChange={manNumero}
                    required
                />
                <input
                    placeholder="Apto. / Bloco"
                    value={complemento}
                    onChange={manComplemento}
                    type="text"
                    required
                />
                <input
                    placeholder="Bairro"
                    type="text"
                    value={bairro}
                    onChange={manBairro}
                    required
                />
                <input
                    placeholder="Cidade"
                    type="text"
                    value={cidade}
                    onChange={manCidade}
                    required
                />
                <input
                    placeholder="Estado"
                    type="text"
                    value={estado}
                    onChange={manEstado}
                    required
                />

                <button> Salvar </button>
            </form>
                        
        </Body>
    )
};


export default MeuPerfilEditarEndereco;