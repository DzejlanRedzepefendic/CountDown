import React, { useEffect, useState } from "react";
import CountDown from "./CountDown";
import Search from "../layout/Search";
import { fetchData } from "../../dataMenagment/axios/ApiMethod";
import { backendPaths } from "../../dataMenagment/appPaths/BackendPaths";
import "../../styles/Countdown.css";

const CountDowns = () => {
  const [countDowns, setCountDowns] = useState([]);
  const [totalCD, setTotalCD] = useState(0);

  const fetchAndSetData = () => {
    fetchData.GetMethod(backendPaths.countdown).then((data) => {
      setCountDowns(data.data.countdowns);
      setTotalCD(data.data.countdowns.length);
    });
  };

  useEffect(() => {
    fetchAndSetData();
  }, []);

  return (
    <div>
      <Search />
      {totalCD && <h1>Total countdowns in database:{totalCD}</h1>}
      <div className="countdowns">
        {countDowns && <CountDown countdown={countDowns} />}
      </div>
    </div>
  );
};

export default CountDowns;
