import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'



function Search() {
    const [searchParams] = useSearchParams()
    const [prodto, setProdto] = useState([])

    useEffect(() => {
        async function localizaProduto() {
            const get = await fetch(`http://localhost:3000/products?${searchParams}`)
            const produ = await get.json()
            setProdto([...produ])
        }

        localizaProduto()
    },[searchParams])
    console.log(prodto)
  return (
    <div>
        <ul>
            {prodto.length > 0 ? prodto.map((prd) => (
                <li key={prd.id}><Link to={`/products/${prd.id}`}>{prd.name}</Link></li>
            )): <p>Nenhum produto encontrado</p> }
        </ul>
    </div>
  )
}

export default Search