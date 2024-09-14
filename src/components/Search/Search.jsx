import React, { useState } from 'react';
import './search.css'

const CountryFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <div className='container'>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div>
      <input className='see' type="text" placeholder="Search for a country..." value={searchTerm} onChange={handleSearch} 
      />    
      </div>
      
      <select className='off' value={region} onChange={handleRegionChange}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
    </div>
  );
};

export default CountryFilter;
