function App() {
  return (
    <Empaquetador>
      <div className="App">
        <h1>hello world</h1>
      </div>
    </Empaquetador>
  );
}

/* 
Un componente de react es un objeto de tipo componente que renderiza
elementos html con logica de javascript y css juntos. Un componente
es el modelo de como debe renderizarse.
Lo normal es que crees componentes con toda su logica para
en algun momento reutilizarlos o utilizarlos de manera normal
y simple en forma de tag jsx (<Micomponente propiedad1={'cualquier cosa'}/>) 
y con el cierre inclusivo directo con sus debidos props para que funcione correctamente.

CHILDREN o en espaniol HIJOS
si a un componente o modelo de componente creado con jsx en react le aniades elementos hijos
de cualquier tipo ya sean elementos comunes de html o componentes de react mismosa
estos actuaran como hijos de este componente est decir:

<Micomponente>
  <div>Hola</div>
  <OtroComponente/> // cierre inclusivo
</Micomponente>

Micomponente renderizara lo que en su funcion render este o ya sea
el return de un array function pero lo que este entre el tag abierto jsx
y el tag cerrado jsx del componente actuaran como hijos de este componente

En react los hijos de un componente no son renderizados automaticamente
estos directamente pasan a una propiedad llamada children del objeto props
que como sabemos todo componente viene con esa propiedad y props significa todas
las propiedades que pongas en el tag abierto <Micomponente propiedad1={'algo'}> o cerrado
inclusivo <Micomponente propiedad1={'algo'}/>
Entonces como un padre no renderiza a sus hijos automaticamente react
pasa a los hijos como una propiedad llamada children conteniendolos a todos.


Este ejemplo es para que veas que un componente solo es un modelo y es normal usarlo con
el cierre del tag inclusivo <Micomponente/> . Si abres el tag todo lo que este
dentro del tag abierto y el tag cerrado del componente no mostrara y se pasara como props.children del
componente que abriste o tambien llamado padre.



*/

const Empaquetador = ({children}) => {
  
  return (
    <div>
      {/* {children} */}
      {/* Como ves a primera renderizada solo se muestra este parrafo pero si descomentas el children veras todos los hijos de este componente */}
      <p>soy un parrafo</p>
    </div>
  );
};

export default App;
