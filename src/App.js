import React from "react";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Search defaultCity="Lisbon" />
      </div>
      <small className="Signature">
        <a
          href="https://github.com/MarineauAndreanne/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Andreanne Marineau
      </small>
    </div>
  );
}

export default App;
