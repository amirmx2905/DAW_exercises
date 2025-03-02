import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/menu";
import Modulo from "./components/modulo";
import Archivo from "./components/archivo";
import Catalogos from "./components/catalogos";
import Procesos from "./components/procesos";
import Reportes from "./components/reportes";
import Salir from "./components/salir";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/archivo" element={<Archivo />} />
        <Route path="/catalogos" element={<Catalogos />} />
        <Route path="/procesos" element={<Procesos />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/salir" element={<Salir />} />
        <Route path="/:nombre" element={<Modulo />} />
      </Routes>
    </Router>
  );
};

export default App;
