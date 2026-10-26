import React, { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme, personal }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    if (!isNavCollapsed) {
      setIsNavCollapsed(true);
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-custom ${
        scrolled ? 'shadow-sm py-2' : 'py-3'
      }`}
      aria-label="Main Navigation"
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#hero">
          <span
            className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-3 fs-6"
            style={{ width: '34px', height: '34px', fontWeight: 700 }}
          >
            AM
          </span>
          <span className="fs-5 text-reset">{personal.name}</span>
        </a>

        {/* Mobile toggles */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <button
            className="btn btn-sm btn-outline-secondary d-flex align-items-center justify-content-center p-2 rounded-circle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <i className="bi bi-sun-fill text-warning fs-6"></i>
            ) : (
              <i className="bi bi-moon-stars-fill text-primary fs-6"></i>
            )}
          </button>

          <button
            className="navbar-toggler border-0 shadow-none p-1"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          >
            <i className={`bi ${isNavCollapsed ? 'bi-list' : 'bi-x-lg'} fs-3`}></i>
          </button>
        </div>

        {/* Desktop and collapsible links */}
        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1 my-3 my-lg-0">
            <li className="nav-item">
              <a className="nav-link text-reset" href="#about" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-reset" href="#projects" onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-reset" href="#experience" onClick={handleLinkClick}>
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-reset" href="#skills" onClick={handleLinkClick}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-reset" href="#contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>

            {/* Desktop Theme Toggle */}
            <li className="nav-item ms-lg-2 d-none d-lg-block">
              <button
                className="btn btn-sm btn-outline-secondary d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: '38px', height: '38px' }}
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <i className="bi bi-sun-fill text-warning"></i>
                ) : (
                  <i className="bi bi-moon-stars-fill text-primary"></i>
                )}
              </button>
            </li>

            {/* Contact / Resume CTA */}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a
                href="#contact"
                className="btn btn-primary btn-sm px-3"
                onClick={handleLinkClick}
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
