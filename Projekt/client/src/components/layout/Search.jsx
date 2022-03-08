import React from 'react'
import '../../styles/Search.css'

const Search = () => {
  return (
    <div>
      <div className='search'>
        <div className='search-container'>
          <input
            type='text'
            name='search'
            placeholder='Search...'
            className='search-input'
          />
          <span className='search-btn'>
            <i className='fas fa-search'></i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Search
