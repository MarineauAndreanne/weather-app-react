import axios from "axios";
import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import ForecastDisplay from "./ForecastDisplay";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("Lisbon");
  const [weatherData, setWeatherData] = useState({});
  const [loaded, setLoaded] = useState(false);

  function fetchWeatherDetails(response) {
    setLoaded(true);
    setWeatherData({
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    let apiKey = "5dbdc91948e1399dfc661396dfb08620";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(fetchWeatherDetails);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let searchBar = (
    <div className="row align-items-center">
      <form className="Search" onSubmit={handleSubmit}>
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
        <WeatherDisplay weather={weatherData} />
        <ForecastDisplay />
      </div>
    );
  } else {
    search();
    return (
      <div className="Loading">
        {searchBar}
        <h3>Loading...</h3>
      </div>
    );
  }
}
