import { createContext, useReducer } from 'react'


export type IAppContext = {
    language: string,
    framework: string,
    projects: number
  }

      
export const Contexto = createContext<IAppContext | null>(null)

const changeVals = () => {
    return 0
}

export function MainContext({ children }: any) {
    const valores: IAppContext = { language: 'JavaScript', framework: 'Express', projects: 5 }
   // const [contVals, dispatch] = useReducer<IAppContext>(changeVals, valores)
  return (
    <Contexto.Provider value={valores}>
        {children}
    </Contexto.Provider>
  )
}

