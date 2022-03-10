import axios from "axios";
import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import ForecastDisplay from "./ForecastDisplay";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [forecast, setForecast] = useState("");
  const [loaded, setLoaded] = useState(false);

  function fetchWeatherDetails(response) {
    setLoaded(true);
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      emoji: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
    // return fetchForecastApi(response);
  }

  function fetchForecastDetails(response) {
    setForecast("hello");
  }

  function fetchForecastApi() {
    let apiKey = "5dbdc91948e1399dfc661396dfb08620";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
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
        <WeatherDisplay city={city} weather={weatherData} />
        <ForecastDisplay weather={weatherData} />
      </div>
    );
  } else {
    return (
      <div className="Loading">
        {searchBar}
        <h3>Loading...</h3>
        {forecast}
      </div>
    );
  }
}
