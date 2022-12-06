import React from 'react'
import "./Footer.css"
import { FaInstagram,FaLinkedin,FaWhatsapp } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container container-footer">
        <nav className="footer_nav">
          <ul className="footer_ul">
            <li className="footer_li"><a href="#about"      className="footer_link">Nosotros</a></li>
            <li className="footer_li"><a href="#servicios"  className="footer_link">Servicios</a></li>
            <li className="footer_li"><a href="#contacto" className="footer_link">Contacto</a></li>
          </ul>
        </nav>

        <span className="footer_title">Casalab</span>

        <div className="social social-footer">
          <a href="https://www.instagram.com/casalab.ar" target="_blank" rel="noopener noreferrer" className='social_link'>
          <FaInstagram className='social-icon'/>
          </a>

          <a href="https://www.linkedin.com/company/casalab-coworking/" target="_blank" rel="noopener noreferrer" className='social_link'>
          <FaLinkedin className='social-icon'/>
          </a>

          <a href="http://wa.me/5493364037566" target="_blank" rel="noopener noreferrer" className='social_link'>
          <FaWhatsapp className='social-icon'/>
          </a>

        </div>
      </div>

      <div className="container container-footer2">
        <span className="copy">
        Copyright © 2022.CasaLab
        </span>

        <div className="footer-line"></div>

        <div className="design">
          <a href="https://aleervdnr.com.ar" target="_blank" rel="noopener noreferrer" className='design-link'>Designed by Aleervdnr</a>
        </div>
      </div>
    </footer>
  )
}
