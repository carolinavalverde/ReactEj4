import React from "react";
import "./Styles/App.css";
import TodoApp from "./components/ToDoApp.jsx";

function App() {
  return (
    <section className="container m-3 d-flex">
      <div className="card shadow rounded col-8 justify-content-center pb-5 pe-3">
        <TodoApp />
      </div>
    </section>
  );
}

export default App;
