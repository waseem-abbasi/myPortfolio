import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content custom-card border-0 shadow-lg">
          {/* Header */}
          <div className="modal-header border-bottom pb-3">
            <div>
              <span className="badge bg-primary-subtle text-primary border border-primary-subtle mb-1">
                {project.category}
              </span>
              <h3 className="modal-title fs-4 fw-bold">{project.title}</h3>
            </div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body py-4">
            <h5 className="fw-semibold text-secondary mb-2">{project.subtitle}</h5>
            <p className="text-secondary mb-4">{project.description}</p>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-4">
                <h6 className="fw-bold mb-2 text-uppercase text-secondary small">
                  Key Technical Highlights
                </h6>
                <ul className="list-group list-group-flush border rounded-3 overflow-hidden">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="list-group-item bg-transparent d-flex align-items-center gap-2">
                      <i className="bi bi-arrow-right-short text-primary fs-5"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h6 className="fw-bold mb-2 text-uppercase text-secondary small">
                Technologies & Tools
              </h6>
              <div className="d-flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tech-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer border-top pt-3 d-flex justify-content-between">
            <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
              Close
            </button>
            <div className="d-flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark"
              >
                <i className="bi bi-github me-1"></i> View Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <i className="bi bi-box-arrow-up-right me-1"></i> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
