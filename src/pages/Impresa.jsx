import React from 'react'
import '../styles/custom.css';
import pdfPath from '../../public/edicion-impresa.pdf'; 
import humor from '../assets/humor.png';

export default function Impresa() {
  return (
    <div className="container my-5">
      <h1 className='titleFunebres'> EDICIÓN IMPRESA </h1>
      <iframe src={pdfPath} title="Visor de PDF Local" className='visor-pdf'>
        Tu navegador no soporta iframes. Puedes descargar el PDF <a href={pdfPath} target="_blank" rel="noopener noreferrer">aquí</a>.
      </iframe>

      <h1 className='titleFunebres'> HUMOR </h1>
      <img className='img-fluid' src={humor}/>
    </div>
  )
}
