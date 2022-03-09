import axios from "axios";
import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import ForecastDisplay from "./ForecastDisplay";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [forecast, setForecast] = useState("");
  const [loaded, setLoaded] = useState(false);

  function fetchWeatherDetails(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      emoji: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    return fetchForecastApi(response);
  }

  function fetchForecastDetails(response) {
    setForecast({
      day: response.data.forecast.time.day,
      eemoji: `http://openweathermap.org/img/wn/${response.data.forecast[0].icon}@2x.png`,
      temperature: response.data.forecast.temperature.day,
    });
    console.log(response.data.forecast);
  }

  function fetchForecastApi() {
    let apiKey = "5dbdc91948e1399dfc661396dfb08620";
    let units = "metric";
    let apiUrl = `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(fetchForecastDetails);
  }

  function fetchWeatherApi(event) {
    event.preventDefault();
    let apiKey = "5dbdc91948e1399dfc661396dfb08620";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(fetchWeatherDetails);
  }

  function updateCity(event) {
    setCity(event.target.value);
    console.log(city);
  }

  let searchBar = (
    <div className="row align-items-center">
      <form className="Search" onSubmit={fetchWeatherApi}>
        <input
          type="text"
          placeholder="Type a city.."
          onChange={updateCity}
          autoFocus
        ></input>
        <button type="button" className="btn btn-dark">
          Search
        </button>
        <button type="button" className="btn btn-secondary">
          Current
        </button>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {searchBar}
        <WeatherDisplay city={city} weather={weather} />
        <ForecastDisplay weather={weather} />
      </div>
    );
  } else {
    return (
      <div>
        {searchBar}
        <WeatherDisplay city={city} weather={weather} />
        <ForecastDisplay weather={weather} />
      </div>
    );
  }
}
