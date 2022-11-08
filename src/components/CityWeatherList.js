import React from 'react'
import "../App.css";

const CityWeatherList = () => {
  const API_KEY = process.env.REACT_APP_SECURED_API_KEY
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=baroda&appid=${API_KEY}`

  

  return (
    <div className='list-container'>
      <div className='city-weather-info'>
        <p className='weather'>Weather</p>
        <div className='city-info'>
          <p>25<sup><sup className='deg'>o</sup></sup></p>
          <hr/>
          <div>
            <p>Date and Day</p>
            <p>City Name</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityWeatherList