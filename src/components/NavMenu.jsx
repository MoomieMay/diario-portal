import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { IoMenu } from "react-icons/io5";
import '../styles/Header.css';

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(prev => !prev);
    const handleNavClick = () => setIsOpen(false); // cierra al hacer clic en un link

    return (
        <nav className="navbar navbar-expand-lg bg-light px-4 nav-menu">
            <div className="container-fluid">

                {/* Botón hamburguesa */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleToggle}
                >
                    <IoMenu size={24} /> SECCIONES
                </button>

                {/* Contenido colapsable */}
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} justify-content-between align-items-start align-items-lg-center`}>
                    <div className="navbar-nav gap-3">
                        <NavLink to="/" className="nav-link" onClick={handleNavClick}>INICIO</NavLink>
                        <NavLink to="/funebres" className="nav-link" onClick={handleNavClick}>FÚNEBRES</NavLink>
                        <NavLink to="/newsletters" className="nav-link" onClick={handleNavClick}>NEWSLETTERS</NavLink>
                        <NavLink to="/clasificados" className="nav-link" onClick={handleNavClick}>CLASIFICADOS</NavLink>
                        <NavLink to="/contacto" className="nav-link" onClick={handleNavClick}>CONTACTO</NavLink>
                    </div>

                    {/* Barra de búsqueda */}
                    <div className="position-relative mt-3 mt-lg-0 w-lg-auto">
                        <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-2 text-muted" />
                        <input
                            type="text"
                            className="form-control ps-3 pe-5"
                            aria-label="Buscar"
                            placeholder="Buscar..."
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavMenu;


