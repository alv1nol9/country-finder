
import React from 'react';

const CountryDisplay = ({ country }) => {
  if (!country) return <p>No country selected.</p>; // No country found case

  return (
    <div className="country-display">
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      <p><strong>Official Name:</strong> {country.name.official}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Area:</strong> {country.area} km²</p>
    </div>
  );
};

export default CountryDisplay;

