import './App.css';
import React,{useState,useEffect} from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import Country from './components/Country'
import Chart from './components/Chart'


function App() {
const [allCountries,setAllcountries]=useState()
const [country,setCountry]=useState()
const [infected,setInfected]=useState()
const [recovered,setRecovered] =useState()
const [deaths,setDeaths]=useState()
const [lastUpdated,setLastUpdated]=useState()
const [isloading,setIsloading]=useState(true)
useEffect(()=>{
  async function fetchApi(country){
    try{
    setIsloading(true)
    if(country){
      const response= await fetch(`https://covid19.mathdro.id/api/countries/${country}`)
      const data = await response.json()
      console.log(data)
      setInfected(data.confirmed.value)
      setRecovered(data.recovered.value)
      setDeaths(data.deaths.value)
      setLastUpdated(data.lastUpdate)
      setIsloading(false)
    }
    else{
    fetchApiCountry()
    const response= await fetch("https://covid19.mathdro.id/api")
    const data = await response.json()
    if(response.status!==200)
    throw new Error()
    setInfected(data.confirmed.value)
    setRecovered(data.recovered.value)
    setDeaths(data.deaths.value)
    setLastUpdated(data.lastUpdate)
    setIsloading(false)
  }
}
catch{
alert("Some thing went wrong...")
}
  }

  async function fetchApiCountry(){
    try{
    const response= await fetch("https://covid19.mathdro.id/api/countries")
    const data = await response.json()
    setAllcountries(data.countries)
    }
    catch{
      alert("Some thing went wrong...")
    }
    
  }
 fetchApi(country)

},[country])

function handleSelectedCounter(e){
  setCountry(e.target.value)
}
  return<>
  <Header/>
  <Country country={country} allCountries={allCountries} handleSelectedCounter={handleSelectedCounter}/>
  <Cards lastUpdated={lastUpdated} isloading={isloading} infected={infected} recovered={recovered} deaths={deaths} />
  <Chart isloading={isloading} infected={infected} recovered={recovered} deaths={deaths} />

</>
  
}

export default App;
