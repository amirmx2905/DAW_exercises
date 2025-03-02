import React from "react";
import { Link } from "react-router-dom";

const Archivo = () => {
  return (
    <div className="archivo">
      <h1 className="text-2xl font-bold">Modulo de Archivo</h1>
      <Link to="/" className="text-blue-500">
        Regresar al Menú
      </Link>
    </div>
  );
};

export default Archivo;
