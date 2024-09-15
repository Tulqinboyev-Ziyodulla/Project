import React, { useState } from 'react';
import './search.css'

const CountryFilter = () => {
  const allCountries = [
    {
      id: 1,
      name: "Wallis and Futuna",
      capital: "Mata-Utu",
      population: 11750,
      flag: "https://flagcdn.com/wf.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 2,
      name: "Iceland",
      capital: "Reykjavik",
      population: 366425,
      flag: "https://flagcdn.com/is.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 3,
      name: "Luxembourg",
      capital: "Luxembourg",
      population: 632275,
      flag: "https://flagcdn.com/lu.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 4,
      name: "Mali",
      capital: "Bamako",
      population: 20250834,
      flag: "https://flagcdn.com/ml.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 5,
      name: "Comoros",
      capital: "Moroni",
      population: 869595,
      flag: "https://flagcdn.com/km.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 6,
      name: "Australia",
      capital: "Canberra",
      population: 25687041,
      flag: "https://flagcdn.com/au.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 7,
      name: "Estonia",
      capital: "Tallinn",
      population: 1331057,
      flag: "https://flagcdn.com/ee.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 8,
      name: "Canada",
      capital: "Ottawa",
      population: 38005238,
      flag: "https://flagcdn.com/ca.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 9,
      name: "Belarus",
      capital: "Minsk",
      population: 9398861,
      flag: "https://flagcdn.com/by.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 10,
      name: "Guyana",
      capital: "Georgetown",
      population: 786559,
      flag: "https://flagcdn.com/gy.svg",
      isLiked: false,
      isBasket: false
    }
  ]

  const [searchTerm, setSearchTerm] = useState(allCountries);
  
  function handleSearch(e) {
    const searchValue = allCountries.filter(item => item.name.toLocaleLowerCase().includes(e.target.value))
    setSearchTerm(searchValue)
  }

  function handleChangeSelect(e) {
    console.log(e.target.value);
  }

  function handleChangeSelect(e) {
    const selectedCountry = allCountries.filter(item => item.id == e.target.value)
    console.log(selectedCountry);
    
  }

  // const [region, setRegion] = useState('');

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleRegionChange = (e) => {
  //   setRegion(e.target.value);
  // };

  return (
    <div className='container'>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div>
      <input className='see' type="text" placeholder="Search for a country..." />    
      </div>
      
      <select className='off' onChange={handleChangeSelect}>
        <option value="All">Filter by Region</option>
        {allCountries.map(item => <option >{item.capital}</option>)}
        <option value="Africa">Wallis and Futuna
        </option>
        <option value="Americas">Iceland</option>
        <option value="Asia">Luxembourg</option>
        <option value="Europe">Mali</option>
        <option value="Oceania">Comoros</option>
        <option value="Oceania">Australia</option>
        <option value="Oceania">Estonia</option>
        <option value="Oceania">Canada</option>
        <option value="Oceania">Belarus</option>
        <option value="Oceania">Guyana</option>
      </select>
    </div>
    </div>
    
  );
};

export default CountryFilter;
