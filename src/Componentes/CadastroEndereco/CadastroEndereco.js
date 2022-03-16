import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1> Cadastro de Endereço </h1>

      <form onSubmit={fazCadstro}>
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
    </div>
  );
};

export default CadastroEndereco;
