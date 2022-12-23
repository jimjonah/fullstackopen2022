import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(7).fill(0));

  // Generate a number between 0 and max
  const generateRandomInteger = max => {
    return Math.floor(Math.random() * max) + 1;
  }

  const vote = position => {
    // const points = [1, 4, 6, 3]

    const copy = [...points]
  // increment the value in position 2 by one
    copy[position] += 1

    setPoints(copy)
  }

  return (
      <div>
        <h4>{anecdotes[selected]}</h4>
        <h4>has {points[selected]} votes</h4>

        <Button handleClick={() => vote(selected)}  text={"vote"}/>

        <Button handleClick={() => setSelected(generateRandomInteger(6))}  text={"next anecdote"}/>
      </div>
)
}

export default App
