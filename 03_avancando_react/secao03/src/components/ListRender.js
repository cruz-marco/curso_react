import React, {useState} from 'react'

const ListRender = () => {
    const [list] = useState(['Marco', 'Marcelo', 'Antonio', 'Ezio', 'Dulce']);
    const [users, setUsers] = useState([
        {id: 1, name: 'Marco', Age: 36},
        {id: 2, name: 'Marcelo', Age: 27},
        {id: 3, name: 'Dulce', Age: 72},
        {id: 4, name: 'Ezio', Age: 12}
    ]) // Lista de usuários em State para que possamos modificá-los em tempo real.

    function deleteRandom () {
        const randomNumber = Math.floor(Math.random() * 5) // Pega um número aleatório até 5

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        }) // Muda o array USERS filtrando-o e retirando o elemento cujo id foi randomicamente
           // determinado acima.
    }

  return (
    <div>
        <h4>Lista não ordenada usando um loop js no React.</h4>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name} - {user.Age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Remove Random</button>
    </div>
  )
}

export default ListRender