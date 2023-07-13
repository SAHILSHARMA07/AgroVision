import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data
    const fetchWeatherData = async () => {
      try {
        const apiKey = '794d60906fd233f40c6fd336bfb62a2c';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=${apiKey}`;

        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        console.log('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      {console.log(weatherData)}
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {Math.round((weatherData.main.temp-273.15)*100)/100 }</p>
          <p>Temperature: {Math.round((weatherData.main.temp-273.15)*100)/100 }</p>
          <p>Temperature: {Math.round((weatherData.main.temp-273.15)*100)/100 }</p>
          <p>Temperature: {Math.round((weatherData.main.temp-273.15)*100)/100 }</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
