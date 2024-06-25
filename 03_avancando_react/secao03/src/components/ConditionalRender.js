import React, { useState } from 'react'

function ConditionalRender() {
    const [x, setX] = useState(true);

    
  return (
    <div>
        {x ? (<p>Apareci!</p>) : (<p>&#128584;</p>)}
        <button onClick={() => (
            x ? setX(false) : setX(true)
        )}>Aparece / Some</button>

    </div>
  )
}

export default ConditionalRender