import React from 'react'
import "./About.css"
import aboutImg from "../../img/about.jpg"

export default function About() {
  return (
    <section className="about">
      <div className="container-about container">

      <img src={aboutImg} alt="chica trabajando en casalab" className='about-img' />

      <div className="about-text">
        <p className='about_title'> <span className="hola">Hola!</span> somos <span className="hashtag">#CasaLab</span> 👩‍💻</p>
        <p className="about_p">🎯 Nuestro objetivo es apostar al crecimiento y desarrollo de emprendedores y profesionales de San Nicolás.
        </p>
        <p className="about_p">Conectá con una comunidad profesional vibrante 💫 en un ambiente sofisticado y flexible, que se adapta a tus necesidades.</p>
      </div>
      </div>
    </section>
  )
}
