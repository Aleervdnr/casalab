import React from 'react'
import "./Servicios.css"
import serviciosImg from "../../img/servicios-img.jpg"

export default function Servicios() {
  return (
    <section className='servicios' id='servicios'>
      <div className="container-servicios">
        <div className="servicios_box1">
          <h3 className='servicios-title'>Consulta por tu espacio de trabajo</h3>
          <img src={serviciosImg} alt="" className='servicios-img'/>
        </div>
        <div className="servicios_box2">
          <div className="servicios-grid">
            <div className="servicio">
              <div className="servicio-img1"></div>
              <div className="servicio-text">
                <p className="servicio-title">Espacios de trabajo</p>
                <ul className='servicio-ul'>
                  <li className='servicio-item'>Salas de reuniones</li>
                  <li className='servicio-item'>Oficinas privadas</li>
                  <li className='servicio-item'>Espacios compartidos</li>
                  <li className='servicio-item'>Coffe Office</li>
                  <li className='servicio-item'>Showroom</li>
                </ul>
              </div>
            </div>
            <div className="servicio">
              <div className="servicio-img2"></div>
              <div className="servicio-text">
                <p className="servicio-title">Plan Cowork</p>
                <p className="servicio-p">
                Para freelancers que buscan un espacio de trabajo productivo, de diseño y equipado.
                </p>
                <p className="servicio-p">Desde $150 la hora</p>
              </div>
            </div>
            <div className="servicio">
              <div className="servicio-img3"></div>
              <div className="servicio-text">
                <p className="servicio-title">Servicios</p>
                <ul className='servicio-ul'>
                  <li className='servicio-item'>Wifi infinite 1GB de velocidad</li>
                  <li className='servicio-item'>Ambiente climatizado</li>
                  <li className='servicio-item'>Sillas ergonomicas</li>
                  <li className='servicio-item'>Coffe service in situ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
