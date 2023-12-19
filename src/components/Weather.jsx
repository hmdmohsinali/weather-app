import React, { useState } from "react";
import axios from 'axios';

const Weather = () => {
    const [data, setData] = useState({})
    const [location, setLocation]= useState('')
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=730c955cc2621f71d3fe16e7f78f1f69`
    const handleChange=(event)=>{
        setLocation(event.target.value)
    }
    const handleSubmit = () => {
        axios.get(url).then((response=>{
            setData(response.data)
            setLocation('')
            console.log(data)
        }))
    };
  return (
    <div className="bg-weather bg-cover bg-center h-screen w-full" >
      <div className="flex justify-center items-center ">
      <div className=" flex flex-col justify-center items-center mt-[40px]">
      <input 
        className="pl-2 h-8 rounded-lg shadow-lg w-[250px]"
        type="text"
        placeholder="Enter a location"
        value={location}
        onChange={handleChange}
      />
      <button className="mt-2 w-[150px] bg-white hover:bg-gray-200 text-gray-800 font-medium py-1 px-2 border border-gray-400 rounded-lg shadow-lg " onClick={handleSubmit}>Submit</button>
      </div>
      </div>
      <div className="flex flex-col justify-center items-center">
       
        <div className="text-2xl font-bold m-4">
          
          <p>{data.name}</p>
        </div>
        <div className="font-semibold text-xl m-2">
          {data.main ? <h1 className="m-2">Temprature: {data.main.temp.toFixed()}°F</h1> : null}
          {data.main ? <h1 className="m-2">Feels Like: {data.main.feels_like.toFixed()}°F</h1> : null}
          {data.weather ? <p className="m-2">Sky: {data.weather[0].main}</p> : null}
          {data.wind ? <p className="m-2"> Wind Speed: {data.wind.speed.toFixed()} MPH</p> : null}
          {data.main ? <p className="m-2"> Humidity: {data.main.humidity}%</p> : null}
        </div>
      </div>
      </div>
  

  );
};

export default Weather;
