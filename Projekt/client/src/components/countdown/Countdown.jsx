import React, { useEffect, useState } from 'react'
import GetDataFromBackend from "../../utils/axios/GetDataFromBackend";
import { makeCountdown } from '../../utils/MakeCountdown'
import Search from '../layout/Search'
import { apiPaths } from '../../utils/axios/ApiPaths'
import { httpMethods } from '../../utils/axios/HttpMethods';
import '../../styles/Countdown.css'

const Countdown = () => {
  const [countDowns, setCountDowns] = useState([])
  const [totalCD, setTotalCD] = useState(0)

  const fetchAndSetData =  async () => {
    const fetch = await GetDataFromBackend(httpMethods.get)(apiPaths.countdown)
    setCountDowns(fetch.data.countdowns)
    setTotalCD(fetch.data.countdowns.length)
  }

  useEffect(() => {
    fetchAndSetData()
  }, [])
  
  return (
    <div>
      <Search />
      {!totalCD ? '' : <h1>Total countdowns in database:{totalCD}</h1>}
      <div className='countdowns'>
        {!countDowns ? (
          <h1>No data</h1>
        ) : (
          countDowns.map((value, index) => {
            return (
              <div
                key={value._id}
                id={value._id}
                className='card'
                style={{
                  backgroundImage: `url(${value.url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <h1 id='title-text'>{value.title}</h1>
                {makeCountdown(
                  value.air_date.year,
                  value.air_date.month,
                  value.air_date.day,
                  value.air_date.hour,
                  value.air_date.minutes
                )}
              </div>
            )
          })
        )}
      </div>
    </div>

      
  )
}

export default Countdown