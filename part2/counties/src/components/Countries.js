const Countries = ({countries, newFilter}) => {
  const result = countries.filter(
      country => country.name.toLowerCase().includes(
          newFilter.toLowerCase())).length

  console.log(result  < 10);
  if (result  > 10) {
    return (
        <div>
          <Note name={"Too many matches, specify another filter"}/>
        </div>
    )
  } else if ( result < 10 && result > 1) {
    return (
    <div>
      {
        countries.filter(
            country => country.name.toString().toLowerCase().includes(
                newFilter.toLowerCase()))
        .map(country => <Note key={country.name} name={country.name}/>)
      }
    </div>
    )
} else if ( result == 1) {
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

const Note = ({name}) => {
  // console.log(name)
  return (
      <div>{name} </div>
  )
}

const Language = ({ name }) => {
  return (
      <li>{name}</li>
  )
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
              <Language key={language.name} name={language.name} />
          )}
        </ul>

        <img src={country.flag} alt={country.flag} width={120}/>
      </div>
  )
}
export default Countries
