import React from "react";
import { Link } from "react-router-dom";

const Salir = () => {
  return (
    <div className="salir">
      <h1 className="text-2xl font-bold">Modulo de Salir</h1>
      <Link to="/" className="text-blue-500">
        Regresar al Menú
      </Link>
    </div>
  );
};

export default Salir;
