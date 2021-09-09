import React from "react";
import { ThemeContext, themes } from "./theme-context";
import ThemeTogglerButton from "./theme-toggler-button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // The entire state is passed to the provider
   
      /* IMPORTANTE : extraido de REACT
  El argumento value pasado a la función será igual a la prop 
  value del Provider más cercano para este contexto en el árbol.
  Si no hay un Proveedor superior para este contexto, 
  el argumento value será igual al defaultValue que se pasó a createContext().
  
  */
   
    /* EXPLICASION DETALLADA
  El ejemplo de la pagina de react en el tema CONTEXT dice: actualizando
  el contexto. No esta actualizando el contexto solo lo esta utilizando
  lo esta extrayendo a travez de el componente Consumer donde en este ejemplo
  se pone a 2 componentes CONSUMER que renderizan un boton. Uno se lo envuelve
  con un componente PROVIDER con el value del estado de APP que puede ser cualquier cosa
   y al pasarselo estamos actualizando el valor del contexto solo dentro de este provider 
   Por eso este primer componente tendra el estado de APP
   mientras que el segundo que no tienne ningun wrapper de PROVEEDOR o PROVIDER entonces cojera
   el valor por defecto pasado cuando se creo el contexto.
   */
    return (
      //  aqui tambien me toco arreglar para que no solo retorne un componente provider y poner a prueba los consumer por eso envuelvo en vacio o pudiera ser en div
      <>
        <ThemeContext.Provider value={this.state}>
          {/* <Content /> */}
          {/* en vez de este content que no solo es un wrapper y lo hace engorroso directamente pongo el componente */}
          <ThemeTogglerButton />
          <div>
            hola
          </div>
        </ThemeContext.Provider>
        <ThemeTogglerButton />
      </>
    );
  }
}

// yo no entiendo porque la explicacion de react lo hace mas engorroso por eso elimino este wrapper o empaquetador que no sirve para nada
/* function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
} */

export default App;
