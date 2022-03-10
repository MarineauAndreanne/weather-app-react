import React from "react";
import DateTime from "./DateTime";

import "./WeatherDisplay.css";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <div className="CityDetails">
        <ul>
          <li className="CityName">{props.weather.city}</li>
          <li className="DateTime">
            <DateTime date={props.weather.date} />
          </li>
          <li className="WeatherDescription">{props.weather.description}</li>
        </ul>
      </div>
      <div className="row align-items-center WeatherDetails">
        <div className="col">
          <span className="WeatherIcon">
            <img src={props.weather.emoji} alt={props.weather.description} />
          </span>
          <span className="Temperature">
            {Math.round(props.weather.temperature)}
            <span className="Units">°C</span>
          </span>
        </div>
        <div className="col">
          <div>Humidity: {Math.round(props.weather.humidity)}%</div>
          <div>Wind: {Math.round(props.weather.wind)} km/h</div>
        </div>
      </div>
    </div>
  );
}
