import React, { useState } from "react";
import axios from 'axios';

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=730c955cc2621f71d3fe16e7f78f1f69`;

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      setLocation('');
    });
  };
  const handleKey=(event)=>{
    if(event.key === 'Enter'){
      handleSubmit();
    }
  }

  return (
    <div className="bg-weather bg-cover bg-center h-screen w-full">
      <div className=" h-[500px] flex justify-center items-center backdrop-blur-md bg-opacity-75">
        <div className="flex flex-col justify-center items-center mt-[40px] p-8 bg-sky-200 bg-opacity-50 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Weather App</h1>
          <input
            className="pl-2 h-8 rounded-lg shadow-lg mb-2 w-[250px]"
            type="text"
            placeholder="Enter a location"
            value={location}
            onChange={handleChange}
            onKeyPress={handleKey}
          />
          <button
            className="w-[150px] bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-2 border border-blue-700 rounded-lg shadow-lg mt-2"
            onClick={handleSubmit}
          >
            Submit
          </button>

          {/* Display weather data inside the card */}
          <div className="text-2xl font-bold m-4">
            <p>{data.name}</p>
          </div>
          <div className="font-semibold text-xl m-2">
            {data.main ? <h1 className="m-2">Temperature: {data.main.temp.toFixed()}°F</h1> : null}
            {data.main ? <h1 className="m-2">Feels Like: {data.main.feels_like.toFixed()}°F</h1> : null}
            {data.weather ? <p className="m-2">Sky: {data.weather[0].main}</p> : null}
            {data.wind ? <p className="m-2">Wind Speed: {data.wind.speed.toFixed()} MPH</p> : null}
            {data.main ? <p className="m-2">Humidity: {data.main.humidity}%</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
