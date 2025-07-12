import React from 'react';
import Submenu from '../components/Submenu';
import '../styles/custom.css';
import { Link } from 'react-router-dom';
import { noticias } from '../data/noticiasData';

const Home = () => {
  // Ordenar noticias por fecha descendente
  const noticiasOrdenadas = [...noticias].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  // Tomar las 3 primeras (más recientes)
  const ultimasTres = noticiasOrdenadas.slice(0, 3);

  return (
    <div>
      <Submenu />

      <div className="container my-5">
        <h1 className="mt-3 text-uppercase titleFunebres">ÚLTIMAS NOTICIAS</h1>
        <div className="row g-3">
          {/* Noticia grande a la izquierda */}
          {ultimasTres.length > 0 && (
            <>
              <div className="col-md-6">
                <Link to={`/noticia/${ultimasTres[0].id}`} className="text-decoration-none text-white">
                  <div className="news-card large">
                    <img src={ultimasTres[0].imagen} alt="Noticia principal" />
                    <div className="overlay">
                      <div className="badge-noticia">{ultimasTres[0].categoria.toUpperCase()}</div>
                      <div className="headline">{ultimasTres[0].titulo}</div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Dos noticias chicas a la derecha */}
              <div className="col-md-6 d-flex flex-column gap-3">
                {ultimasTres.slice(1).map((noti, index) => (
                  <Link key={noti.id} to={`/noticia/${noti.id}`} className="text-decoration-none text-white">
                    <div className="news-card small">
                      <img src={noti.imagen} alt={`Noticia secundaria ${index + 1}`} />
                      <div className="overlay">
                        <div className="badge-noticia">{noti.categoria.toUpperCase()}</div>
                        <div className="headline">{noti.titulo}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
