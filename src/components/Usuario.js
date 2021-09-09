import { useContext } from "react";
import { MiContexto } from "../context/GlobalContext";

export default function Usuario() {
  const { usuario } = useContext(MiContexto);
  return (
    <div style={{ background: "#62957b" }}>
      <h4>soy el componente usuario</h4>
      <p>El usuario es {usuario}</p>
    </div>
  );
}
