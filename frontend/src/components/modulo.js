import React from "react";
import { useParams } from "react-router-dom";

const Modulo = () => {
  const { nombre } = useParams();

  const modulos = {
    inicio: "Página Inicio",
    archivo: "Modulo de Archivo",
    catalogos: "Modulo de Catálogos",
    procesos: "Modulo de Procesos",
    reportes: "Modulo de Reportes",
    salir: "Modulo de Salir",
  };

  return (
    <div className="modulo flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">
        {modulos[nombre] || `Modulo de ${nombre}`}
      </h1>
    </div>
  );
};

export default Modulo;
