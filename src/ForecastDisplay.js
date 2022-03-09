import React from "react";

import "./ForecastDisplay.css";

export default function ForecastDisplay(props) {
  return (
    <div className="container ForecastDisplay">
      <div className="row align-items-center">
        <ul className="col-sm align-self-center">
          <li>MON</li>
          <li>
            <div className="WeatherIcon">
              <img src={props.weather.emoji} alt={props.weather.description} />
            </div>
          </li>
          <li>22°C</li>
        </ul>
        <ul className="col-sm">
          <li>MON</li>
          <li>
            <div className="WeatherIcon">
              <img src={props.weather.emoji} alt={props.weather.description} />
            </div>
          </li>
          <li>22°C</li>
        </ul>
        <ul className="col-sm">
          <li>MON</li>
          <li>
            <div className="WeatherIcon">
              <img src={props.weather.emoji} alt={props.weather.description} />
            </div>
          </li>
          <li>22°C</li>
        </ul>
        <ul className="col-sm">
          <li>MON</li>
          <li>
            <div className="WeatherIcon">
              <img src={props.weather.emoji} alt={props.weather.description} />
            </div>
          </li>
          <li>22°C</li>
        </ul>
        <ul className="col-sm">
          <li>MON</li>
          <li>
            <div className="WeatherIcon">
              <img src={props.weather.emoji} alt={props.weather.description} />
            </div>
          </li>
          <li>22°C</li>
        </ul>
      </div>
    </div>
  );
}
