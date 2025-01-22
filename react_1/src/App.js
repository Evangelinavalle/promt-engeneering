// App.js
import "./index.css";
import Card from "./Components/Card";
import { useState } from "react";

export default function App() {
  const [upvote, setupvote] = useState(0);

  function like() {
    setupvote((prevUpvote) => prevUpvote + 1); // Using the functional update pattern
  }

  return (
    <div className="App">
      {upvote}
      <button onClick={like}>🐤</button>
      <Card Name="Evan" Work="SWE" pics="https://miro.medium.com/v2/resize:fit:1200/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg" />
      <Card Name="Korina" Work="Chef" pics="https://miro.medium.com/v2/resize:fit:1200/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg" /> 
      <Card Name="Sam" Work="Hunter" pics="https://miro.medium.com/v2/resize:fit:1200/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg" />
    </div>
  );
}