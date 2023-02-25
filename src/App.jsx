import React from 'react'
import Galeria from './components/galeria/Galeria'
import Header from './components/header/Header'
import Cards from './components/noticias/Cards'

export const App = () => {
    return (
        <div>
            <Header />
            <Cards />
            <Galeria />
        </div>
    )
}

