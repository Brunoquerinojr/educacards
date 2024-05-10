import React from 'react'
import './nabar.css'
import Logo from './img/logo.png'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li></li>
            <li><h1>Bem-Vindo(a)</h1></li>
            <li><a href=""><img src={Logo} alt="Logo" /></a></li>
        </ul>
    </nav>
  )
}

export default NavBar