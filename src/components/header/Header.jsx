import React from 'react'
import './header.css'
import Logo from '../../assets/logo.png'
import Nike from '../../assets/nike.jpg'
import Adidas from '../../assets/adidas.png'


const Header = () => {
    return (

        <header>
            <div className="container header__container">
                <div className="header__container-act">
                    <a href="">Seja um  associado</a>
                </div>
                <div className="header__container-patrocinios">
                    <img src={Nike} alt="" />
                    <img src={Adidas} alt="" />
                </div>
                <div className="header__container-logo">
                    <img src={Logo} alt="" />
                </div>
                <ul className='header__container-menu-links'>
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="">Noticias</a>
                    </li>
                    <li>
                        <a href="">Prestação de Contas</a>
                    </li>
                    <li>
                        <a href="">Equipes </a>
                    </li>
                    <li>
                        <a href="">Calendário </a>
                    </li>

                </ul>

            </div>
        </header>
    )
}

export default Header