import React from 'react'
import './country.css';

const Country = ({ item }) => {
  return (
    <div className='all'>
      <img src={item.flag} alt={`${item.name} flag`} width={"350px"} />
      <div className='text'>
      <h2>{item.name}</h2>
      <p>Population: {item.population}</p>
      <p>Capital: {item.capital}</p>
      </div>
    </div>
  )
}

export default Country
