import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecast.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecast.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();

    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecastDay">{day()}</div>
      <div className="WeatherForecastIcon">
        <WeatherIcon iconCode={props.forecast.weather[0].icon} size={30} />
      </div>
      <div className="WeatherForecastTemperatures">
        <span className="WeatherForecastMaxTemperature">
          {maxTemperature()}
        </span>
        <span className="WeatherForecastMinTemperature">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
