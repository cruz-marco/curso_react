import React from 'react'

function Container({children, test_string}) {
  return (
    <div>
        <h2>Testando o Chindren Prop</h2>
        {children}

        <p>{test_string}</p>
    </div>
  )
}

export default Container