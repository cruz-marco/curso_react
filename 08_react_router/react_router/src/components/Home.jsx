import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import './css/home.css'

function Home() {
    const URL = 'http://localhost:3000/products'
    const { data:items } = useFetch(URL)
  return (
    <div>
        <h1>Home</h1>
        <h2>Produtos</h2>
        <ul className='ulProdutos'>
            {items && items.map((prod) => (
                <li className='liProdutos' key={prod.id}>Produto: {prod.name}<br/>
                Preço: {prod.price} <br /> <br />
                <Link to={`/products/${prod.id}`}>detalhes</Link></li>
            ))}
        </ul>

    </div>
  )
}

export default Home