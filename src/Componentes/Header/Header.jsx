import React,{useEffect,useState} from 'react'
import {FiMenu, FiX } from 'react-icons/fi';
import "./Header.css"
import { FaInstagram,FaLinkedin,FaWhatsapp } from 'react-icons/fa';




export default function Header() {

  const [y, setY] = useState(window.scrollY)
  const [burgerClickState, setBurgerClickState] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY))
  },[])

  const burgerClick = () => {
    setBurgerClickState(!burgerClickState)
  }
  return (
    <header className={y > 0 ? "header header-scroll" : "header"}>
      <nav className="nav">
        
        <ul 
          className={burgerClickState ? "nav_ul nav_ul--active" : "nav_ul"}
          style={
            window.screen.width < "1023" ? 
            y > 0 ? {top:"70px", height:"calc(100vh - 70px)"} 
            :
            {top:"75px"} : {top:"0px", height:"100%"}}>
          <li className="nav_item">
            <a href='#about' className='nav_link'>Nosotros</a>
          </li>
          <li className="nav_item">
            <a href='#servicios' className='nav_link'>Servicios</a>
          </li>
          <li className="nav_item">
            <a href='#contacto' className='nav_link'>Contacto</a>
          </li>
        </ul>
        <h1 className="nav_title">CasaLab</h1>

        <div className="social">
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

        {burgerClickState ? <FiX className="burger" onClick={burgerClick}/> : <FiMenu className="burger" onClick={burgerClick}/> }
      </nav>
    </header>
  )
}
