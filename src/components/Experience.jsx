import React from 'react';

export default function Experience({ experience, education }) {
  return (
    <section id="experience" className="bg-body-tertiary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-label">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            A chronological timeline of roles where I've contributed to engineering teams, shipped features, and grown as a developer.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            {/* Timeline container */}
            <div className="timeline">
              {experience.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="custom-card p-4">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                      <div>
                        <h3 className="h5 fw-bold mb-0">{item.role}</h3>
                        <span className="text-primary fw-medium">{item.company}</span>
                        <span className="text-secondary small ms-2">
                          <i className="bi bi-geo-alt me-1"></i>
                          {item.location}
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="badge bg-secondary-subtle text-secondary border">
                          {item.type}
                        </span>
                        <span className="badge bg-primary-subtle text-primary border border-primary-subtle">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-secondary small mt-2 mb-3">{item.description}</p>

                    {/* Bullet Points */}
                    <ul className="mb-3 ps-3 text-secondary small">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="mb-1">
                          {pt}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies used */}
                    <div className="d-flex flex-wrap gap-1 pt-2 border-top">
                      <span className="small text-secondary me-2 align-self-center">Tech:</span>
                      {item.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-pill" style={{ fontSize: '0.72rem' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Box */}
            <div className="mt-5 pt-3">
              <h4 className="h5 fw-bold mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-mortarboard-fill text-primary"></i>
                Formal Education
              </h4>
              <div className="row g-3">
                {education.map((edu, idx) => (
                  <div key={idx} className="col-12">
                    <div className="custom-card p-4 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
                      <div>
                        <h5 className="h6 fw-bold mb-1">{edu.degree}</h5>
                        <p className="text-secondary small mb-1">{edu.institution}</p>
                        <p className="text-secondary small mb-0">{edu.details}</p>
                      </div>
                      <span className="badge bg-body text-body border align-self-start align-self-sm-center">
                        {edu.period}
                      </span>
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
