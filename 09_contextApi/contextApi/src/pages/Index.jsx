import React from 'react'
import useCounterContext from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'


function Index() {
  function setColorTitle(color){
    dispatch({type: color})
  }

  const {color, dispatch} = useTitleColorContext()
  const {counter, setCounter} = useCounterContext()
  return (
    <div>
        <h1 style={{ color: color }}>Página Inicial</h1>
        <button onClick={() => (setCounter(counter + 1))}>O valor do contador é: {counter}</button><br /><br />
        <button onClick={() => setColorTitle("RED")}>Título Vermelho</button>
        <button onClick={() => setColorTitle("BLUE")}>Título Azul</button>
    </div>
  )
}

export default Index