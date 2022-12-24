const Course = ({courses}) => {
  // courses.forEach((course) => {
  //   console.log(course.id, course.name)
  // })

  return (
      <>
        {courses.map((course, idx) => (
            <div key={idx}>
              <Header header={course.name}  />
              <Content parts={course.parts} />
              <Total parts={course.parts}   />
            </div>
        ))}
      </>
  )
}

const Header = ({header}) => {
  // console.log("header:", header)
  return (
      <div>
        <h1>{header}</h1>
      </div>
  )
}

const Content = (props) => {
  return (
      <div>
        {props.parts.map(part =>
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

export default Course
