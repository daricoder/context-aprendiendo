import React, { createContext, useState } from "react";


export const MiContexto = createContext();

const initialValue = {
    usuario: "RUBEN SUAREZ",
    contador: 0,
};

export const GlobalContext = ({ children }) => {

  const [contextoGlobal, setContextoGlobal] = useState(initialValue);

  const incrementarContador = () => {
    let { contador } = contextoGlobal;
    contador = contador + 1;
    setContextoGlobal({ ...contextoGlobal, contador });
  };
  
  const cambiarUsuario = (usuario) => {
    setContextoGlobal({ ...contextoGlobal, usuario });
  }
  

  return (
    <MiContexto.Provider value={{ ...contextoGlobal, incrementarContador, cambiarUsuario }}>
      {children}
    </MiContexto.Provider>
  );
}
