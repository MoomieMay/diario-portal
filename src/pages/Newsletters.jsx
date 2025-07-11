import React from 'react'
import '../styles/custom.css'
import img from '../assets/newsletters.PNG'
import news from '../assets/news.jpg'


export default function Newsletters() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-sm-6 order-sm-1">
          <h1 className='titleNewsletters'>Newsletters</h1>

          <div className="d-block d-sm-none">
            <img src={img} alt="Newsletter" className="img-fluid mb-3" />
          </div>

          <div className="content-wrapper">
            <p>Suscribite y recibí en tu e-mail las noticias que te interesan.</p>
            <input type="email" placeholder="Ingresa tu e-mail" className="form-control mb-3" />
            <button className="btn-jornada">Suscribirme</button>
          </div>
        </div>

        <div className="col-sm-6 d-none d-sm-block order-sm-2">
          <img src={img} alt="Newsletter" className="img-fluid" />
        </div>
      </div>

      <div className="row justify-content-between mt-4">
        {['MÁS LEÍDAS', 'POLICIALES', 'POLÍTICA', 'DEPORTES', 'MAGAZINE', 'GÉNERO', 'ECONOMÍA', 'INTERNACIONAL'].map((title, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="card h-100">
              <img src={news} className="card-img-top" alt="..." />
              <div className="card-body d-flex align-items-center justify-content-center">
                <p className="card-text mb-0">{title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
