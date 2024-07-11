import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/menu.css'

function Menu() {
  return (
    <nav>
        <ul className='menuMain'>
            <li className='menu_li'><NavLink to='/' className={({ isActive }) => isActive ? 'active' : undefined} end>Home</NavLink></li>
            <li className='menu_li'><NavLink to='/about'>Sobre</NavLink></li>
            {/*A classe 'active' é ativada automaticamente por default
            caso seja criada no css do componente do menu. */}
        </ul>
    </nav>
  )
}

export default Menu