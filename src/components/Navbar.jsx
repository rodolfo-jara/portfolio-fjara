import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar el clic en el logo (solo hará algo en móvil)
  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        
        {/* Logo: La clase 'is-mobile-toggle' solo hará efectos en el CSS de móvil */}
        <div 
          className={`logo-section ${isOpen ? 'active-logo' : ''} is-mobile-toggle`} 
          onClick={toggleMenu}
        >
          <div className="logo-box">
            {/* Solo mostramos la X si está abierto Y es móvil */}
            {isOpen ? '✕' : 'F'}
          </div>
          <span className="logo-name">FAUSTO JARA</span>
        </div>

        <ul className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          <li onClick={closeMenu}>Sobre mí</li>
          <li onClick={closeMenu}>Proyectos</li>
          <li onClick={closeMenu}>Tecnologías</li>
          <li onClick={closeMenu}>Contacto</li>
        </ul>

        <div className="nav-actions">
          <button className="btn-talk">Descargar CV</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;