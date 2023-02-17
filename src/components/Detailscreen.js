import React, { useState, useEffect } from "react";
// import {Link } from "react-router-dom";
const Detailscreen = ({match}) => {
    const [weather, setWeather] = useState({});

  useEffect(() => {
    // Use OpenWeatherMap API to get current weather for selected location
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${match.params.id}&units=imperial&appid={a6b3badee781ed67913d2be9d78d88a5}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, [match.params.id]);

  return (
    <div>
      <h1>{weather.name}</h1>
      <p>{weather.main?.temp}°F</p>
      <p>{weather.weather?.[0]?.description}</p>
    </div>
  );
}

export default Detailscreen;