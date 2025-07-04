import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { IoMenu } from "react-icons/io5";
import '../styles/Header.css';


const NavMenu = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light px-4 nav-menu">
            <div className="container-fluid d-flex justify-content-between align-items-center">

                {/* Menú de navegación a la izquierda */}
                <div className="navbar-nav gap-3">
                    <span><IoMenu /></span>
                    <NavLink to="/" className="nav-link">INICIO</NavLink>
                    <NavLink to="/funebres" className="nav-link">FÚNEBRES</NavLink>
                    <NavLink to="/newsletters" className="nav-link">NEWSLETTERS</NavLink>
                    <NavLink to="/clasificados" className="nav-link">CLASIFICADOS</NavLink>
                    <NavLink to="/contacto" className="nav-link">CONTACTO</NavLink>
                </div>

                {/* Barra de búsqueda a la derecha */}
                <div className="position-relative">
                    <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-2 text-muted" />
                    <input
                        type="text"
                        className="form-control ps-5"
                        aria-label="Buscar"
                    />
                </div>
            </div>
        </nav>
    );
};

export default NavMenu;
