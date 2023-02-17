
import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";



function FavoriteLocations() {
    const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
      // Get favorites from local storage
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    }, []);
  
    useEffect(() => {
      // Update local storage when favorites change
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);
  
    return (
      <div>
        <h2>Favorite Locations</h2>
        {favorites.map((location) => (
          <Link to={`/detail/${location.id}`} key={location.id}>
            <p>{location.name}</p>
          </Link>
        ))}
      </div>
    );
  }

 export default FavoriteLocations;