import React from 'react'
import '../styles/custom.css';
import banner from '../assets/stream-banner.png';
import videos from '../assets/videos.jpg';
import joplay from '../assets/joplay.jpg';

export default function Stream() {
    return (
        <div>
            <div className="container my-4">
                <img src={banner} alt="Stream Banner" className="img-fluid my-4 justify-content-center" />
            </div>

            <div className="container mt-4">
                <h1 className='titleFunebres'> ÚLTIMOS VIDEOS</h1>
                <div className="row">
                    <div className="col-md-3">
                        <img className='img-fluid' src={videos}/>
                        <p className='fs-5 mt-2 text-cat'>CATEGORÍA</p>
                        <p className='fs-5 fw-bold'> LOREM IPSUM </p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dolor eros.  </p>
                    </div>
                    <div className="col-md-3">
                        <img className='img-fluid' src={videos}/>
                        <p className='fs-5 mt-2 text-cat'>CATEGORÍA</p>
                        <p className='fs-5 fw-bold'> LOREM IPSUM </p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dolor eros.  </p>
                    </div>
                    <div className="col-md-3">
                        <img className='img-fluid' src={videos}/>
                        <p className='fs-5 mt-2 text-cat'>CATEGORÍA</p>
                        <p className='fs-5 fw-bold'> LOREM IPSUM </p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dolor eros.  </p>
                    </div>
                    <div className="col-md-3">
                        <img className='img-fluid' src={videos}/>
                        <p className='fs-5 mt-2 text-cat'>CATEGORÍA</p>
                        <p className='fs-5 fw-bold'> LOREM IPSUM </p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dolor eros.  </p>
                    </div>
                </div>

            </div>

            <div className="container my-5">
                <h1 className='titleFunebres'> JO PLAY</h1>
                <div className="row mb-5">
                    <div className="col-md-3">
                        <img className='img-fluid' src={joplay}/>
                        <p className='fs-5 mt-2 text-cat'>CATEGORÍA</p>
                        <p className='fs-5 fw-bold'> LOREM IPSUM </p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dolor eros.  </p>
                    </div>
                    <div className="col-md-3">
                        <img className='img-fluid' src={joplay}/>
                        <p className='fs-5 mt-2 text-cat'>CATEGORÍA</p>
                        <p className='fs-5 fw-bold'> LOREM IPSUM </p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dolor eros.  </p>
                    </div>
                    <div className="col-md-3">
                        <img className='img-fluid' src={joplay}/>
                        <p className='fs-5 mt-2 text-cat'>CATEGORÍA</p>
                        <p className='fs-5 fw-bold'> LOREM IPSUM </p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dolor eros.  </p>
                    </div>
                    <div className="col-md-3">
                        <img className='img-fluid' src={joplay}/>
                        <p className='fs-5 mt-2 text-cat'>CATEGORÍA</p>
                        <p className='fs-5 fw-bold'> LOREM IPSUM </p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dolor eros.  </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
