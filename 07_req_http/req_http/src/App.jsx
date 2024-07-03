import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  
  const URL = 'http://localhost:3000/products'

  // Resgatando dados: 
  useEffect(() => { // não coloque um async aqui.
     // ASYNC pois é uma função assíncrona
     async function fetchData() {
      const res = await fetch(URL) //requisição, await pois pode levar um tempo.
  
      const data = await res.json() // transforma o dado recebido em texto puro em json
      
      setProducts(data)// modifica a variável de estado.
      }

      fetchData()      
   
  }, [])

  console.log(products)

  //Adição de produtos
  async function handleSubmit(e) {
    e.preventDefault()

    const product = {
      name,
      price
    }

    const req = await fetch(URL, { // não esquecer o await!!!!
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify(product)
    })    
    //3 - carregamento dinâmico
    const addedProduct = await req.json()
    setProducts([...products, addedProduct])

    // Limpando os inputs
    setName('')
    setPrice(0)
  }
  

  return (
    <div className="App">
      <h1>Http com React</h1>
      <ul>
      {products.map((product) => (
        <li key={product.id}>Produto: {product.name} - Preço: R$:{product.price}</li>
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
      </div>
    </div>
  )
}

export default App
