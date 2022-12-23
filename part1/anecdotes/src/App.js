import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const Display = props => <h3>{props.value}</h3>
const Answer = props => <div>{props.value}</div>


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
    return Math.floor(Math.random() * max) + 0;
  }

  const vote = position => {
    const copy = [...points]
    copy[position] += 1
    setPoints(copy)
  }

  const highestVote = () => {
    const copy =  [...points]
    copy.sort((a, b) => a - b)
    return points.indexOf(copy[6])
  }

  return (
      <div>
        <Display value={"Anecode of the day"}/>
        <Answer value={anecdotes[selected]}/>
        <Answer value={"has "+ points[selected] + " votes"}/>

        <Button handleClick={() => vote(selected)}  text={"vote"}/>
        <Button handleClick={() => setSelected(generateRandomInteger(7))}  text={"next anecdote"}/>

        <Display value={"Anecode with most votes"}/>
        <Answer value={ anecdotes[highestVote()]}/>
        <Answer value={"has "+ points[highestVote()] + " votes"}/>
        {/*<Answer value={points.join(' ') + ":" + highestVote()}/>*/}
      </div>
)
}

export default App
