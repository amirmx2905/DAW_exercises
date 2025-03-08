import React, { useState, useEffect } from "react";

const Alumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newAlumno, setNewAlumno] = useState({
    nombre: "",
    apellido: "",
    matricula: "",
    email: "",
    carrera: "",
    semestre: "",
  });

  // Fetch all students
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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAlumno({
      ...newAlumno,
      [name]: name === "semestre" ? parseInt(value) || "" : value,
    });
  };

  // Submit new student
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/alumnos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAlumno),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const createdAlumno = await response.json();

      // Add the new student to the list
      setAlumnos([...alumnos, createdAlumno]);

      // Reset the form
      setNewAlumno({
        nombre: "",
        apellido: "",
        matricula: "",
        email: "",
        carrera: "",
        semestre: "",
      });

      // Close the form
      setShowForm(false);
      setLoading(false);
    } catch (error) {
      setError("Error creating student: " + error.message);
      setLoading(false);
    }
  };

  if (loading && !showForm)
    return <p className="text-center py-4">Cargando alumnos...</p>;
  if (error) return <p className="text-center py-4 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lista de Alumnos</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {showForm ? "Cancelar" : "Agregar Alumno"}
        </button>
      </div>

      {/* Student Creation Form */}
      {showForm && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
          <h2 className="text-xl font-semibold mb-4">Agregar Nuevo Alumno</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nombre"
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  value={newAlumno.nombre}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="apellido"
                >
                  Apellido
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="apellido"
                  type="text"
                  placeholder="Apellido"
                  name="apellido"
                  value={newAlumno.apellido}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="matricula"
                >
                  Matrícula
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="matricula"
                  type="text"
                  placeholder="A12345"
                  name="matricula"
                  value={newAlumno.matricula}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="estudiante@example.com"
                  name="email"
                  value={newAlumno.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="carrera"
                >
                  Carrera
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="carrera"
                  type="text"
                  placeholder="Ingeniería en Sistemas"
                  name="carrera"
                  value={newAlumno.carrera}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="semestre"
                >
                  Semestre
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="semestre"
                  type="number"
                  min="1"
                  max="12"
                  placeholder="1"
                  name="semestre"
                  value={newAlumno.semestre}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <button
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
                type="button"
                onClick={() => setShowForm(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                disabled={loading}
              >
                {loading ? "Guardando..." : "Guardar Alumno"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Students Table */}
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
