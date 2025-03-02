import React from "react";
import { Link } from "react-router-dom";

const Reportes = () => {
  return (
    <div className="reportes">
      <h1 className="text-2xl font-bold">Modulo de Reportes</h1>
      <Link to="/" className="text-blue-500">
        Regresar al Menú
      </Link>
    </div>
  );
};

export default Reportes;
