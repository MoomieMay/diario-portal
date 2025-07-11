import React from 'react'
import Submenu from '../components/ClasificadosMenu';
import casa from '../assets/clasificados.jpg'
import '../styles/custom.css';

export default function Clasificados() {
  return (
    <div className='container'>
      <h1 className='titleClasificados mt-4'>Clasificados</h1>
      <Submenu />

      <div className='row'>
        <div className='col-12 col-md-3'>
          <div className='ClasificadosCard'>
            <p className='fs-5 fw-bold'> Fecha de Publicación</p>
            <div>
              <input type="radio" id="cbox1" value="" />
              <label for="cbox2"> 24 horas</label>
            </div>
            <div>
              <input type="radio" id="cbox2" value="" />
              <label for="cbox2"> 3 días</label>
            </div>
            <div>
              <input type="radio" id="cbox3" value="" />
              <label for="cbox2"> 7 días</label>
            </div>
            <div>
              <input type="radio" id="cbox4" value="" />
              <label for="cbox2"> 30 días</label>
            </div>


            <p className='fs-5 fw-bold mt-3'> Ubicación</p>
            <div>
              <input type="radio" id="cbox1" value="" />
              <label for="cbox2"> Trelew</label>
            </div>
            <div>
              <input type="radio" id="cbox2" value="" />
              <label for="cbox2"> Rawson </label>
            </div>
            <div>
              <input type="radio" id="cbox3" value="" />
              <label for="cbox2"> Comodoro Rivadavia </label>
            </div>
            <div>
              <input type="radio" id="cbox4" value="" />
              <label for="cbox2"> Puerto Madryn</label>
            </div>

          </div>
        </div>

        <div className='col-12 col-md-9 mt-4'>
          <div className="row">
            <div className="col-sm-4">
              <div className="card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-4 position-relative">
                    <img src={casa} className="img-fluid h-100 object-fit-cover" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body-clasificados d-flex flex-column justify-content-between h-100">
                      <span className="badge bg-dark  align-self-end  m-2">Trelew</span>
                      <p className="card-text-clasificados small mb-2">
                        Departamento en alquiler. Excelente ubicación. 2 dormitorios, cocina, comedor, living, baño, balcón.
                      </p>
                      <a href="" className="btn btn-jornada btn-sm fw-bold align-self-start">Más Info</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-4 position-relative">
                    <img src={casa} className="img-fluid h-100 object-fit-cover" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body-clasificados d-flex flex-column justify-content-between h-100">
                      <span className="badge bg-dark  align-self-end  m-2">Trelew</span>
                      <p className="card-text-clasificados small mb-2">
                        Departamento en alquiler. Excelente ubicación. 2 dormitorios, cocina, comedor, living, baño, balcón.
                      </p>
                      <a href="" className="btn btn-jornada btn-sm fw-bold align-self-start">Más Info</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className='justify-content-center mt-5'>
            <p className='fs-5 mt-5 fw-bold text-center'> ¿Querés anunciarte? </p>
            <p className='text-center'> Anunciar tus productos o servicios online nunca fue tan fácil y rápido. Sólo te lleva 1 minuto cargar tu aviso clasificado. </p>
            <div className="d-flex justify-content-center">
              <button className='btn-jornada'>Publicá un aviso</button>
            </div>
          </div>

        </div>
      </div>



    </div>
  )
}
