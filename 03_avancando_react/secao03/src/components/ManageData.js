import { useState } from 'react'

function ManageData() {
    const [number, setNumber] = useState(1)

  return (
    <div>
        <h3>Valor = {number}</h3>
        <button onClick={() => setNumber(number+1)}>Aumenta um</button>
        <button onClick={() => setNumber(number-1)}>Abaixa um</button>
    </div>
  )
}

export default ManageData