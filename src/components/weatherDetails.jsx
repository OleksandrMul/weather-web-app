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
            <div className="place">Berlin, DE</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"} />
              </p>
              <p className="extra-info-leftside">
                4:30 PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"} />
              </p>
              <p className="extra-info-leftside">
                50%
                <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"} />
              </p>
              <p className="extra-info-leftside">
                67%
                <br />
                Rain
              </p>
            </div>
            
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"} />
              </p>
              <p className="extra-info-leftside">
                22 m/s
                <br />
                Wind
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default WeatherDetails;
