import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import '../styles/Header.css';

const categories = [
  'POLÍTICA', 'POLICIALES', 'ECONOMÍA', 'DEPORTES',
  'MAGAZINE', 'SAPIENS', 'INTERNACIONAL', 'ESPECTÁCULOS',
  'GÉNEROS', 'ESPECIALES'
];

const Submenu = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const selected = e.target.value;
    if (selected) {
      navigate(`/categoria/${encodeURIComponent(selected.toLowerCase())}`);
    }
  };

  return (
    <>
      {/* Menú horizontal (solo desktop) */}
      {!isMobile && (
        <div className="submenu desktop-menu d-flex flex-wrap gap-3 justify-content-between align-items-center py-2 px-4">
          {categories.map((cat, index) => (
            <NavLink
              key={index}
              to={`/categoria/${encodeURIComponent(cat.toLowerCase())}`}
              className="submenu-item text-decoration-none text-dark"
            >
              {cat}
            </NavLink>
          ))}
        </div>
      )}

      {/* Menú desplegable (solo mobile) */}
      {isMobile && (
        <div className="submenu mobile-menu py-2 px-3">
          <select
            className="form-select"
            defaultValue=""
            onChange={handleChange}
          >
            <option value="" disabled>Seleccionar categoría</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default Submenu;
