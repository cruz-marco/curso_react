import React, { createContext, useState } from 'react'

export const CounterContext = createContext()

//provider
export function CounterContextProvider({ children }) {
    const [counter, setCounter] = useState(0);
  return (
        <CounterContext.Provider value={{counter, setCounter}}>
            { children }
        </CounterContext.Provider>
  )
}

