import 'normalize.css';
import './App.css';
import Header from "./Componentes/Header/Header.jsx"
import LogoHero from "./img/logo-hero.jpg"
import { MdKeyboardArrowDown } from 'react-icons/md';
import About from './Componentes/About/About';
import Servicios from './Componentes/Servicios/Servicios';

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
        
      </section>
    </div>
  );
}

export default App;
