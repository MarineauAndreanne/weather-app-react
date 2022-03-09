import React from "react";

import "./WeatherDisplay.css";

export default function WeatherDisplay(props) {
  return (
    <div className="container WeatherDisplay">
      <div className="CityDetails">
        <ul>
          <li className="CityName">{props.city}</li>
          <li className="DateTime">Tuesday 13:06 fake data</li>
          <li className="WeatherDescription">{props.weather.description}</li>
        </ul>
      </div>
      <div className="row WeatherDetails">
        <div className="col-sm-6">
          <div className="WeatherIcon">
            <img src={props.weather.emoji} alt={props.weather.description} />
          </div>
          <div className="Temperature">
            {Math.round(props.weather.temperature)}°C
          </div>
        </div>
        <div className="col-sm-6"></div>
        <div>Humidity: {Math.round(props.weather.humidity)}%</div>
        <div>Wind: {Math.round(props.weather.wind)} km/h</div>
      </div>
    </div>
  );
}
