import { useState } from 'react'
import './css/App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const [colorBool, setColorBool] = useState(true)
  const [colorClass, setColorClass] = useState(true)

  return (
    <div>
      <h1>CSS com React</h1>
      <p>Estou escrevendo um novo projetinho no React!</p>
      <MyComponent />

      {/*Inline CSS       
      Deve ser inserido como um OBJETO!!!!*/}
      <p style={{ color: 'white', padding: '25px', backgroundColor: 'black'}}
      >Este parágrafo possui inline CSS.</p>


      {/*Inline Style Dinâmico */}
      <h3 style={colorBool ? { color: 'lightblue'} : {color :'red'}}>
        Este cabeçalho possui Inline CSS dinâmico.
      </h3>
      <button onClick={
        () => (colorBool ? setColorBool(false) : setColorBool(true))
      }>MudaCor</button>


      {/*CSS Classe Dinâmicas
      Funciona parecido com o Inline, mais simples até */}
      <h2 className={
        colorClass ? 'h2_tranquilo' : 'h2_bolado'
      }>Esse cabeçalho tem classe dinâmica.</h2>
      <button onClick={
        () => (colorClass ? setColorClass(false) : setColorClass(true))
      }>MudaClasse</button>


      {/*CSS Module 
      O CSS fica em seu escopo (ativo apenas no seu component
      usando está técnica*/}
      <Title />

    </div>
  )
}

export default App
