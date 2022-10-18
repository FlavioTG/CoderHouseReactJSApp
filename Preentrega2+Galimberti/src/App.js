import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from './Containers/ItemListContainer'



const App = () => {
  const nombre = "Seiya";
  const mensaje="Modelos ejemplos"

  return (
    <>
      <Navbar nombreUsuario={nombre}/>
      <ItemListContainer greeting={mensaje} />
    </>
  );
};

export default App;
