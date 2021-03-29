import React from 'react'

const Country = ({allCountries,handleSelectedCounter,country}) => {
    if(allCountries)
    return <select value={country} className="country" onChange={handleSelectedCounter}>
             <option value="">Global</option>
              {allCountries.map((country)=> <option key={country.name} value={country.name}>{country.name}</option>)}
            </select>
else
return "Loading..."  
}

export default Country
