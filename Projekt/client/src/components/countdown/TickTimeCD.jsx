import React, { useEffect, useState, useCallback } from "react";
import CountDown from "./CountDown";
import { fetchData } from "../../dataMenagment/axios/ApiMethod";
import { backendPaths } from "../../dataMenagment/appPaths/BackendPaths";

const TickTimeCD = () => {
    const [countDowns, setCountDowns] = useState([]);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const fetchAndSetData = () => {
        fetchData.GetMethod(backendPaths.countdown).then(({ data }) => {
            setCountDowns(data.countdowns);
        });
    };

    useEffect(() => {
        fetchAndSetData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            forceUpdate()
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    return <>{countDowns && <CountDown countdown={countDowns} />}</>
}

export default TickTimeCD