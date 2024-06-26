import React from 'react'

function CarDetails({id, marca, modelo, ano, km, isNew}) { //desempacota os valores dos props.
    const carro = [{title: 'ID', value: id},
        {title: 'Marca', value: marca},
        {title: 'Modelo', value: modelo},
        {title: 'Ano', value: ano},
        {title: 'KM', value: km}
        ]
    return (
    <div>
        <h1>Detalhes do Carro:</h1>        
            <table className='center_table'>
                <tbody>
                    {carro.map((item, i) => (
                        <tr key={i}>
                            <td>{item.title}</td> 
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isNew ? <p>Este carro é novo!</p> : ''}
    </div>
  )
}

export default CarDetails