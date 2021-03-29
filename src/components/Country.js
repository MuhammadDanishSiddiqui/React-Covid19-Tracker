import React from 'react'

const Country = ({allCountries,handleSelectedCounter}) => {
    if(allCountries)
    return <select className="country" onClick={handleSelectedCounter}>
             <option value="">Global</option>
              {allCountries.map((country)=> <option key={country.name} value={country.name}>{country.name}</option>)}
            </select>
else
return "Loading..."
    
    
}

export default Country
