import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Active Section State
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy for Home Page
      if (location.pathname === '/' || location.pathname === '') {
        const scrollPosition = window.scrollY + 100; // Offset for header

        const sections = [
          { id: 'section-home', name: 'home' },
          { id: 'section-works', name: 'works' },
          { id: 'section-service', name: 'service' },
          { id: 'contact', name: 'contact' }
        ];

        let found = false;
        // Check sections in reverse order to catch the last one first if overlapping
        // Or standard: find first one that matches
        // Actually, let's just find the one where scroll >= top
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const element = document.getElementById(section.id);
          if (element) {
            if (scrollPosition >= element.offsetTop) {
              setActiveSection(section.name);
              found = true;
              break;
            }
          }
        }
        if (!found && window.scrollY < 100) setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle Location Change for non-home pages
  useEffect(() => {
    if (location.pathname !== '/') {
      if (location.pathname.startsWith('/works')) setActiveSection('works');
      else if (location.pathname.startsWith('/service')) setActiveSection('service');
      else if (location.pathname.startsWith('/about')) setActiveSection('about');
      else if (location.pathname.startsWith('/contact')) setActiveSection('contact');
      else setActiveSection('');
    } else {
      // Reset to home or trigger scroll handler (handled above)
      // Ensure home is default if at top
      if (window.scrollY < 100) setActiveSection('home');
    }
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClass = (name) => {
    return activeSection === name ? 'active' : '';
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} fixed top-0 w-full z-50`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)' }}>
      <div className="header-container">
        <div className="logo ml-5 mt-2 md:ml-0 md:mt-0">
          <Link to="/" className="text-slate-900 font-bold text-xl tracking-wider">Haruki Wakiyama</Link>
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
        <button className="mobile-menu-toggle md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`mobile-nav-overlay md:hidden ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><Link to="/" className={getLinkClass('home')} onClick={() => setIsMenuOpen(false)} style={{ color: activeSection === 'home' ? '#2563eb' : '#0f172a' }}>HOME</Link></li>
            <li><Link to="/works" className={getLinkClass('works')} onClick={() => setIsMenuOpen(false)} style={{ color: activeSection === 'works' ? '#2563eb' : '#0f172a' }}>WORKS</Link></li>
            <li><Link to="/service" className={getLinkClass('service')} onClick={() => setIsMenuOpen(false)} style={{ color: activeSection === 'service' ? '#2563eb' : '#0f172a' }}>SERVICE</Link></li>
            <li><Link to="/about" className={getLinkClass('about')} onClick={() => setIsMenuOpen(false)} style={{ color: activeSection === 'about' ? '#2563eb' : '#0f172a' }}>ABOUT</Link></li>
            <li><Link to="/contact" className={getLinkClass('contact')} onClick={() => setIsMenuOpen(false)} style={{ color: activeSection === 'contact' ? '#2563eb' : '#0f172a' }}>CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
