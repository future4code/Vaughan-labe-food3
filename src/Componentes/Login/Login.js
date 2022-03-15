import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useForms from "../Hook/useForms";

const Login= () => {
    const navigate= useNavigate();
    const {form, onChangeForm, clear}= useForms({email:"", password:""})

    const onSubmitForm= event => {
        event.preventDefault();
        const url=`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/login`;

        const header={
            headers:{
                "Content-Type": "application/json"
            }
        };

        axios
            .post(url, form, header)
            .then(response => {
                if(!response.data.user.hasAddress){
                    return navigate("/cadastro/endereco");
                }
            
                navigate("/home");
            })
            .catch(() => {
                alert("Usuário não cadastrado")
                clear();
            })
    };

    const irParaCadastro= () => {
        navigate("/cadastro");
    };
    
    return (
        <div>
            <h1>Entrar</h1>

            <form onSubmit={onSubmitForm}>
                <input
                    type="email"
                    placeholder="email@email.com"
                    name="email"
                    value={form.email}
                    onChange={onChangeForm}
                    required
                />

                <input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={form.password}
                    onChange={onChangeForm}
                    pattern="^.{6,}"
                    title="Sua senha deve ter no mínimo 6 caracteres"
                    required
                />

                <button>Entrar</button>
            </form>

            <button onClick={irParaCadastro}>Não possui cadastro? Clique aqui</button>
        </div>
    )
};


export default Login;