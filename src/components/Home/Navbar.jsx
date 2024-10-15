import React, { useState, useEffect } from 'react';
import Logo from '../../assets/SO_Main.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavLinkClick = () => {
    if (window.innerWidth < 1024) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="static-nav">
      <nav className="nav-bar">
        <div className="menu-icon"  onClick={() => setIsMenuOpen(true)}>
          {isMenuOpen ? null : <span className="fas fa-bars"></span>}
        </div>

        <div className="cancel-icon" onClick={() => setIsMenuOpen(false)}>
          {isMenuOpen ? <span className="fas fa-times"></span> : ""}
        </div>

        <div className="logo">
          <img src={Logo} alt="Main Logo" loading='eager'/>
        </div>

        <ul className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" data-i18n-key="home" onClick={handleNavLinkClick}>Home</a></li>
          <li><a href="#about" data-i18n-key="about" onClick={handleNavLinkClick}>About</a></li>
          <li><a href="#projects" data-i18n-key="projects" onClick={handleNavLinkClick}>Projects</a></li>
          <li><a href="#contact" data-i18n-key="contact" onClick={handleNavLinkClick}>Contact</a></li>
          <li><a href="#visit" data-i18n-key="visit-us" onClick={handleNavLinkClick}>Visit Us</a></li>
        </ul>
      </nav>
    </div>
  );
}
