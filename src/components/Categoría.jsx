import React from 'react';
import { useParams } from 'react-router-dom';
import Submenu from './Submenu';
import '../styles/custom.css';
import noticia from '../assets/noticia.jpg';

const Categoria = () => {
  const { nombre } = useParams();

  return (
    <div>
      <Submenu />
      <div className="container mt-4">
        {/* Título dinámico */}
        <h1 className="mt-3 text-uppercase titleFunebres">{decodeURIComponent(nombre)}</h1>

        <div className="container mt-4">
          <div className="row g-3">
            {/* Imagen grande */}
            <div className="col-md-6">
              <div className="news-card large">
                <img src={noticia} alt="Noticia principal" />
                <div className="overlay">
                  <div className="badge-noticia">LOREM IPSUM</div>
                  <div className="headline">Lorem Ipsum Dolor Sit Amet</div>
                </div>
              </div>
            </div>

            {/* Dos noticias más chicas */}
            <div className="col-md-6 d-flex flex-column gap-3">
              <div className="news-card small">
                <img src={noticia} alt="Noticia secundaria" />
                <div className="overlay">
                  <div className="badge-noticia">LOREM IPSUM</div>
                  <div className="headline">Lorem Ipsum Dolor Sit Amet</div>
                </div>
              </div>
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
