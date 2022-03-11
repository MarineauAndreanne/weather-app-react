import React, { useState } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";

import "./ForecastDisplay.css";

export default function ForecastDisplay(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="ForecastDisplay">
        <div className="row align-items-center">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col align-self-center" key={index}>
                  <ForecastDay forecast={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "c43c775fd000c0602bcc0f2b55575af9";
    let units = "metric";
    let latitude = "80";
    let longitude = "20";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    //FIX LAT AND LON WITH PROPS.COORDS.LAT and PROPS.COORDS.LON

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
