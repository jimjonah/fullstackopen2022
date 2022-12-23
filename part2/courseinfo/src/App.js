
const App = () => {
  // const-definitions
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
      <div>
        <Course course={course} />
      </div>
  )
}

const Course = ({course}) => {
  return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts}/>
      </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
      <div>
        <h1>{props.course}</h1>
      </div>
  )
}

const Content = ({parts}) => {
  return (
      <div>
        {parts.map(part =>
            <Part key={part.id} part={part.name} exercises={part.exercises}/>
        )}

      </div>
  )
}

const Total = ({parts}) => {
  const totalNum = parts.reduce((sum, parts) => sum + parts.exercises, 0)
  return (
      <div>
      <p><b>total of exercises {totalNum}</b></p>
      </div>
  )
}

const Part = (props) => {
  return (
  <div>
    <p>
      {props.part} {props.exercises}
    </p>
  </div>
  )
}

export default App
