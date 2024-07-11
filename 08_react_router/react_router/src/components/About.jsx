import React from 'react'
import { Link } from 'react-router-dom'


function About() {
  return (
    <div>
        <h1>Sobre</h1>
        <p><Link to='/about/me'>Mais sobre mim!</Link></p>
    </div>
  )
}

export default About