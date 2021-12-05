import React from "react";

function WeatherDetails() {
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi wi-day-sunny"></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>23.99&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">sunny</div>
            <div className="place">
                Berlin, DE
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default WeatherDetails;
