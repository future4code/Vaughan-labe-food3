import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSemProtecao } from "../useSemProtecao/useSemProtecao";

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

    const body = {
      name: nome,
      email: email,
      cpf: cpf,
      password: senha,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/signup",
        body
      )

      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        alert("Otimo, o cadastro do perfil foi efetuado com Sucesso!");
        console.log("O Token é:", resp.data.token);
        limpaInput();
        cadastrarEndereco();
      })
      .catch((err) => {
        alert(
          "Ops, algo deu errado, tente novamente em alguns instantes:",
          err.response
        );
      });
  };

  return (
    <div>
      <h1>Cadastrar</h1>

      <form onSubmit={fazCadstro}>
        <input
          placeholder="Nome e sobrenome"
          type="text"
          value={nome}
          onChange={manNome}
          required
        />
        <input
          placeholder="E-mail"
          type="text"
          value={email}
          onChange={manEmail}
          required
        />
        <input
          placeholder="CPF"
          value={cpf}
          onChange={manCpf}
          type="text"
          name="cpf"
          pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
          title={"Digite um CPF no formato: xxx.xxx.xxx-xx"}
          required
        />
        <input
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={manSenha}
          required
        />
        <input
          placeholder="Confirme a senha anterior"
          type="password"
          pattern=".{6,}"
          title={"No mínimo 6 numeros"}
          value={conf_senha}
          onChange={manConfirmaSenha}
          required
        />

        <button> Criar </button>
      </form>
    </div>
  );
};

export default Cadastro;
