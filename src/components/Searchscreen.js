import React, { useState } from "react";
import {Link } from "react-router-dom";

const Searchscreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
  
      // Use OpenWeatherMap API to search for locations
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=imperial&appid={a6b3badee781ed67913d2be9d78d88a5}`
      )
        .then((response) => response.json())
        .then((data) => setSearchResults([data]));
    };
  
    return (
      <div>
        <input type="text" value={searchTerm} onChange={handleSearch} />
        {searchResults.map((result) => (
          <Link to={`/detail/${result.id}`} key={result.id}>
            <p>{result.name}</p>
          </Link>
        ))}
      </div>
    );
}

export default Searchscreen;