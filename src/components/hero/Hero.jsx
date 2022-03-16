import React from 'react'
import './HeroStyles.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                    <div className="text">
                        <p>Sempre</p>
                    </div>
                    <h1>Servido Fresco</h1>
                    <h1>Diário</h1>
                    <button className="btn">Delivery</button>
                    <button className="btn">Tirar</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
