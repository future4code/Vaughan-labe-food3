import React, {useState} from 'react';
import Rotas from './Rotas/Rotas';
import Contexto from "./Contexto/Contexto";

function App() {
  const [profile, setProfile]= useState([])

  const armazenarProfile= perfil => {
      setProfile(perfil);
  };

  return (
    <Contexto.Provider value={[profile, armazenarProfile]}>
      <Rotas/>
    </Contexto.Provider>
  );
}

export default App;
