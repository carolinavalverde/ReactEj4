import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
