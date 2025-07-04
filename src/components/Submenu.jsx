import React from 'react';
import '../styles/Header.css';

const categories = [
  'POLÍTICA', 'POLICIALES', 'ECONOMÍA', 'DEPORTES',
  'MAGAZINE', 'SAPIENS', 'INTERNACIONAL', 'ESPECTÁCULOS',
  'GÉNEROS', 'ESPECIALES'
];

const Submenu = () => {
  return (
    <div className="submenu justify-content-between align-items-center py-2 d-flex flex-wrap gap-3">
      {categories.map((cat, index) => (
        <span key={index} className="submenu-item">{cat}</span>
      ))}
    </div>
  );
};

export default Submenu;
