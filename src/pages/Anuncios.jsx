import React from 'react'
import '../styles/custom.css'
import img from '../assets/anuncios.PNG'

export default function Anuncios() {
    return (
        <div className='container'>
            <div class="row">
                <div class="col-6 col-sm-6 mt-5">
                    <h1 className='titleNewsletters'> Como Anunciar</h1>
                    <p className='fs-5'>Te ofrecemos múltiples alternativas enfocadas en llegar a tus clientes de una forma más rápida y aumentar tus ventas.</p>
                </div>
                <div class="col-6 col-sm-6 mt-5">
                    <img src={img} alt="Newsletter" className="img-fluid mb-3" />
                </div>
            </div>

            <p className='fs-5 text-center my-3 '>Envianos un e-mail a <a>gcomercial@grupojornada.com</a></p>


            <div className="row justify-content-between mt-4">
                <div className="col-12 col-sm-6 col-md-3 mb-4">
                    <div className="card-anuncio h-100">
                        <div class="card-header-anuncio fs-5"> Diario Jornada </div>
                        <div className="card-body-anuncio d-flex align-items-center justify-content-center">
                            <p className="card-text-anuncio mb-0 ">
                                <ul>
                                    <li>Banner dinámico</li>
                                    <li>Notas patrocinadas</li>
                                    <li>Publinotas</li>
                                    <li>Solicitadas</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-4">
                    <div className="card-anuncio h-100">
                        <div class="card-header-anuncio fs-5"> Cadena Tiempo </div>
                        <div className="card-body-anuncio d-flex align-items-center justify-content-center">
                            <p className="card-text-anuncio mb-0 ">
                                <ul>
                                    <li>PNT</li>
                                    <li>Auspicios</li>
                                    <li>Salidas en tanda</li>
                                    <li>Segmentos patrocinados</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-4">
                    <div className="card-anuncio h-100">
                        <div class="card-header-anuncio fs-5"> Jornada Stream </div>
                        <div className="card-body-anuncio d-flex align-items-center justify-content-center">
                            <p className="card-text-anuncio mb-0 ">
                                <ul>
                                    <li>Zócalo</li>
                                    <li>Auspicios</li>
                                    <li>PNT</li><br />
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-4">
                    <div className="card-anuncio h-100">
                        <div class="card-header-anuncio fs-5"> Redes Sociales </div>
                        <div className="card-body-anuncio d-flex align-items-center justify-content-center">
                            <p className="card-text-anuncio mb-0 ">
                                <ul>
                                    <li>Historias patrocinadas</li>
                                    <li>Reel Instagram / Tik-Tok</li>
                                    <li>Informes Jornada Play</li><br />
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mt-2">
                <div className="col-12 col-sm-6 col-md-6 mb-6">
                    <div className="card-anuncio h-100">
                        <div class="card-header-anuncio fs-5"> Clasificados Jornada </div>
                        <div className="card-body-anuncio d-flex align-items-center justify-content-center">
                            <p className="card-text-anuncio mb-0 ">
                                <ul>
                                    <li>Inmobiliarias</li>
                                    <li>Concesionarias</li>
                                    <li>Avisos particulares y destacados (con hipervínculo)</li>
                                    <li>Fúnebres</li>
                                    <li>Legales (edictos, convocatorias, licitaciones)</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <p className='fs-3 title-contacto'>DEPARTAMENTO PUBLICITARIO</p>
                <div className='row'>
                    <div className='col-12 col-sm-4'>
                        <p className='fs-5'> Ana E. Restuccia</p>
                        <p className='fs-5'> Gerenta Comercial & Marketing</p>
                        <p className='fs-5'> 280 436 6220</p>
                        <p className='fs-5'><a href="mailto: gcomercial@grupojornada.com">gcomercial@grupojornada.com </a> </p>
                    </div>
                    <div className='col-12 col-sm-4'>
                    <p className='fs-5'> Contacto Radio y Web</p>
                    <p className='fs-5'><a href="mailto: publicidadjornada@gmail.com">publicidadjornada@gmail.com </a> </p>
                </div>

                <div className='col-12 col-sm-4'>
                    <p className='fs-5'> Contacto Streaming, Clasificados, Podcast</p>
                    <p className='fs-5'><a href="mailto: avisosjornada@gmail.com">avisosjornada@gmail.com </a> </p>
                </div>
                </div>

            </div>

        </div>
    )
}
