import React from 'react';

export default function Hero({ personal }) {
  return (
    <section id="hero" className="pt-5 pb-5 mt-5">
      <div className="container pt-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            {/* Status Indicator */}
            <div className="mb-4">
              <span className="status-pill">
                <span className="status-dot"></span>
                <span>{personal.statusBadge}</span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="display-4 fw-bold lh-sm mb-3">
              Hi, I'm <span className="text-primary">{personal.name}</span>.
              <br />
              <span className="text-secondary fw-normal fs-2 d-block mt-2">
                {personal.role}
              </span>
            </h1>

            {/* Punchy Subtitle */}
            <p className="lead text-secondary mb-4" style={{ maxWidth: '580px' }}>
              {personal.tagline} Based in <strong>{personal.location}</strong>. I focus on building dependable software with clean code, intuitive interfaces, and solid engineering foundations.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="#projects" className="btn btn-primary btn-lg shadow-sm">
                <i className="bi bi-briefcase me-2"></i>
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-secondary btn-lg">
                <i className="bi bi-chat-text me-2"></i>
                Get in Touch
              </a>
              <a
                href={personal.resumeUrl}
                download
                className="btn btn-light border btn-lg text-secondary"
                title="Download CV / Resume"
                onClick={(e) => {
                  console.log("url",personal.resumeUrl)
                  // If it's dummy link, alert nicely or open
                  if (personal.resumeUrl === '#resume') {
                    e.preventDefault();
                    window.location.hash = '#contact';
                  }
                }}
              >
                <i className="bi bi-file-earmark-arrow-down me-2"></i>
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="d-flex align-items-center gap-3 pt-2 text-secondary">
              <span className="small text-uppercase fw-bold letter-spacing-1">Connect:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px' }}
                aria-label="GitHub Profile"
              >
                <i className="bi bi-github fs-6"></i>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px' }}
                aria-label="LinkedIn Profile"
              >
                <i className="bi bi-linkedin fs-6"></i>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px' }}
                aria-label="Send Email"
              >
                <i className="bi bi-envelope-fill fs-6"></i>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Card & Quick Stats */}
          <div className="col-lg-5">
            <div className="custom-card p-4 p-md-5 text-center text-lg-start">
              <div className="d-flex flex-column flex-sm-row align-items-center gap-4 mb-4">
                <div className="hero-avatar-box flex-shrink-0">
                  <span>WA</span>
                </div>
                <div>
                  <h4 className="fw-bold mb-1">{personal.name}</h4>
                  <p className="text-secondary small mb-2">Full Stack Developer</p>
                  <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1">
                    <i className="bi bi-geo-alt-fill me-1"></i> Ajmer,Rajasthan / Remote
                  </span>
                </div>
              </div>

              <hr className="my-4 opacity-25" />

              {/* Stats Grid */}
              <div className="row g-3">
                {personal.stats.map((stat, idx) => (
                  <div key={idx} className="col-6">
                    <div className="stat-box">
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
