import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  return (
    <div>
      <h1>Este es un componente</h1>
      <p>Esto no se</p>
    </div>
  );
}

root.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>
);
function Nombre() {
  const name = "Gustis";
  return (
  <h2>{name}</h2>
  );
}
