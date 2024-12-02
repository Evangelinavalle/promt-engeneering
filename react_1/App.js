import React from "react";
import "./styles.css";
import Card from "./Components/Card"; // Asegúrate de que la ruta sea correcta

export default function App() {
  return (
    <div className="App">
      <Card Name="Evangelina" Work="SWE" />
      <Card Name="Eva" Work="Chef" />
      <Card Name="Sam" Work="President" />
    </div>
  );
}
