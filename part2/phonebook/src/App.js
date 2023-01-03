import {useState, useEffect} from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'
import axios from 'axios'
import './index.css'

import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)


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
    // console.log('button clicked', event.target)

    const personObject = {
      name: newName,
      number: newNumber,
    }

    const result = persons.find(person => person.name === newName)

    if (result) {
      if (window.confirm(
          `${result.name} is already added to phonebook, replace the old number with a new one?`)) {
        personsService
        .updatePerson(personObject, result.id)
        .then(personObject => {
          // console.log(persons.filter(item => item.name != result.name).concat(personObject))
          setPersons(persons.filter(item => item.name != personObject.name).concat(personObject))
          setNewNumber('')
          setNewName('')
          setErrorMessage(
              `Updated ${personObject.name}`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
      }
    } else {
      personsService
      .create(personObject)
      .then(personObject => {
        setPersons(persons.concat(personObject))
        setNewNumber('')
        setNewName('')
        setErrorMessage(
            `Added ${personObject.name}`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    }
  }

  useEffect(() => {
    personsService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
      // console.log(initialPersons)
    })
  }, [])

  const handleDeletePerson = (event) => {
    // console.log(event.target.value)
    const name = event.target.value
    const result = persons.find(person => person.name === name)

    if (result) {
      // console.log(`${result.name} is about to be delete`)

      if (window.confirm(`Delete ${event.target.value}?`)) {
        // console.log('do delete')
        personsService.deletePerson(result.id)
        .then(setPersons(persons.filter(item => item.name != result.name)))
      }
    }
  }

  return (
      <div>
        <h1>Phonebook</h1>
        <Notification message={errorMessage} />
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>

        <h3>Add a new</h3>
        <PersonForm addPerson={addPerson} newName={newName}
                    handleNameChange={handleNameChange}
                    newNumber={newNumber}
                    handleNumberChange={handleNumberChange}/>

        <h3>Numbers</h3>
        <Persons persons={persons} newFilter={newFilter} setPersons={setPersons}
                 handleDeletePerson={handleDeletePerson}/>
      </div>
  )
}

export default App
