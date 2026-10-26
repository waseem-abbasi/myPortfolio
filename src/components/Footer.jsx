import React from 'react';

export default function Footer({ personal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="text-center text-md-start">
            <span className="fw-bold">{personal.name}</span>
            <span className="text-secondary mx-2">·</span>
            <span className="text-secondary small">
              © {currentYear} All rights reserved.
            </span>
          </div>

          <div className="text-center text-md-end text-secondary small">
           Built with passion, powered by code, and driven by curiosity.
          </div>
        </div>
      </div>
    </footer>
  );
}
