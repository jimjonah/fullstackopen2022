import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
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

      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }

  }

  let indx = 0
  return (
      <div>
        <h2>Phonebook</h2>
        {/*<div>debug: {newName}</div>*/}

        <form onSubmit={addPerson}>
          <div>name:  <input value={newName} onChange={handleNameChange}/></div>
          <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>

        <h2>Numbers</h2>
        <div>
          {
            persons.map(person =>
              <Note key={person.name} name={person.name} number={person.number}/>
          )}
        </div>
      </div>
  )
}

const Note = ({ name, number }) => {
  // console.log(name)
  return (
      <div>{name} {number}</div>
  )
}



export default App
