import React from 'react';
import Submenu from '../components/Submenu';
import '../styles/custom.css';

const Home = () => {
  return (
    <div>
      <Submenu />

      <div className="container mt-4">
        <div className="row g-3">
          {/* Imagen grande */}
          <div className="col-md-6">
            <div className="news-card large">
              <img src="/noticia.jpg" alt="Noticia principal" />
              <div className="overlay">
                <div className="badge-noticia">LOREM IPSUM</div>
                <div className="headline">Lorem Ipsum Dolor Sit Amet</div>
              </div>
            </div>
          </div>

          {/* Dos noticias más chicas */}
          <div className="col-md-6 d-flex flex-column gap-3">
            <div className="news-card small">
              <img src="/noticia.jpg" alt="Noticia secundaria" />
              <div className="overlay">
                <div className="badge-noticia">LOREM IPSUM</div>
                <div className="headline">Lorem Ipsum Dolor Sit Amet</div>
              </div>
            </div>
            <div className="news-card small">
              <img src="/noticia.jpg" alt="Noticia secundaria" />
              <div className="overlay">
                <div className="badge-noticia">LOREM IPSUM</div>
                <div className="headline">Lorem Ipsum Dolor Sit Amet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
