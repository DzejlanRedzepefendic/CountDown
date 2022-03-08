import React from "react";
import { makeCountdown } from "../../utils/MakeCountdown";

const CountDown = ({ countdown }) => {

  return countdown.map((value) => {
    return (
      <div className="card-wrap" key={value._id} id={value._id}>
        <div>
          <h1 className="title-text" style={{ paddingTop: '15%' }} >{value.title}</h1>
          <div
            className="card"
            style={{
              backgroundImage: `url(${value.url})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
          </div>
          <span style={{ color: 'black', letterSpacing: '2px', fontSize: '23px' }}>
            {makeCountdown(value.air_date.year, value.air_date.month, value.air_date.day, value.air_date.hour, value.air_date.minutes)}
          </span>
        </div>
      </div>
    );
  });
};

export default CountDown;
