import React from "react";
import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { styles } from "./Navbar.style";

const Navbar = ({ nombreUsuario}) => {


  const opciones = [
    {nombre:"Quienes Somos", id:0, ruta:"#"},
    {nombre:"Clientes", id:1, ruta:"#"},
    {nombre:"Tienda", id:2, ruta:"#"},
  ];

  return (
    <header style={styles.container}>
      <img style={styles.imagenes} src={logo} alt="Tienda" />
      <h1>3DFG</h1>
      <h3>Bienvenido{nombreUsuario}</h3>
      <nav>
        {
          opciones.map((categoria)=>{
            return <a key={categoria.id} style={styles.categorias} href={categoria.ruta}>{categoria.nombre}</a>
          })
        }
      </nav>
      <CartWidget />
    </header>
  );
};

export default Navbar;


