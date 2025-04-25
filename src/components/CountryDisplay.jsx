import React from 'react'
import {useState,useEffect} from 'react'
const CountryDisplay = () => {
  const[countries,setCountries]=useState([])
useEffect(()=>{
fetch("https://restcountries.com/v3.1/all")
.then(res =>res.json())
.then(data =>setCountries(data))
},[])
let newCountries=countries.map(country=>{
  return(
    <div className='country-display' key={country.id}>
 <h1>{country.name.common}</h1>
 <p><strong>Official Name:</strong>{country.name.official}</p>
 <p><strong>Flag:</strong> {country.flag}</p>
 <p><strong>Region:</strong>{country.region}</p>
 <p><strong>Capital:</strong>{country.capital}</p>
 <p><strong>Area: </strong> {country.area}</p>
<p><strong>Population:</strong> {country.population}</p>

    </div>
  )
})
return(
    <div>{newCountries}</div>
)

}
export default CountryDisplay

