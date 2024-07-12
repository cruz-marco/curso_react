import React from 'react'
import useCounterContext from '../hooks/useCounterContext'

function Page1() {
    const {counter, setCounter} = useCounterContext()
  return (
    <div>
        <h1>Página de demonstração 1</h1>
        <p>O contador está atualmente em {counter}</p>
        <button onClick={() => setCounter(counter - 1)}>Clique aqui para reduzir.</button>
    </div>
  )
}

export default Page1