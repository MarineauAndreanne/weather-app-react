import React, { useState } from "react";

export default function Temperature(props) {
  const [units, setUnits] = useState("metric");

  // function showFahrenheit(event) {
  //   event.preventDefault();
  //   setUnits("imperial");
  // }

  // function showCelsius(event) {
  //   event.preventDefault();
  //   setUnits("metric");
  // }

  if (units === "metric") {
    return (
      <span className="Temperature">
        <span>{Math.round(props.celsius)}</span>
        <span className="Units">
          °C | <a href="/">°F</a>{" "}
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="Temperature">
        <span>{Math.round(fahrenheit)}</span>
        <span className="Units">
          <a href="/">°C</a> | °F
        </span>
      </span>
    );
  }
}
