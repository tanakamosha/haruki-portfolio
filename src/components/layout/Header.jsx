import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on location change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClass = (name) => {
    if (name === 'home') {
      return (location.pathname === '/' || location.pathname === '') ? 'active' : '';
    }
    return location.pathname.startsWith(`/${name}`) ? 'active' : '';
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} fixed top-0 w-full z-50`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)' }}>
      <div className="header-container">
        <div className="logo header-logo">
          <Link to="/" className="header-logo-link">
            <img src="/rogo.svg" alt="Haruki Wakiyama Logo" className="header-logo-img" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav hidden md:flex">
          <ul className="nav-links">
            <li><Link to="/" className={getLinkClass('home')}>HOME</Link></li>
            <li><Link to="/works" className={getLinkClass('works')}>WORKS</Link></li>
            <li><Link to="/service" className={getLinkClass('service')}>SERVICE</Link></li>
            <li><Link to="/about" className={getLinkClass('about')}>ABOUT</Link></li>
            {/* CONTACT link hidden on desktop as CTA button takes precedence */}
          </ul>
          <Link to="/contact" className="btn-header-cta">
            無料相談・お見積り
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle md:hidden p-2 rounded-md bg-transparent border-none transition-colors duration-200 flex items-center justify-center flex-shrink-0 outline-none md:mr-0 ${isMenuOpen ? 'open text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`mobile-nav-overlay md:hidden ${isMenuOpen ? 'open' : ''}`}>
          {/* Explicit Close Button Inside Overlay Removed - Toggle button handles it now */}


          <ul className="mobile-nav-links">
            <li><Link to="/" className={getLinkClass('home')} onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
            <li><Link to="/works" className={getLinkClass('works')} onClick={() => setIsMenuOpen(false)}>WORKS</Link></li>
            <li><Link to="/service" className={getLinkClass('service')} onClick={() => setIsMenuOpen(false)}>SERVICE</Link></li>
            <li><Link to="/about" className={getLinkClass('about')} onClick={() => setIsMenuOpen(false)}>ABOUT</Link></li>
            <li><Link to="/contact" className={getLinkClass('contact')} onClick={() => setIsMenuOpen(false)}>CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
