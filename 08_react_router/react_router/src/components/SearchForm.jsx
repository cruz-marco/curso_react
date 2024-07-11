import { Form, useNavigate } from 'react-router-dom' //redireciona o usuário dentro do código do componente
import { useState } from 'react'

function SearchForm() {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        navigate('/search?q='+query)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="query" id="query" onChange={(e) => {setQuery(e.target.value)}} />
        <button type="submit">Buscar</button>
    </form>
  )
}

export default SearchForm