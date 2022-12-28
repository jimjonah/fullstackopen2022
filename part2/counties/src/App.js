import './App.css';
import Filter from './components/Filter'
// import Countries from './components/Countries'
import axios from 'axios'
import {useEffect, useState} from "react";

function App() {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const hook = () => {
    console.log('effect')
    axios
    .get('https://restcountries.com/v2/all')
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
  }

  console.log('render', countries.length, 'countries')
  useEffect(hook, [])

  return (
      <div className="App">
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>

        <Countries countries={countries} newFilter={newFilter}
                   handleFilterChange={handleFilterChange}
        />

      </div>
  );
}

const Countries = ({countries, newFilter, handleFilterChange}) => {

  const result = countries.filter(
      country => country.name.toLowerCase().includes(
          newFilter.toLowerCase())).length

  console.log(result < 10);
  if (result > 10) {
    return (
        <div>
          <Note name={"Too many matches, specify another filter"}/>
        </div>
    )
  } else if (result < 10 && result > 1) {
    return (
        <div>
          {
            countries.filter(
                country => country.name.toString().toLowerCase().includes(
                    newFilter.toLowerCase()))
            .map(country => <NoteButton key={country.name} name={country.name}
                                        handleFilterChange={handleFilterChange}/>)
          }
        </div>
    )
  } else if (result === 1) {
    return (
        <div>
          {
            countries.filter(
                country => country.name.toString().toLowerCase().includes(
                    newFilter.toLowerCase()))
            .map(country => <Country key={country.name} country={country}/>)
          }
        </div>
    )
  } else {
    return (
        <div>
          <Note name={"Nothing found"}/>
        </div>
    )
  }
}

const NoteButton = ({name, handleFilterChange}) => {
  // console.log(name)
  return (
      <div>{name}
        <button onClick={handleFilterChange} value={name}>show</button>
      </div>
  )
}
const Note = ({name}) => {
  // console.log(name)
  return (
      <div>{name} </div>
  )
}

const Language = ({name}) => {
  return (
      <li>{name}</li>
  )
}

const Weather = ({country}) => {
  const [newWeather, setNewWeather] = useState('')

  const api_key = process.env.REACT_APP_API_KEY
  console.log(api_key)
  console.log(country)

  //https://api.openweathermap.org/data/2.5/weather?lat=16&lon=-10&appid=c5a3e379ea236e91968a9f405beb4eb2
  const weatherHook = () => {
    const urlToGet = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${api_key}`
    console.log(urlToGet)
    console.log('weatherHook')
    axios
    .get(urlToGet)
    .then(response => {
      console.log('weather found')
      setNewWeather(response.data)
    })
  }

  console.log('render', newWeather, 'weather')
  useEffect(weatherHook, [country, api_key])

  if ( newWeather !== '') {
    console.log(`http://openweathermap.org/img/w/${newWeather.weather[0].icon}.png`)
    return (
        <div><h2>Weather in {country.name}</h2>
          <p>temperature {newWeather.main.temp} Celcius</p>

          <img src={`http://openweathermap.org/img/w/${newWeather.weather[0].icon}.png`}
               alt={`http://openweathermap.org/img/w/${newWeather.weather[0].icon}.png`}
                width={80}/>

          <p>wind {newWeather.wind.speed} m/s</p>
        </div>
    )
  } else {
    return (
        <div><h2>Weather in {country.name}</h2>
        </div>
    )
  }
}

const Country = ({country}) => {
  // console.log(name)
  return (
      <div>
        <h2>{country.name}</h2>
        <p>capital {country.capital}<br/>
          area {country.area}</p>
        <h3>languages:</h3>
        <ul>
          {country.languages.map(language =>
              <Language key={language.name} name={language.name}/>
          )}
        </ul>

        <img src={country.flag} alt={country.flag} width={120}/>

        <Weather country={country}/>
      </div>
  )
}

export default App;
