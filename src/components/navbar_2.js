import React from 'react'
import './nabar.css'
import Logo from './img/logo.png'
import Seta from './img/Seta.png'
import { Link } from 'react-router-dom'

const NavBar_2 = () => {
  return (
    <nav>
        <ul>
            <li><Link to = "/"><img src={Seta} alt="Voltar" /></Link></li>
            <li><h1>Como usar?</h1></li>
            <li><a href=""><img src={Logo} alt="Logo" /></a></li>
        </ul>
    </nav>
  )
}

export default NavBar_2