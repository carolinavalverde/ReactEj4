import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.css";
import Container from "./components/Container";

function App() {
  return (
    <div className="App text-bg-light">
      <h1 className="card shadow text-center bg-warning text-bg-dark fw-bold m-2 p-2">
        Ej4 y Ej5: To Do List
      </h1>
      <Container />
    </div>
  );
}

export default App;
