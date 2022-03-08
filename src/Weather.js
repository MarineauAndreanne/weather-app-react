import React from "react";
import axios from "axios";

export default function Weather(props) {
  function showWeather(response) {
    return alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}`
    );
  }

  let apiKey = "5dbdc91948e1399dfc661396dfb08620";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);

  return <h4>Hello from Weather</h4>;
}
