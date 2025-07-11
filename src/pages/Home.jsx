import React from 'react';
import Submenu from '../components/Submenu';
import '../styles/custom.css';
import noticia from '../assets/noticia.jpg';
import { Link } from 'react-router-dom';
import { noticias } from '../data/noticiasData';

const Home = () => {
  return (
    <div>
      <Submenu />

      <div className="container my-5">
        <div className="row g-3">
          {/* Noticia grande a la izquierda */}
          <div className="col-md-6">
            <Link to={`/noticia/noticia-1`} className="text-decoration-none text-white">
              <div className="news-card large">
                <img src={noticia} alt="Noticia principal" />
                <div className="overlay">
                  <div className="badge-noticia">LOREM IPSUM</div>
                  <div className="headline">{noticias[0].titulo}</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Dos noticias chicas a la derecha */}
          <div className="col-md-6 d-flex flex-column gap-3">
            <Link to={`/noticia/noticia-2`} className="text-decoration-none text-white">
              <div className="news-card small">
                <img src={noticia} alt="Noticia secundaria" />
                <div className="overlay">
                  <div className="badge-noticia">LOREM IPSUM</div>
                  <div className="headline">{noticias[1].titulo}</div>
                </div>
              </div>
            </Link>

            <Link to={`/noticia/noticia-3`} className="text-decoration-none text-white">
              <div className="news-card small">
                <img src={noticia} alt="Noticia secundaria" />
                <div className="overlay">
                  <div className="badge-noticia">LOREM IPSUM</div>
                  <div className="headline">{noticias[2].titulo}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
