import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { noticias } from '../data/noticiasData';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Submenu from '../components/Submenu';
import '../styles/custom.css';

const Noticia = () => {
    const { id } = useParams();
    const noticia = noticias.find((n) => n.id === id);

    if (!noticia) return <p>Noticia no encontrada</p>;

    const fechaFormateada = new Date(noticia.fecha).toLocaleString('es-AR');

    const relacionadas = noticias.filter(n => noticia.relacionadas.includes(n.id));

    return (
        <div>
            <Submenu />

            <div className="container mt-5">
                <h1 className="fw-bold">{noticia.titulo}</h1>
                <p className="text-muted">{fechaFormateada}</p>
                <img src={noticia.imagen} alt={noticia.titulo} className="img-fluid my-3 img-noticia" />
                <p className="lead my-3">{noticia.texto}</p>

                <div className="my-3">
                    <strong>Palabras clave:</strong>
                    {noticia.palabrasClave.map((p, i) => (
                        <span key={i} className="badge bg-danger mx-1">{p}</span>
                    ))}
                </div>

                <div className="my-3 d-flex gap-3">
                    <a href="#" className="text-primary"><FaFacebook size={20} /></a>
                    <a href="#" className="text-info"><FaTwitter size={20} /></a>
                    <a href="#" className="text-success"><FaWhatsapp size={20} /></a>
                </div>

                <hr className='mt-5' />

                <h4>Noticias relacionadas</h4>
                <div className="row">
                    {relacionadas.map((rel) => (
                        <div className="col-md-4" key={rel.id}>
                            <Link to={`/noticia/${rel.id}`} className="text-decoration-none text-dark">
                                <div className="news-card small my-2">
                                    <img src={rel.imagen} alt={rel.titulo} className="img-fluid" />
                                    <div className="overlay">
                                        <div className="headline">{rel.titulo}</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Noticia;
