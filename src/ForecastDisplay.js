import React from "react";

import WeatherIcon from "./WeatherIcon";

import "./ForecastDisplay.css";

export default function ForecastDisplay() {
  return (
    <div className="ForecastDisplay">
      <div className="row align-items-center">
        <div className="col align-self-center">
          <div className="WeatherForecastDay">MON</div>
          <div className="WeatherForecastIcon">
            <WeatherIcon iconCode="01d" size={30} />
          </div>
          <div className="WeatherForecastTemperatures">
            <span className="WeatherForecastMaxTemperature">15°</span>
            <span className="WeatherForecastMinTemperature">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
