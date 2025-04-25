// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [countryName, setCountryName] = useState('');

  const handleSearch = () => {
    onSearch(countryName);
    setCountryName('');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        placeholder="Enter country name"
        className="input"
      />
      <button onClick={handleSearch} className="search-btn">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
