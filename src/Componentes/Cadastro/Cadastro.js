import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSemProtecao } from "../useSemProtecao/useSemProtecao";
import { Base, Logo, Titulo, Input, Botao, BotaoVazio, Bloco } from "./styled";
import Logo1 from "../Media/logo1.png";

const Cadastro = () => {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [senha, setSenha] = useState();
  const [conf_senha, setConf_senha] = useState();
  
  const navigate = useNavigate();
  useSemProtecao();

  const cadastrarEndereco = () => {
    navigate("/cadastro/endereco");
  };

  const manNome = (event) => {
    setNome(event.target.value);
  };

  const manEmail = (event) => {
    setEmail(event.target.value);
  };

  const manCpf = (event) => {
    setCpf(event.target.value);
  };

  const manSenha = (event) => {
    setSenha(event.target.value);
  };

  const manConfirmaSenha = (event) => {
    setConf_senha(event.target.value);
    
  };

  const limpaInput = () => {
    setNome("");
    setEmail("");
    setSenha("");
    setCpf("");
    setConf_senha("");
  };

  const fazCadstro = (event) => {
    event.preventDefault();

    if(conf_senha === senha){
      
      const body = {
        "name": nome,
        "email": email,
        "cpf": cpf,
        "password": senha,
      };

      const url= "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/signup";
      const header={
        headers:{
          "Content-Type": "application/json"
        }
      }

      axios
        .post(url, body, header)
        .then((resp) => {
          localStorage.setItem("token", resp.data.token);
          alert("Otimo, o cadastro do perfil foi efetuado com Sucesso!");
          limpaInput();
          cadastrarEndereco();
        })
        .catch((err) => {
          alert(
            "Ops, algo deu errado, tente novamente em alguns instantes:",
            err.response.data
          );
        });

    }else{

      alert("Confirmação de senha incorreta");
    };
  };

  return (
    <Base>
      <Bloco> <Logo src={Logo1} /> </Bloco>
      <Bloco> <Titulo> Cadastrar </Titulo> </Bloco>

      <form onSubmit={fazCadstro}>
        <Input
          placeholder="Nome e Sobrenome"
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
        <Input
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={manSenha}
          required
        />
        <Input
          placeholder="Confirme a senha anterior"
          type="password"
          pattern=".{6,}"
          title={"No mínimo 6 numeros"}
          value={conf_senha}
          onChange={manConfirmaSenha}
          required
        />

        <Botao> Criar </Botao>
      </form>
    </Base>
  );
};

export default Cadastro;
