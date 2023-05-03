import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

export default App;

function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=>setCountries(data))
  }, [])
  return(
    <>
      <h1>Total Countries: {countries.length}</h1>
      <div className="country-box">
        {
          countries.map(country=><Country
          count={country}></Country>)
        }
      </div>
    </>
  )
}

function Country({count}){
  console.log(count)
  const {flags , capital , name , population} = count;

  return(
    <div className='country'>
      
      <img src={flags.png} alt="" />
      <h3>{name.common}</h3>
      <h4>Capital: {capital}</h4>
      <h5>Population: {population}</h5>
    </div>
  )
}