import React from 'react'

import './About.scss'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-container__card">
                <h2>Creek Finder</h2>
                <div className="about-container__text">
                    <p>Creek Finder es una iniciativa formada para ofrecer el servicio al usuario de poder buscar las mejores calas de Menorca. Com esta aplicación web damos la posibilidad de poder descubrir nuevas calas y hacerte tus propias listas de tus calas y playas favoritas. Tambien puedes convertirte en "Content Creator" y añadir nuevos sitios que creas que merecen la pena visitar!</p>
                </div>
            </div>
            <div className="about-container__rails">
                <img className="about-container__gift" src="https://media.giphy.com/media/xT0xeOGAGEAuQK1ujm/giphy.gif" alt="caminando" />
            </div>

        </div>

    )
}

export default About