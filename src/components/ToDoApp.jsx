import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoApp() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState(""); 

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== "") {
      const nuevasTareas = [
        ...tareas,
        { id: Date.now(), texto: nuevaTarea, completada: false },
      ];
      setTareas(nuevasTareas);
      setNuevaTarea("");
      localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
    }
  };

  const marcarComoHecha = (id) => {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(nuevasTareas);
    localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
  };

  const eliminarTareasCompletadas = () => {
    const nuevasTareas = tareas.filter((tarea) => !tarea.completada);
    setTareas(nuevasTareas);
    localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
  };

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
              className="list-group-item d-flex align-items-center"
            >
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => marcarComoHecha(tarea.id)}
                className="mr-2"
              />
              <span
                onClick={() => marcarComoHecha(tarea.id)}
                style={{
                  cursor: "pointer",
                  textDecoration: tarea.completada ? "line-through" : "none",
                }}
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
