//Exercicio 1 e 2

// import './App.css';

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

// const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

// function App() {
//   render() { 
//     return (
//       <ul>{ tarefas.map((tarefa) => Task(tarefa)) }</ul>
//    )
//   } 
// }

// export default App;

//O comentado acima é do primeiro exercicio de 11.1
//Comentei e reutilizei a mesma pasta para economizar armazenamento no pc

//Exercicio 3

import React from "react";
import Content from "./Componentes/Content";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
