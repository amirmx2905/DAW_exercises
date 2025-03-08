import React, { useState, useEffect } from "react";

const Alumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/alumnos/");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAlumnos(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data: " + error.message);
        setLoading(false);
      }
    };

    fetchAlumnos();
  }, []);

  if (loading) return <p className="text-center py-4">Cargando alumnos...</p>;
  if (error) return <p className="text-center py-4 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Lista de Alumnos</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Nombre</th>
              <th className="py-2 px-4 border-b text-left">Apellido</th>
              <th className="py-2 px-4 border-b text-left">Matrícula</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Carrera</th>
              <th className="py-2 px-4 border-b text-left">Semestre</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.length > 0 ? (
              alumnos.map((alumno) => (
                <tr key={alumno.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{alumno.nombre}</td>
                  <td className="py-2 px-4 border-b">{alumno.apellido}</td>
                  <td className="py-2 px-4 border-b">{alumno.matricula}</td>
                  <td className="py-2 px-4 border-b">{alumno.email}</td>
                  <td className="py-2 px-4 border-b">{alumno.carrera}</td>
                  <td className="py-2 px-4 border-b">{alumno.semestre}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 px-4 text-center">
                  No hay alumnos registrados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alumnos;
