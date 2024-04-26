import React from 'react'
import './nabar.css'
import Logo from './img/Header.jpg'
import Seta from './img/Seta.png'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><a href=""><img src={Seta} alt="Seta de Voltar" /></a></li>
            <li><h1>Bem-Vindo(a)</h1></li>
            <li><a href=""><img src={Logo} alt="Logo" /></a></li>
        </ul>
    </nav>
  )
}

export default NavBar