import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch'
import { usePost } from './hooks/usePost'

import './App.css'

function App() {
  const URL = 'http://localhost:3000/products'

  //const [products, setProducts] = useState(prods)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const { data: prods } = useFetch(URL) // renomeando "data" para "prods"
  
  // Resgatando dados: 
  /*
  useEffect(() => { // não coloque um async aqui.
     // ASYNC pois é uma função assíncrona
     async function fetchData() {
      const res = await fetch(URL) //requisição, await pois pode levar um tempo.
  
      const data = await res.json() // transforma o dado recebido em texto puro em json
      
      setProducts(data)// modifica a variável de estado.
      }

      fetchData()      
   
  }, [])
  */

  //Adição de produtos
  async function handleSubmit(e) {
    e.preventDefault()

    const product = {
      name: name,
      price: Number(price)
    }


    usePost(product, URL)
    /*const req = await fetch(URL, { // não esquecer o await!!!!
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify(product)
    })    
    //3 - carregamento dinâmico
    const addedProduct = await req.json()
    setProducts([...products, addedProduct])*/

    // Limpando os inputs
    window.location.reload()
  }
  
  const [delement, setDelement] = useState('');
  function handleRemove(){
    const url_rem = `${URL}/${delement}`
    async function removeItem(endereco) {
      const req = await fetch(endereco, {
        method: 'DELETE'
      })      
    }

    removeItem(url_rem)
    window.Location.reload()
  }

  return (
    <div className="App">
      <h1>Http com React</h1>
      <ul>
      {prods && prods.map((product) => (
        <li key={product.id}>ID: {product.id} - Produto: {product.name} - Preço: R$:{product.price}</li>
      ))}
      </ul>

      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <span>Nome: </span>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </label><br />
          <label htmlFor="price">
            <span>Preço:</span>
            <input type="text" name='price' id='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label><br />
          <button type='submit'>enviar</button>
        </form>

        <form onSubmit={handleRemove}>
          <label htmlFor="produtos">
            <span>Apagar Produto:</span><br />
            <select name="produtos" id="produtos" onChange={(e) => (setDelement(e.target.value))}>
                {prods && prods.map((prod, i) => (
                  <option key={i} value={prod.id}>{prod.name}</option>
                ))}
            </select>
          </label><br />
          <button type="submit">Apagar</button>
        </form>
      </div>
    </div>
  )
}

export default App
