import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <Search />
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
