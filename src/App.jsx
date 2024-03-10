import './App.css'
import Team from './Team'
import Counter from './Conter'
import Users from './User'
import Friends from './Friends'

function App() {

  function handleClick() {
    alert('button clicked')
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h1>React Core Concepts</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert('third clicked')}}>third</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
