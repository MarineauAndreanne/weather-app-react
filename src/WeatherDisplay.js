import React from "react";

import "./WeatherDisplay.css";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <div className="CityDetails">
        <ul>
          <li className="CityName">{props.city}</li>
          <li className="DateTime">Tuesday 13:06 fake data</li>
          <li className="WeatherDescription">{props.weather.description}</li>
        </ul>
      </div>
      <div className="container">
        <div className="row align-items-top WeatherDetails">
          <div className="col">
            <span className="WeatherIcon">
              <img src={props.weather.emoji} alt={props.weather.description} />
            </span>
            <span className="Temperature">
              {Math.round(props.weather.temperature)}
              <span className="Units">°C</span>
            </span>
          </div>
          <div className="col"></div>
          <div>Humidity: {Math.round(props.weather.humidity)}%</div>
          <div>Wind: {Math.round(props.weather.wind)} km/h</div>
        </div>
      </div>
    </div>
  );
}
