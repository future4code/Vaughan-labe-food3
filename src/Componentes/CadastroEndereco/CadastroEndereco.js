import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Base, Titulo, Input, Botao } from "./styled";

const CadastroEndereco = () => {
  const [logradouro, setLogradouro] = useState();
  const [numero, setNumero] = useState();
  const [complemento, setComplemento] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();

  const navigate = useNavigate();
  
  const irParaHome = () => {
    navigate("/home");
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

  const fazCadstro = (event) => {
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
        alert("Legal, o cadastro do endereço efetuado com Sucesso!");
        limpaInput();
        irParaHome();
      })
      .catch((err) => {
        alert(
          "Ops, algo deu errado, tente novamente em alguns instantes:",
          err.response
        );
      });
  };
  
  return (
    <Base>
      <Titulo> Meu endereço </Titulo>

      <form onSubmit={fazCadstro}>
        <Input
          placeholder="Rua/Av."
          type="text"
          value={logradouro}
          onChange={manLogradouro}
          required
        />
        <Input
          placeholder="Número"
          type="Number"
          value={numero}
          onChange={manNumero}
          required
        />
        <Input
          placeholder="Apto. / Bloco"
          value={complemento}
          onChange={manComplemento}
          type="text"
          required
        />
        <Input
          placeholder="Bairro"
          type="text"
          value={bairro}
          onChange={manBairro}
          required
        />
        <Input
          placeholder="Cidade"
          type="text"
          value={cidade}
          onChange={manCidade}
          required
        />
        <Input
          placeholder="Estado"
          type="text"
          value={estado}
          onChange={manEstado}
          required
        />
        <Botao> Salvar </Botao>
      </form>
    </Base>
  );
};

export default CadastroEndereco;
