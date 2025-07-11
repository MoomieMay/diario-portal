import React from 'react';
import '../styles/Header.css';
import { FaCloudSun } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="top-bar d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
      <span className="mb-1 mb-md-0">Dólar Oficial: $990,31 | Blue: $1260,00 | Turista: $1584,50</span>
      <span className="mb-1 mb-md-0">Jueves 05 de septiembre de 2024 - 00:53</span>
      <span><FaCloudSun /> 15°C</span>
    </div>
  );
};

export default TopBar;

