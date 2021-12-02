import React, { useState } from 'react'
import '../styles/404.css'
const NoMatchPage = () => {
  return (
    <>
      <h1>404</h1>
      <div class='cloak__wrapper'>
        <div class='cloak__container'>
          <div class='cloak'></div>
        </div>
      </div>
      <div class='info'>
        <h2>We can't find that page</h2>
        <p>
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on it's behalf.
        </p>
        <a href='#' target='_blank' rel='noreferrer noopener'>
          Home
        </a>
      </div>
    </>
  )
}

export default NoMatchPage
