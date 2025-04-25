
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CountryDisplay from "./CountryDisplay";

export default function CountryFetcher() {
  const [countryData, setCountryData] = useState(null);
  const apiUrl = "https://restcountries.com/v3.1/all";

  const fetchCountryData = (countryName) => {
    if (!countryName) {
      alert("Please enter a country!");
      return;
    }

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const match = data.find(
      (country) => country.name.common.toLowerCase() === countryName.toLowerCase()
    );

    if (match) {
      setCountryData(match);
    } else {
      alert("Country not found!");
      setCountryData(null);
    }
  })
  .catch((error) => {
    console.error(error);
    alert("Something went wrong!");
  });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Country Info Finder</h1>
      <SearchBar onSearch={fetchCountryData} />
      <CountryDisplay country={countryData} />
    </div>
  );
}

