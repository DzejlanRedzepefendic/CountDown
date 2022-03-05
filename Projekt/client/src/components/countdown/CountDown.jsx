import React from "react";
import { makeCountdown } from "../../utils/MakeCountdown";

const CountDown = ({ countdown }) => {
  return countdown.map((value) => {
    return (
      <div
        key={value._id}
        id={value._id}
        className="card"
        style={{
          backgroundImage: `url(${value.url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 id="title-text">{value.title}</h1>
        {makeCountdown(
          value.air_date.year,
          value.air_date.month,
          value.air_date.day,
          value.air_date.hour,
          value.air_date.minutes
        )}
      </div>
    );
  });
};

export default CountDown;
