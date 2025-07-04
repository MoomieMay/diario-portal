import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';
import { MdOndemandVideo } from "react-icons/md";
import { IoMdHeadset } from "react-icons/io";
import { RiNewsFill } from "react-icons/ri";

const Header = () => {
    return (
        <div className="d-flex justify-content-between align-items-center border-bottom header-logo">
            <img src={logo} alt="Logo Diario" height="100" />
            <div className="d-flex flex-column align-items-end gap-2">
                <a href="https://jornadastream.com" target="_blank">JORNADASTREAM <MdOndemandVideo /></a>
                <a href="https://cadenatiempo.ar" target="_blank">CADENATIEMPO <IoMdHeadset /></a>
                <a href="/edición-impresa.pdf" target="_blank">EDICIÓN IMPRESA <RiNewsFill /></a>
            </div>

        </div>
    );
};

export default Header;
