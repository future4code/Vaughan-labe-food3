import styled from "styled-components";

export const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22.5rem;
  margin: auto;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
`;

export const Bloco = styled.div`
  padding-right: 10rem;
  padding-left: 10rem;
  align-items: center;
`;

export const Logo = styled.img`
  width: 104px;
  margin-top: 80%;
`;

export const Titulo = styled.h2`
  font-size: 1rem;
  height: 2.625rem;
  margin: 1rem 0 0;
  padding: 0.75rem 2rem;
`;

export const Input = styled.input`
  border: 1px solid #b8b8b8;
  border-radius: 2px;
  margin: 7px;
  width: 20.5rem;
  height: 3.5rem;
`;

export const Botao = styled.button`
  width: 20.5rem;
  height: 2.625rem;
  margin: 10px;
  padding: 0.75rem 1rem;
  border-radius: 2px;
  border: none;
  background-color: #e8222e;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`;

export const BotaoVazio = styled.button`
  margin: 10px;
  border: none;
  color: black;
  background: none;
  text-decoration: none;
  cursor: pointer;
`;