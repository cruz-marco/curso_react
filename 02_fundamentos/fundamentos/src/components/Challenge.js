import React, { useState } from 'react';

const Counter = props => {
    const [counter,  setCounter] = useState(0);

    return (
       <div>
            <p>
                Contador por Props: {counter}
            </p>
            <p>
                <button onClick={() => setCounter(counter+1)}>Incrementar</button>
            </p>
       </div>
    );
}

function Challege () {

    const a = 1, b = 2;
    
    function handleClick () {
        console.log(a+b);
    }

    return(
        <div><br /><br />
            <p>Primeiro número: {a}</p>
            <p>Segundo número: {b}</p>
            <button onClick={handleClick}>Somar</button>

            <Counter />
        </div>
    );

};

export default Challege;