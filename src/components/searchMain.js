import React from 'react'
import '../components/styles.css'

function searchMain() {
  return (
    <div className="wrap">
      <div className="search">
        <input
          className="input"
          type="search"
          placeholder="Enter city name.."
          id="search"
        />
      </div>
      <button className="searchButton">search city</button>
    </div>
  )
}

export default searchMain
