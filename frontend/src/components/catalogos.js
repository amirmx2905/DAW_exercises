import React from "react";
import { Link } from "react-router-dom";

const Catalogos = () => {
  return (
    <div className="catalogos">
      <h1 className="text-2xl font-bold">Modulo de Catálogos</h1>
      <Link to="/" className="text-blue-500">
        Regresar al Menú
      </Link>
    </div>
  );
};

export default Catalogos;
