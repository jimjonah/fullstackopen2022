import Note from './Note'


const Persons = ({persons, newFilter, setPersons, handleDeletePerson}) => {
  return (
      <div>
        { persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
        .map(person =>
          <Note key={person.name} name={person.name} number={person.number} handleDeletePerson={handleDeletePerson} />
           ) }
      </div>
  )
}






export default Persons
