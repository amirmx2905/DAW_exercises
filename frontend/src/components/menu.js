import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="text-2xl font-bold">Menú Principal</h1>
      <ul>
        <li>
          <Link to="/archivo">Archivo</Link>
        </li>
        <li>
          <Link to="/catalogos">Catálogos</Link>
        </li>
        <li>
          <Link to="/procesos">Procesos</Link>
        </li>
        <li>
          <Link to="/reportes">Reportes</Link>
        </li>
        <li>
          <Link to="/salir">Salir</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
