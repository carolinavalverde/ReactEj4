import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };

  return (
    <input
      type="text"
      placeholder="Ingrese una tarea"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
};

export default TaskInput;
