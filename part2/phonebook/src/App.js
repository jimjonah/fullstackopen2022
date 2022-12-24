import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  let indx = 0
  return (
      <div>
        <h2>Phonebook</h2>
        {/*<div>debug: {newName}</div>*/}

        <form onSubmit={addPerson}>
          <div>
            name:  <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>

        <h2>Numbers</h2>
        <div>
          {
            persons.map(person =>
              <Note key={person.name} name={person.name} />
          )}
        </div>
      </div>
  )
}

const Note = ({ name }) => {
  // console.log(name)
  return (
      <div>{name}</div>
  )
}



export default App
