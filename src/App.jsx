import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <h1 className="container-fluid text-center text-bg-primary m-2 p-2">
        Ej4 y Ej5: To do List
      </h1>
      <Container />
    </div>
  );
}

export default App;
