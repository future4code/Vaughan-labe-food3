import React, { useState } from "react";

const useForms = estadoInicial => {
    const [form, setForm]= useState(estadoInicial);

    const onChangeForm= event => {
        setForm({...form, [event.target.name]: event.target.value})
    };

    const clear= () => {
        setForm(estadoInicial)
    };

    return {form, onChangeForm, clear};

};

export default useForms;