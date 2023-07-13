import React, { useState } from 'react';

const WeatherComponent1 = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const handleLocationClick =  () => {
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          setError('Error retrieving location.');
          console.log(error);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };
 



  const fetchWeatherData = async (lat, lon) => {
      try {
          const apiKey = '794d60906fd233f40c6fd336bfb62a2c';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
        setWeatherData(data);
  
      } catch (error) {
        setError('Error fetching weather data.');
        console.log(error);
      }
    };

  return (
    <div>
      <button onClick={handleLocationClick}>Get Weather</button>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>Weather Information</h2>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          {weatherData.name}
         
          {/* Display other weather data as needed */}
        </div>
      )}
    </div>
  );
};

export default WeatherComponent1;
