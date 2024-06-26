import React from 'react'

function ChangeMessageState({handleMessage}) {
    const msgs = ['Oi', 'Boa tarde', 'Bom dia', 'Boa noite']
  return (
    <div>
        <button onClick={() => (handleMessage(msgs[0]))}>Oi</button>
        <button onClick={() => (handleMessage(msgs[1]))}>Boa Tarde</button>
        <button onClick={() => (handleMessage(msgs[2]))}>Bom dia</button>
        <button onClick={() => (handleMessage(msgs[3]))}>Boa Noite</button>
    </div>
  )
}

export default ChangeMessageState