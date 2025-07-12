import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Submenu from './Submenu';
import '../styles/custom.css';
import noticia from '../assets/noticia.jpg'; 
import { noticias } from '../data/noticiasData';

const Categoria = () => {
  const { nombre } = useParams();

  // Filtrar noticias por la categoría que viene en la URL (mayúsculas)
  const noticiasFiltradas = noticias.filter(
    n => n.categoria.toUpperCase() === decodeURIComponent(nombre).toUpperCase()
  );

  // Tomar solo las primeras 3 noticias
  const noticiasMostrar = noticiasFiltradas.slice(0, 3);

  return (
    <div>
      <Submenu />
      <div className="container mt-4">
        <h1 className="mt-3 text-uppercase titleFunebres">{decodeURIComponent(nombre)}</h1>

        <div className="container mt-4">
          <div className="row g-3">
            {noticiasMostrar.length > 0 ? (
              <>
                {/* Noticia grande a la izquierda */}
                <div className="col-md-6">
                  <Link to={`/noticia/${noticiasMostrar[0].id}`} className="text-decoration-none text-white">
                    <div className="news-card large">
                      <img src={noticiasMostrar[0].imagen} alt="Noticia principal" />
                      <div className="overlay">
                        <div className="badge-noticia">{noticiasMostrar[0].categoria.toUpperCase()}</div>
                        <div className="headline">{noticiasMostrar[0].titulo}</div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Dos noticias chicas a la derecha */}
                <div className="col-md-6 d-flex flex-column gap-3">
                  {noticiasMostrar.slice(1).map((noti, index) => (
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
            ) : (
              <p>No hay noticias para esta categoría.</p>
            )}
          </div>
        </div>

        <div className='row mt-5 ms-1'>
        <div className='col-md-2'>
          <img className='img-fluid' src={noticia} alt="Noticia secundaria" />
        </div>
        <div className='col-md-10'>
          <p className='fs-5 fw-bold text-cat'> LOREM IPSUM </p>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut risus sagittis, tempus lectus a, efficitur eros. In faucibus, ligula nec euismod semper, eros tortor lacinia leo, ut faucibus dolor velit nec arcu. Integer ac quam risus. Suspendisse sit amet semper est. Integer commodo hendrerit efficitur.   </p>
        </div>
      </div>
      <div className='row mt-5 ms-1'>
        <div className='col-md-2'>
          <img className='img-fluid' src={noticia} alt="Noticia secundaria" />
        </div>
        <div className='col-md-10'>
          <p className='fs-5 fw-bold text-cat'> LOREM IPSUM </p>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut risus sagittis, tempus lectus a, efficitur eros. In faucibus, ligula nec euismod semper, eros tortor lacinia leo, ut faucibus dolor velit nec arcu. Integer ac quam risus. Suspendisse sit amet semper est. Integer commodo hendrerit efficitur.   </p>
        </div>
      </div>
      <div className='row mt-5 ms-1'>
        <div className='col-md-2'>
          <img className='img-fluid' src={noticia} alt="Noticia secundaria" />
        </div>
        <div className='col-md-10'>
          <p className='fs-5 fw-bold text-cat'> LOREM IPSUM </p>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut risus sagittis, tempus lectus a, efficitur eros. In faucibus, ligula nec euismod semper, eros tortor lacinia leo, ut faucibus dolor velit nec arcu. Integer ac quam risus. Suspendisse sit amet semper est. Integer commodo hendrerit efficitur.   </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Categoria;
