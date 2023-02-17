import React, { useState, useEffect } from "react";
import FavoriteLocations from "./FavoriteLocations"
const Homescreen = () => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    // Use geolocation API to get user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      // Use OpenWeatherMap API to get current weather
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid={a6b3badee781ed67913d2be9d78d88a5}`
      )
        .then((response) => response.json())
        .then((data) => setWeather(data));
    });
  }, []);

  return (
    <div>
      <h1>Current Weather</h1>
      <p>{weather.name}</p>
      <p>{weather.main?.temp}°F</p>
      <FavoriteLocations />
    </div>
  );
};

export default Homescreen;
