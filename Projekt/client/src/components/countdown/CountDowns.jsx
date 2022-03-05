import React, { useEffect, useState } from "react";
import CountDown from "./CountDown";
import GetDataFromBackend from "../../utils/axios/GetDataFromBackend";
import Search from "../layout/Search";
import { apiPaths } from "../../utils/axios/ApiPaths";
import { httpMethods } from "../../utils/axios/HttpMethods";
import "../../styles/Countdown.css";

const CountDowns = () => {
  const [countDowns, setCountDowns] = useState([]);
  const [totalCD, setTotalCD] = useState(0);

  const fetchAndSetData = async () => {
    const fetch = await GetDataFromBackend(httpMethods.get)(apiPaths.countdown);
    setCountDowns(fetch.data.countdowns);
    setTotalCD(fetch.data.countdowns.length);
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
