import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import PropDestructuring from './components/PropDestructuring'
import States from './components/States'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const name: string = "Marco Cruz"
  const isWorking: boolean = false
  const age: number = 36

  function userGreeting(name:string) {
    return `Olá ${name}!`
    
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Contando... {count}</button>
      <p onClick={() => setCount(count - 1)}>{name}</p>
      <p>{age}</p>
      {isWorking ? <p>Está trabalhando</p> : <p>não está trabalhando!</p>}
      {name && <h3>{userGreeting(name)}</h3>}
      <FirstComponent />
      <PropDestructuring name={'Filófio'} isWorking={isWorking} age={age} tags={['Abacate', 'Abacaxi']}/>
      <States />

      
    </div>
  )
}

export default App
