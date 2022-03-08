import React, { useEffect, useState } from "react";
import CountDown from "./CountDown";
import { fetchData } from "../../dataMenagment/axios/ApiMethod";
import { backendPaths } from "../../dataMenagment/appPaths/BackendPaths";
import useForceTimeUpdate from '../../custom-hooks/useForceTimeUpdate'

const TickTimeCD = () => {
    const [countDowns, setCountDowns] = useState([]);
    const forceUpdate = useForceTimeUpdate()

    const fetchAndSetData = () => {
        fetchData.get(backendPaths.countdown).then(({ data }) => {
            setCountDowns(data.countdowns);
        });
    };

    useEffect(() => {
        fetchAndSetData()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            forceUpdate()
        }, 1000);
        return () => clearInterval(interval);
    }, [forceUpdate])

    return <>{countDowns && <CountDown countdown={countDowns} />}</>
}

export default TickTimeCD