import React from 'react'

type Props = {
    name: string,
    age: number,
    isWorking: boolean
    tags: string[]
}

function PropDestructuring({name, age, isWorking, tags}: Props) {
  return (
    <div>
        <h4>O nome do {name} está vindo do componente principal.</h4>
    </div>
  )
}

export default PropDestructuring