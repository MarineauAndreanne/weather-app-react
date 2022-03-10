import React from "react";
import DateTime from "./DateTime";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

import "./WeatherDisplay.css";

export default function WeatherDisplay(props) {
  let date = props.weather.date;
  return (
    <div className="WeatherDisplay">
      <div className="CityDetails">
        <ul>
          <li className="CityName">{props.weather.city}</li>
          <li className="DateTime">
            <DateTime date={date} />
          </li>
          <li className="WeatherDescription">{props.weather.description}</li>
        </ul>
      </div>
      <div className="row align-items-center WeatherDetails">
        <div className="col">
          <span className="WeatherIcon">
            <WeatherIcon iconCode={props.weather.icon} />
          </span>
          <Temperature celsius={props.weather.temperature} />
        </div>
        <div className="col">
          <div>Humidity: {Math.round(props.weather.humidity)}%</div>
          <div>Wind: {Math.round(props.weather.wind)} km/h</div>
        </div>
      </div>
    </div>
  );
}
