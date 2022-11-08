import React, { useState } from 'react'
import "../App.css"
export const Header = () => {
  let [input, setInput] = useState()
  let handleInputChange = (event) => {
    setInput(event.target.value)
  }


  

  return (
    <div className='header'>
        <h1>Weather App</h1>
        <form className='search-form'>
          <input type="search" className='search-bar' placeholder={`Search City...`} onChange={handleInputChange} value={input} />
          <button className='search-btn'> Search </button>
        </form>
    </div>
  )
}
