const Note = ({ name, number, handleDeletePerson }) => {
  // const handleDeletePerson = (event) => {
  //   // console.log(event.target.value)
  //   const result = persons.find(person => person.name === name)
  //
  //   // console.log('found ', result)
  //   if(result){
  //     // console.log(`${result.name} is about to be delete`)
  //
  //     if(window.confirm(`Delete ${event.target.value}?`)){
  //       // console.log('do delete')
  //       personsService.deletePerson(result.id)
  //       .then(setPersons(persons.filter(item => item.name != result.name)))
  //     }
  //   }
  // }
  // console.log(name)
  return (
      <div>{name} {number} &nbsp;
        <button onClick={handleDeletePerson}
                value={name}>delete</button>
      </div>
  )
}

export default Note
