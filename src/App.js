import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const API_KEY = process.env.REACT_APP_SECURED_API_KEY
  let [input, setInput] = useState("")
  let [query, setQuery] = useState(["istanbul"])
  const [city, setCity] = useState([])
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`

  useEffect(() => {
    getWeather()
  }, [query])

  let getWeather = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    setCity(data)
  }


  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const searchCity = (e) => {
    e.preventDefault()
    setQuery(input)
    setInput("")
  }

  return (
    <div className="app">
      <div className="container">
        <div className='header'>
          <h1>Weather App</h1>
          <form onSubmit={searchCity} className='search-form'>
            <input type="search" className='search-bar' placeholder={`Search City...`} onChange={handleInputChange} value={input} />
            <button className='search-btn' type="submit"> Search </button>
          </form>
        </div>
        <div className='list-container'>
            <div className='city-weather-info'>
              <p className='weather'>{city.weather?.map((w,index) => (<span key={index}>{w?.description}</span>))}</p>
              <div className='city-info'>
                <p>{Math.ceil(city.main?.temp - 273.15)}<sup><sup className='deg'>o</sup></sup></p>
                <hr/>
                <div>
                  <p>{new Date().toUTCString()}</p>
                  <p>{city.name}</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
