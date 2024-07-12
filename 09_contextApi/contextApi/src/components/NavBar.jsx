import React from 'react'
import './css/menu.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
            <>
                <ul className='menuMain'>
                    <li className='menuLi'><NavLink to='/'>Home</NavLink></li>
                    <li className='menuLi'><NavLink to='/pg1'>Page 1</NavLink></li>
                    <li className='menuLi'><NavLink to='/pg2'>Page 2</NavLink></li>
                    <li className='menuLi'><NavLink to='/pg3'>Page 3</NavLink></li>
                </ul>
            </>
  )
}

export default NavBar