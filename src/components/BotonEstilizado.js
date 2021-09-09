import {useContext} from "react";
import {MiContexto} from '../context/GlobalContext';

/* 
Poniendo a prueba el contexto
como ves este es un componente que llama al contexto a traves de useContext
y de ahi saca todos los valores del contexto y los utiliza.

Este componente es utilizado en la jerarquia de componentes como el mas profundo
ya que el componente App utiliza el componente MiBoton y este a su vez utiliza este Componente y dentro
de este componente queremos acceder al contexto y cambiar su estado.


*/

export const BotonEstilizado = () => {
    const {contador,incrementarContador} = useContext(MiContexto)
  return (
    <div style={{ background: "#86955c" }}>
      <h5>soy el componente botonestilizado</h5>
      <span>contador:{contador}</span>
      <button onClick={incrementarContador} style={{ background: "green" }}>aumentar contador</button>
    </div>
  );
};
