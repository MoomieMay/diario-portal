import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Header.css';
import { MdOndemandVideo } from "react-icons/md";
import { IoMdHeadset } from "react-icons/io";
import { RiNewsFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-bottom header-logo text-center text-md-start">
      <img src={logo} alt="Logo Diario" height="80" className="mb-3 mb-md-0 logo-header" />
      
      <div className="d-flex flex-column align-items-center align-items-md-end gap-2">
        <NavLink to="/stream" className="nav-link-header">JORNADASTREAM <MdOndemandVideo /></NavLink>
        <NavLink to="/radio" className="nav-link-header">CADENATIEMPO <IoMdHeadset /></NavLink>
        <NavLink to="/impresa" className="nav-link-header">EDICIÓN IMPRESA <RiNewsFill /></NavLink>
      </div>
    </div>
  );
};


export default Header;
