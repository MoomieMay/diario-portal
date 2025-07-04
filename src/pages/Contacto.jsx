import React from 'react'
import img from '../assets/contacto.png'
import '../styles/custom.css'

export default function Contacto() {
  return (
    <div className='container'>
      <div class="row">
        <div class="col-6 col-sm-6">
          <h1 className='titleNewsletters mb-2'> Contacto</h1>
          <p className='fs-5'> Comunicate con nosotros.</p>
        </div>
        <div class="col-6 col-sm-6">
          <img src={img} alt="Contacto" className="img-fluid mb-3 img-contacto" />
        </div>
      </div>


      <div>
        <p className='fw-bold fs-4 title-contacto'>Recepción: <br /> Diario Jornada - Cadena Tiempo - Jornada Web</p>
        <p> Correo electrónico: <a href="mailto:recepcionjornada@grupojornada.com">recepcionjornada@grupojornada.com</a></p>
        <br />
        <p>Lunes a Viernes 7:30hs a 14:00hs</p>
        <p>Teléfono: 280 442 2209</p>
        <br />
        <p>Lunes a Viernes 7:30hs a 14:00hs</p>
        <p>WhatsApp: 280 426 6319</p>
      </div>

      <div className='mt-5'>
        <p className='fw-bold fs-4 title-contacto'>Departamento Publicitario: <br /> Diario Jornada - Cadena Tiempo - Jornada Web</p>
        <p> Gerenta Comercial: Ana E. Restuccia <a href="mailto:gcomercial@grupojornada.com">gcomercial@grupojornada.com</a></p>
        <br />
        <p> Web y Radio: <a href="mailto:publicidad@grupojornada.com">publicidad@grupojornada.com</a></p>
        <br />
        <p> Diario Jornada: <a href="mailto:avisos@grupojornada.com">avisos@grupojornada.com</a></p>
        <br />
        <p className='fw-bold'> Director Periodístico: Carlos Baulde</p>
        <p className='fw-bold'> Editor Adjunto: Rolando Tobarez</p>
      </div>

    </div>
  )
}
