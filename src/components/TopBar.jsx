import React from 'react';
import '../styles/Header.css';
import { FaCloudSun } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="top-bar d-flex justify-content-between">
      <span>Dólar Oficial: $990,31 Dólar Blue: $1260,00 Dólar Turista $1584,50</span>
      <span>Jueves 05 de septiembre de 2024 - 00:53</span>
      <span><FaCloudSun /> 15°C</span>
    </div>
  );
};

export default TopBar;
