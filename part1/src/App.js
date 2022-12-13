const Header = (props) => {
  return(
    <
// @ts-ignore
    div>
    <
// @ts-ignore
    p>
      Hi!! This courses name is called {props.course}! Welcome!
    </p>
  </div>
  )
}
const Content = (props) => {
  return(
    <
// @ts-ignore
    div>
    <
// @ts-ignore
    p>
      This Module contains 3 different parts. The parts and their number of exercises are as followes: <
// @ts-ignore
      br></br>
      Part 1 is named {props.part1} and contains {props.exercises1} number of exercises <
// @ts-ignore
      br></br>
      Part 2 is named {props.part2} and contains {props.exercises2} number of exercises <
// @ts-ignore
      br></br>
      Part 3 is named {props.part3} and contains {props.exercises3} number of exercises
    </p>
  </div>
  )
}

const Total = (props) => {
  return(
    <
// @ts-ignore
    div>
    <
// @ts-ignore
    p>
      In total, this section contains {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <
// @ts-ignore
    div>
      <
// @ts-ignore
      Header course={course} />
      <
// @ts-ignore
      Content part1={part1} exercises1= {exercises1} part2 = {part2} exercises2= {exercises2} part3= {part3} exercises3={exercises3}/>
      <
// @ts-ignore
      Total exercises1 = {exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App