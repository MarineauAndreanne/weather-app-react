import React from "react";
import Search from "./Search";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello from App</h1>
      <Search />
      <Weather city="Paris" />
    </div>
  );
}

export default App;
