// Importa las bibliotecas necesarias
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Componente principal de la aplicación
function TodoApp() {
  // Estado para manejar la lista de tareas
  const [tareas, setTareas] = useState([]);

  // Estado para manejar la nueva tarea
  const [nuevaTarea, setNuevaTarea] = useState("");

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() !== "") {
      const nuevasTareas = [
        ...tareas,
        { id: Date.now(), texto: nuevaTarea, completada: false },
      ];
      setTareas(nuevasTareas);
      setNuevaTarea("");

      // Guarda las tareas en el local storage
      localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
    }
  };

  // Función para marcar una tarea como hecha
  const marcarComoHecha = (id) => {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(nuevasTareas);

    // Guarda las tareas en el local storage
    localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
  };

  // Función para eliminar todas las tareas completadas
  const eliminarTareasCompletadas = () => {
    const nuevasTareas = tareas.filter((tarea) => !tarea.completada);
    setTareas(nuevasTareas);

    // Guarda las tareas en el local storage
    localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
  };

  // Efecto para cargar las tareas desde el local storage al cargar la página
  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    setTareas(tareasGuardadas);
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Lista de Tareas</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nueva tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={agregarTarea}>
        Agregar Tarea
      </button>

      {tareas.length === 0 ? (
        <p>No hay tareas por ahora.</p>
      ) : (
        <ul className="list-group">
          {tareas.map((tarea) => (
            <li
              key={tarea.id}
              className={`list-group-item ${
                tarea.completada ? "list-group-item-success" : ""
              }`}
            >
              <span
                onClick={() => marcarComoHecha(tarea.id)}
                style={{ cursor: "pointer" }}
              >
                {tarea.texto}
              </span>
            </li>
          ))}
        </ul>
      )}

      {tareas.some((tarea) => tarea.completada) && (
        <button
          className="btn btn-danger mt-3"
          onClick={eliminarTareasCompletadas}
        >
          Eliminar Tareas Completadas
        </button>
      )}
    </div>
  );
}

export default TodoApp;
