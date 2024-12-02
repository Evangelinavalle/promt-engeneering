// src/App.js

import React from "react";
import "./styles.css"; // Asegúrate de que el archivo styles.css esté en la misma carpeta
import Card from "./Components/Card"; // Importamos el componente Card

export default function App() {
  return (
    <div className="App">
      <Card Name="Evangelina" Work="SWE" />
      <Card Name="Eva" Work="Chef" />
      <Card Name="Sam" Work="President" />
    </div>
  );
}

