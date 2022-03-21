import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useForms from "../Hook/useForms";
import { useSemProtecao } from "../useSemProtecao/useSemProtecao";
import { Base, Logo, Titulo, Input, Botao, BotaoVazio, Bloco } from "./styled";
import Logo1 from "../Media/logo1.png";

const Login = () => {
  const navigate = useNavigate();
  const { form, onChangeForm, clear } = useForms({ email: "", password: "" });
  useSemProtecao();

  const onSubmitForm = (event) => {
    event.preventDefault();
    const url = `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/login`;

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(url, form, header)
      .then((response) => {
        if (response.data.user.hasAddress === false) {
          return navigate("/cadastro/endereco");
        }

        localStorage.setItem("token", response.data.token);
        navigate("/home");
      })
      .catch(() => {
        alert("Usuário não cadastrado");
        clear();
      });
  };

  const irParaCadastro = () => {
    navigate("/cadastro");
  };

  return (
    <Base>
      <Bloco> <Logo src={Logo1} /> </Bloco>
      <Bloco> <Titulo> Entrar </Titulo> </Bloco>

      <form onSubmit={onSubmitForm}>
        <Input
          type="email"
          placeholder="E-Mail"
          name="email"
          value={form.email}
          onChange={onChangeForm}
          required
        />

        <Input
          type="password"
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={onChangeForm}
          pattern="^.{6,}"
          title="Sua senha deve ter no mínimo 6 caracteres"
          required
        />

        <Botao> <b>Entrar</b> </Botao>
      </form>

      <BotaoVazio onClick={irParaCadastro}>Não possui cadastro? <b>Clique aqui</b></BotaoVazio>
    </Base>
  );
};

export default Login;
