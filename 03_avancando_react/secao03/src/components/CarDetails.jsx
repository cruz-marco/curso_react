import React from 'react'

function CarDetails({marca, modelo, ano, km}) { //desempacota os valores dos props.
    const carro = [{title: 'Marca', value: marca},
        {title: 'Modelo', value: modelo},
        {title: 'Ano', value: ano},
        {title: 'KM', value: km}
        ]
    return (
    <div>
        <h1>Detalhes do Carro:</h1>
        {carro.map((item, i) => (
            <p key={i}>{item.title} - {item.value}</p>
        ))}
    </div>
  )
}

export default CarDetails