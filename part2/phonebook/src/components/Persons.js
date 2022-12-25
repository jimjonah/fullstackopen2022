const Persons = ({persons, newFilter}) => {
  return (
      <div>
        { persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
        .map(person => <Note key={person.name} name={person.name} number={person.number}/> ) }
      </div>
  )
}

const Note = ({ name, number }) => {
  // console.log(name)
  return (
      <div>{name} {number}</div>
  )
}
export default Persons
