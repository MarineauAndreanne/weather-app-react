import React from "react";

export default function Weather(props) {
  return (
    <div className="WeatherDisplay">
      <div className="CityDetails">
        <ul>
          <li>{props.city}</li>
          <li>Tuesday 13:06 fake data</li>
          <li>{props.weather.description}</li>
        </ul>
      </div>
      <div className="WeatherDetails">
        <ul>
          <li>
            <img src={props.weather.emoji} alt={props.weather.description} />
          </li>
          <li>{Math.round(props.weather.temperature)}°C</li>
          <li>Humidity: {Math.round(props.weather.humidity)}%</li>
          <li>Wind: {Math.round(props.weather.wind)} km/h</li>
        </ul>
      </div>
    </div>
  );
}
