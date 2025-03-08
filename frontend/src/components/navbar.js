import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Modulo from "./modulo";
import Alumnos from "./alumnos"; // Add this import

const Navbar = () => {
  return (
    <Router>
      <div className="bg-gray-800 p-4">
        <nav className="flex justify-between">
          <div className="flex space-x-4">
            <Link
              to="/inicio"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/archivo"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Archivo
            </Link>
            <Link
              to="/catalogos"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Catálogos
            </Link>
            <Link
              to="/procesos"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Procesos
            </Link>
            <Link
              to="/reportes"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Reportes
            </Link>
            <Link
              to="/alumnos"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Alumnos
            </Link>
          </div>
          <div>
            <Link
              to="/salir"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium mr-4"
            >
              Salir
            </Link>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/:nombre" element={<Modulo />} />
        <Route path="/alumnos" element={<Alumnos />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
