
import React from "react";

export default function CountryDisplay({ country }) {
  if (!country) return null;

  return (
    <div className="mt-4 border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="w-32 h-auto mb-2"
      />
      <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
      <p><strong>Region:</strong> {country.region || "N/A"}</p>
      <p><strong>Subregion:</strong> {country.subregion || "N/A"}</p>
      <p><strong>Borders:</strong> {country.borders ? country.borders.join(", ") : "None"}</p>
    </div>
  );
}