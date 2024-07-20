import React from 'react'

type Props = {
    name: string,
    age: number,
    isWorking: boolean,
    tags: string[],
    category : Category
}

export enum Category {
  JS = 'JavaScript',
  TS = 'TypeScript',
  P = 'Python'
}

function PropDestructuring({name, age, isWorking, tags, category}: Props) {
  return (
    <div>
        <h4>O nome do {name} está vindo do componente principal.</h4>
        {category && <p>{category}</p>}
    </div>
  )
}

export default PropDestructuring