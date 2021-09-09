import {useContext} from "react";
import {MiContexto} from '../context/GlobalContext';


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
