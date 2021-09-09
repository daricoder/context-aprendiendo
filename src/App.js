/* 
Lo unico que demuestra este ejemplo es que acceden a los valores
de un contexto. A un boton lo engloban con el componente provider para 
cambiarle el defaultvalue con el value del provider y por eso cambia al inicio 
en npm start veras que cada uno inicia con diferente color porque cada boton tiene diferente valor
uno con el defaultvalue y el otro desde un proveedor que le asignan un value.

*/

import React from "react";
import { ThemeContext, themes } from "./theme-context";
import ThemedButton from "./themed-button";

// Un componente intermedio que utiliza ThemedButton.
// function Toolbar(props) {
//   return (
//     <ThemedButton text={'Change Theme'} onClick={props.changeTheme}/>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }

  render() {
    // El botón ThemedButton dentro de ThemeProvider
    // usa el tema del estado mientras que el exterior usa
    // el tema oscuro predeterminado
    return (
      <>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton text={"Change Theme"} onClick={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemedButton text={"otro boton"} />
        </div>
      </>
    );
  }
}
export default App;
