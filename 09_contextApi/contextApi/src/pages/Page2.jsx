import React from 'react'
import useCounterContext from '../hooks/useCounterContext'

function Page2() {
    const {counter, setCounter } = useCounterContext()
  return (
    <div>
        <h1>Página de exemplo 2!</h1>
        <button onClick={() => setCounter(counter * 2)}>Dobre o contador aqui! {counter}</button>
    </div>
  )
}

export default Page2