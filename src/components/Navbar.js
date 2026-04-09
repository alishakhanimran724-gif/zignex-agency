import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'ABOUT',     href: '#about' },
  { label: 'SERVICES',  href: '#services' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  { label: 'TEAM',      href: '#team' },
  { label: 'REVIEWS',   href: '#reviews' },
];

export default function Navbar() {
  const [stuck,    setStuck]    = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  // Scroll → sticky shadow + active section highlight
  useEffect(() => {
    const secIds = ['services', 'portfolio', 'about', 'team', 'testi', 'contact'];

    const onScroll = () => {
      setStuck(window.scrollY > 60);
      let cur = '';
      secIds.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) cur = id;
      });
      setActiveId(cur);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${stuck ? ' stuck' : ''}`}>
        <div className="navbar-inner">

          {/* Logo */}
          <a href="#hero" className="logo">
            <div className="logo-icon">
              <img
                src="logo.png"
                alt="Zignex"
                onError={e => { e.target.style.display = 'none'; document.getElementById('logo-text').style.display = 'block'; }}
              />
              <span className="logo-fallback" id="logo-text">ZIGNEX</span>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="nav-links" id="NLINKS">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={activeId === href.slice(1) ? 'active' : ''}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Contact CTA */}
          <a href="#contact" className="contact-btn">
            <span className="contact-btn-label">CONTACT US</span>
            <div className="contact-btn-circle">
              <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </div>
          </a>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <svg viewBox="0 0 24 24">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6"  x2="6"  y2="18"/>
                  <line x1="6"  y1="6"  x2="18" y2="18"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="6"  x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </>
              )}
            </svg>
          </button>

        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobile-menu">
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a href="#contact" className="mobile-contact-btn" onClick={closeMenu}>
          CONTACT US
          <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </a>
      </div>
    </>
  );
}