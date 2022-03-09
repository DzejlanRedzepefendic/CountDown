import React from "react";
import { makeCountdown } from "../../utils/MakeCountdown";

const CountDown = ({ countdown }) => {

  return countdown.map((value) => {
    const { year, month, day, hour, minutes } = value.air_date;
    return (
      <div className="card-wrap" key={value._id} id={value._id}>
        <div
          className="card"
          style={{
            backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.4)
            ),url(${value.url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h1 className="title-text" style={{ paddingTop: '15%', color: 'white' }} >{value.title}</h1>
          <div id="time-wrap" style={{ textAlign: 'center' }}>
            <div>
              <span className="countdown-time">{makeCountdown(year, month, day, hour, minutes).days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div>
              <span className="countdown-time">{makeCountdown(year, month, day, hour, minutes).hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div>
              <span className="countdown-time">{makeCountdown(year, month, day, hour, minutes).minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div>
              <span className="countdown-time">{makeCountdown(year, month, day, hour, minutes).seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default CountDown;
