import { useContext, useState } from 'react'
import FirstComponent from './components/FirstComponent'
import PropDestructuring, { Category } from './components/PropDestructuring'
import States from './components/States'
import { MainContext, Contexto } from './contexts/MainContext'
import './App.css'



function App() {
  //criando Types
  type numero = number | null
  
  const [count, setCount] = useState<numero>(0)

  const name: string = "Marco Cruz"
  const isWorking: boolean = false
  const age: number = 36

  function userGreeting(name:string) {
    return `Olá ${name}!`    
  }

  const context = useContext(Contexto)
  

  return (
    <div>
      <button onClick={() => setCount(count === null ? 0 : count + 1)}>Contando... {count}</button>
      <p onClick={() => setCount(count === null ? 0 : count - 1)}>{name}</p>
      <p>{age}</p>
      {isWorking ? <p>Está trabalhando</p> : <p>não está trabalhando!</p>}
      {name && <h3>{userGreeting(name)}</h3>}
      <FirstComponent />
      <PropDestructuring name={'Filófio'} isWorking={isWorking} age={age} tags={['Abacate', 'Abacaxi']} category={Category.TS}/>
      <States /> 
      {context && (
        <>
          <span>Lingugem: {context.language} </span>
          <span>Framework: {context.framework} </span>
          <span>Projetos: {context.projects} </span>
        </>
      )}    
    </div>
  )
}

export default App
