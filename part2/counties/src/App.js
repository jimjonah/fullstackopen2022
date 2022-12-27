import './App.css';
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'

import {useEffect, useState} from "react";

function App() {
  const [newFilter, setNewFilter] = useState('')
  const [countries, setCountries] = useState([])

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

      <Countries countries={countries} newFilter={newFilter}/>
    </div>
  );
}

export default App;
