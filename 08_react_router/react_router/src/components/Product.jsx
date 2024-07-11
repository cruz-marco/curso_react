import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'//hook para receber informações das rotas dinâmicas

function Product() {
    const { id } = useParams();
    const [prod, setProd] = useState('')

    useEffect(() => {
        async function buscaProduto() {
            const get = await fetch(`http://localhost:3000/products/${id}`)
            const produ = await get.json()
            setProd(produ)
        }

        buscaProduto()
    },[])

  return (
    <div>
        <h1>{prod.name}</h1>
        <br /><br />
        <p>R$: {prod.price}</p>
        <h4>Baratinho, freguesa!</h4>
    </div>
  )
}

export default Product