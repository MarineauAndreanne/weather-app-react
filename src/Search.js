import axios from "axios"
import React, { useState, useEffect } from "react"
import WeatherDisplay from "./WeatherDisplay"
import ForecastDisplay from "./ForecastDisplay"

import "./Search.css"

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity)
  const [weatherData, setWeatherData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    search()
  }, [])

  function fetchWeatherDetails(response) {
    setWeatherData({
      city: response.data.name,
      coords: response.data.coord,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    })
    setLoading(false)
  }

  async function search() {
    setLoading(true)

    let apiKey = "c43c775fd000c0602bcc0f2b55575af9"
    let units = "metric"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
    let response = await axios.get(apiUrl)

    // await delay(1500);

    fetchWeatherDetails(response)
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  async function showCurrentLocation(position) {
    setLoading(true)

    let lat = position.coords.latitude
    let long = position.coords.longitude
    let apiKey = "c43c775fd000c0602bcc0f2b55575af9"
    let units = "metric"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&appid=${apiKey}`
    let response = await axios.get(apiUrl)

    fetchWeatherDetails(response)
  }

  function fetchCurrentLocation(event) {
    event.preventDefault()
    navigator.geolocation.getCurrentPosition(showCurrentLocation)
  }

  function updateCity(event) {
    setCity(event.target.value)
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
        <button className="btn btn-dark">Search</button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={fetchCurrentLocation}
        >
          Current
        </button>
      </form>
    </div>
  )

  return (
    <div>
      {searchBar}
      {loading ? (
        <h3 class="Loading">Loading...</h3>
      ) : (
        <>
          <WeatherDisplay weather={weatherData} />
          <ForecastDisplay coords={weatherData.coords} />
        </>
      )}
    </div>
  )
}
