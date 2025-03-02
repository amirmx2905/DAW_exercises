import React from "react";
import { Link, useParams } from "react-router-dom";

const Modulo = () => {
  const { nombre } = useParams();
  return (
    <div className="modulo">
      <h1 className="text-2xl font-bold">Modulo de {nombre}</h1>
      <Link to="/" className="text-blue-500">
        Regresar al Menú
      </Link>
    </div>
  );
};

export default Modulo;
