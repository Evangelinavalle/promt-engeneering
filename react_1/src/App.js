import "./index.css";
import Card from "./Components/Card";

import { useState} from "react";

export default function App() {

let [upvote, setupvote] = useState(0);

function like () {
return setupvote((upvote += 1));
}


  return (
    <div className="App">
      {upvote}
      <button>🐤</button>
      <Card Name="Evan" Work="SWE" />
      <Card Name="Korina" Work="Chef" pics/> 
      <Card Name="Sam" Work="Hunter" />
    </div>
  );
}
