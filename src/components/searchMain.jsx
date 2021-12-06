import React, { useEffect, useState } from "react";
import "../components/styles.css";
import WeatherDetails from "./weatherDetails";

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("Warsaw");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&&units=metric&appid=c3a4a8a98c77758187c47f9a38ef2976`;

      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myNewWeatherInfo)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);



  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            className="input"
            type="search"
            placeholder="Search city.."
            id="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <button className="searchButton" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      <WeatherDetails {...tempInfo} />
    </>
  );
}

export default SearchMain;
