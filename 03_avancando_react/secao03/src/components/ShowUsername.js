import React from 'react'

function ShowUsername(props) {
  return (
    <div>
        <h1>O nome do usuário é: {props.nome}</h1>
    </div>
  )
}

export default ShowUsername