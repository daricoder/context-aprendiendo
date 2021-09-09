import { useContext } from "react";
import { MiContexto } from "../context/GlobalContext";

export default function Formulario() {
  const { usuario,cambiarUsuario } = useContext(MiContexto);
  return (
    <form>
      <div className="form-group">
        <label >Nombre</label>
        <input
          onChange={(e) => cambiarUsuario(e.target.value)}
          type="text"
          value={usuario}
          className="form-control"
          placeholder="Enter User"
        />
      </div>
      <div className="form-group">
        <label >Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" >
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
