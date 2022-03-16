import React from 'react'
import './FooterStyles.css'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="col">
                    <h3>Explore Nosso cardápio</h3>
                    <p>Menu</p>
                    <p>Nutrição</p>
                    <p>Ingredientes</p>
                    <p>Cardápio de bebidas</p>
                </div>
                <div className="col">
                    <h3>Conheça-nos</h3>
                    <p>Sobre nós</p>
                    <p>Franquia</p>
                    <p>Fundação</p>
                    <p>Declaração de missão</p>
                    <p>Metas</p>
                </div>
                <div className="col">
                    <h3>Entrar em contato</h3>
                    <p>pressione</p>
                    <p>Carreiras</p>
                    <p>Contate-Nos</p>
                    <p>Socialize</p>
                </div>
                <div>
                    <h3>Vamos nos conectar</h3>
                    <div className="social">
                        <FaFacebookSquare className='icon' />
                        <FaInstagramSquare className='icon' />
                        <FaTwitterSquare className='icon' />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
