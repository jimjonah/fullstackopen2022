import { useState } from 'react'

const Display = props => <div><h1>{props.value}</h1></div>

const Results = props => <div>{props.value} {props.count}</div>


const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
      <div>
        <Display value={"give feedback"} />

        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />


        <Display value={"statistics"} />
        <Results value={"good"} count={good}/>
        <Results value={"neutral"} count={neutral}/>
        <Results value={"bad"} count={bad}/>

      </div>
  )
}

export default App
