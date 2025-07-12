import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo-foot.png';
import googlePlay from '../assets/google-play.webp';
import '../styles/custom.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 mt-5 footer">
      {/* Fila superior */}
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-4 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start gap-3 fs-4">
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
            <FaXTwitter />
          </div>
          <div className="col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
            <img src={logo} alt="Logo Footer" height="60" />
          </div>
          <div className="col-md-4 d-flex justify-content-center justify-content-md-end">
            <img src={googlePlay} alt="Google Play" height="50" />
          </div>
        </div>

        {/* Separador blanco */}
        <hr className="border-white my-4" />

        {/* Fila final */}
        <div className="row pb-3">
          <div className="col text-center small">
            &copy; 2024 | CTRL Kraken
          </div>
        </div>
      </div>
      <a
        href="https://wa.me/5491123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-footer-icon"
      >
        <FaWhatsapp size={45} />
      </a>
    </footer>
  );
};

export default Footer;
