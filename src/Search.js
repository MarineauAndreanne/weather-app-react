import axios from "axios";
import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [loaded, setLoaded] = useState(false);

  function fetchWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      emoji: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(weather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "84cdefc9feb2d08fea733385f3bbaf66";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(fetchWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
    console.log(city);
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
        <WeatherDisplay city={city} weather={weather} />
      </div>
    );
  } else {
    return (
      <div>
        {searchBar}
        <WeatherDisplay city={city} weather={weather} />
      </div>
    );
  }
}
