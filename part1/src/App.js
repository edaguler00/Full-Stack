const Header = (props) => {
  return(
    <div>
    <p>
      Hi!! This courses name is called {props.course}! Welcome!
    </p>
  </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
        This Module contains 3 different parts. The parts and their number of exercises are as followes: <br></br>
        Part 1 is named {props.part1} and contains {props.exercises1} number of exercises <br></br>
        Part 2 is named {props.part2} and contains {props.exercises2} number of exercises <br></br>
        Part 3 is named {props.part3} and contains {props.exercises3} number of exercises
      </p>
    </div>
  )
}
const Content = () => {
  const part1 ="Fundamentals of React"
  const part2 = "Using props to pass data"
  const part3 = "State of a component"
  return (
    <div>
      <Part part1={part1}/>
      <Part part2= {part2}/>
      <Part part3= {part3}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
    <p>
      In total, this section contains {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      <Part exercises1={exercises1} exercises2={exercises2} exercises3= {exercises3}/>
      <Total exercises1 = {exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App