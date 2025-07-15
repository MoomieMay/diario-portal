import React from 'react'
import banner from '../assets/radio-banner.png';
import noticia from '../assets/noticia.jpg';
import '../styles/custom.css';

export default function Radio() {
  return (
    <div>
      <div className="container my-4">
        <img src={banner} alt="Stream Banner" className="img-fluid my-4 justify-content-center" />
      </div>

      <div className="container mt-4">
        <h1 className='titleFunebres'> ESCUCHÁ LA RADIO ONLINE</h1>
        <audio controls>
          <source src="https://sc.host-live.com/8156/stream" type="audio/mpeg" />
          Tu navegador no soporta la etiqueta de audio.
        </audio>
      </div>

      <div className="container my-5">
        <h1 className='titleFunebres'> MIRÁ LA RADIO EN VIVO</h1>
        <div className="video-responsive">
          <iframe
            src="https://www.youtube.com/embed/zYZagXA3rKQ?list=UUqDA-KXzsZ3SEGHInfv5rpQ"
            title="🔵 JORNADA STREAM | Tiempo Deportivo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <div className="container my-5">
        <h1 className='titleFunebres'> CADENA TIEMPO </h1>
        <div className="row mb-5">
          <div className="col-md-4 mb-3">
            <div className="news-card small">
              <img src={noticia} alt="Noticia secundaria" />
              <div className="overlay">
                <div className="badge-noticia">LOREM IPSUM</div>
                <div className="headline">Lorem Ipsum Dolor Sit Amet</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="news-card small">
              <img src={noticia} alt="Noticia secundaria" />
              <div className="overlay">
                <div className="badge-noticia">LOREM IPSUM</div>
                <div className="headline">Lorem Ipsum Dolor Sit Amet</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="news-card small">
              <img src={noticia} alt="Noticia secundaria" />
              <div className="overlay">
                <div className="badge-noticia">LOREM IPSUM</div>
                <div className="headline">Lorem Ipsum Dolor Sit Amet</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
