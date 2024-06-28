import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Form({func}) {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('')

    function handleSubmit (e) {
        e.preventDefault()

        //console.log(name, message);
        func({nome: name, message: message})
        setName('')
        setMessage('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">
            <span>Nome:</span>
            <input type="text" name="name" id="name" placeholder='Insira eu nome.'
            onChange={(e) => (setName(e.target.value))}/>
        </label><br />
        <label htmlFor="message">
            <span>Mensagem:</span>
            <textarea name="message" id="message" rows="5" placeholder='Insita sua mensagem.'
            onChange={(e) => (setMessage(e.target.value))}></textarea>
        </label><br />
        <button type="submit">Enviar</button>
    </form>
  )
}

Form.propTypes={
    func: PropTypes.func.isRequired,
}

export default Form