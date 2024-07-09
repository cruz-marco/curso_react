import React from 'react'
import { useFetch } from '../hooks/useFetch'

function Home() {
    const URL = 'http://localhost:3000/products'
    const { data:items } = useFetch(URL)
  return (
    <div>
        <h1>Home</h1>
        <h2>Produtos</h2>
        <ul>
            {items && items.map((prod) => (
                <li key={prod.id}>Produto: {prod.name}<br/>
                Preço: {prod.price}</li>
            ))}
        </ul>

    </div>
  )
}

export default Home