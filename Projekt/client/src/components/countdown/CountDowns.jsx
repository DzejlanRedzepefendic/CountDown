import React from "react";
import Search from "../layout/Search";
import "../../styles/Countdown.css";
import TickTimeCD from "./TickTimeCD";

const CountDowns = () => {
  return (
    <div>
      <Search />
      <div className="countdowns">
        <TickTimeCD />
      </div>
    </div>
  );
};

export default CountDowns;
