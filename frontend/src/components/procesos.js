import React from "react";
import { Link } from "react-router-dom";

const Procesos = () => {
  return (
    <div className="procesos">
      <h1 className="text-2xl font-bold">Modulo de Procesos</h1>
      <Link to="/" className="text-blue-500">
        Regresar al Menú
      </Link>
    </div>
  );
};

export default Procesos;
