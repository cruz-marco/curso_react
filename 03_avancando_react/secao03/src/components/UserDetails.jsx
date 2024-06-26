import React from 'react'

function UserDetails({nome, idade, profissao}) {
    
  return (
    <div>
        <h1>Detalhes do Usuário</h1>
        <table className='center_table'>
            <tbody>
                <tr>
                    <td>Nome:</td><td>{nome}</td>
                </tr>
                <tr>
                    <td>Idade:</td><td>{idade}</td>
                </tr>
                <tr>
                    <td>Profissão:</td><td>{profissao}</td>
                </tr>
            </tbody>
        </table>
        {idade >= 18 ? <p>Elegível para habilitação</p> : ''}
    </div>
  )
}

export default UserDetails