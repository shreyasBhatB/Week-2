import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <>
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div class="weather-app">
        <div class="location">
            <h1>Weather in <span id="city">City</span></h1>
        </div>
        <div class="weather">
            <div class="temperature">
                <img src="—Pngtree—weather icon_4468240.png" alt="Weather Icon" />
                <p id="temperature">25°C</p>
            </div>
            <div class="description">
                <p id="weather-description">Sunny</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home


