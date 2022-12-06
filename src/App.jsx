import 'normalize.css';
import './App.css';
import Header from "./Componentes/Header/Header.jsx"
import LogoHero from "./img/logo-hero.jpg"
import About from './Componentes/About/About';
import Servicios from './Componentes/Servicios/Servicios';
import Footer from './Componentes/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="hero">
        <div className="hero_text">
          <h1 className='hero_title'>Espacios de trabajo totalmente equipados</h1>
          <p className='hero_p'>Oficinas y salas de reuniones.</p>
          <p className='hero_p'>Somos el coworking que estabas necesitando!</p>
        </div>

        <img src={LogoHero} alt="casa lab logo" className='hero_img' />

        {/* <MdKeyboardArrowDown className='hero-arrow'/> */}
        <div className="hero-arrow"></div>
      </div>

      <About/>
      <Servicios/>

      <section className="cta">
        <p className="cta_p">Estas a un paso de tener tu oficina en pleno centro</p>
        <a href="#" className="cta_link">Reservar</a>
      </section>

      <section className="contacto" id='contacto'>
        <div className="container container-contacto">
          <div className="ubicacion">
            <h4 className="contacto_title">Nos Econtramos en</h4>
            <p className='contacto-text'>De la nacion 432</p>
            <p className='contacto-text'>San Nicolas de los Arroyos</p>
          </div>

          <div className="horario">
            <h4 className="contacto_title">Desde las</h4>
            <p className='contacto-text'>08hs a 20hs</p>
            <p className='contacto-text'>Lunes a Sabados</p>
          </div>

          <div className="redes">
            <h4 className="contacto_title">Nuestras Redes</h4>
            <a href="https://www.instagram.com/casalab.ar" target="_blank" rel="noopener noreferrer" className='contacto-link'>Instagram</a>
            <a href="http://wa.me/5493364037566" target="_blank" rel="noopener noreferrer" className='contacto-link'>Whatsapp</a>
            <a href="https://www.linkedin.com/company/casalab-coworking/" target="_blank" rel="noopener noreferrer" className='contacto-link'>Linkedin</a>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default App;
