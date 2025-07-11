import React from 'react'
import error from '../assets/404.jpg'
import '../styles/custom.css'

export default function NotFound() {
  return (
    <div>
      <h1 className='text-center fw-bold mt-5'>Página no encontrada</h1>
      <img src={error} alt="Not Found" className="img-fluid d-block mx-auto mt-3" />
    </div>
  )
}
