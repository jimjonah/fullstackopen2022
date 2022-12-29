import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'

import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    // console.log(event.target.value)
    setNewFilter(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    if(persons.find(person => person.name === newName)){
      console.log(`${newName} is already added to phonebook`)
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }

      personsService
      .create(personObject)
      .then(personObject => {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      })
    }
  }
  
  useEffect(() => {
    personsService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])


  return (
      <div>
        <h2>Phonebook</h2>
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>

        <h3>Add a new</h3>
        <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
                    newNumber={newNumber} handleNumberChange={handleNumberChange}/>

        <h3>Numbers</h3>
        <Persons persons={persons} newFilter={newFilter}/>
      </div>
  )
}

export default App
