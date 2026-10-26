import React from 'react';

export default function Skills({ skills }) {
  return (
    <section id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-label">Toolkit</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Tools and technologies I use daily to turn requirements into clean, dependable products.
          </p>
        </div>

        <div className="row g-4">
          {/* Frontend */}
          <div className="col-md-6 col-lg-4">
            <div className="custom-card skill-card">
              <div className="d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-window-fullscreen fs-4 text-primary"></i>
                <h3 className="h5 fw-bold mb-0">Frontend</h3>
              </div>
              <p className="small text-secondary mb-3">
                UI components, state architecture, and accessible markup.
              </p>
              <div className="d-flex flex-column gap-2">
                {skills.frontend.map((skill, idx) => (
                  <div key={idx} className="skill-badge">
                    <span>{skill.name}</span>
                    <span className="skill-level-text">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="col-md-6 col-lg-4">
            <div className="custom-card skill-card">
              <div className="d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-server fs-4 text-primary"></i>
                <h3 className="h5 fw-bold mb-0">Backend & Data</h3>
              </div>
              <p className="small text-secondary mb-3">
                RESTful APIs, database design, and cloud services.
              </p>
              <div className="d-flex flex-column gap-2">
                {skills.backend.map((skill, idx) => (
                  <div key={idx} className="skill-badge">
                    <span>{skill.name}</span>
                    <span className="skill-level-text">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Workflow */}
          <div className="col-md-6 col-lg-4">
            <div className="custom-card skill-card">
              <div className="d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-gear-wide-connected fs-4 text-primary"></i>
                <h3 className="h5 fw-bold mb-0">Tools & DevOps</h3>
              </div>
              <p className="small text-secondary mb-3">
                Build tools, version control, testing, and prototyping.
              </p>
              <div className="d-flex flex-column gap-2">
                {skills.tools.map((skill, idx) => (
                  <div key={idx} className="skill-badge">
                    <span>{skill.name}</span>
                    <span className="skill-level-text">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Principles Card */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="custom-card p-4 p-md-5">
              <div className="row align-items-center g-4">
                <div className="col-lg-4">
                  <h3 className="h5 fw-bold mb-2">Core Engineering Principles</h3>
                  <p className="small text-secondary mb-0">
                    Tools come and go, but strong software engineering fundamentals stay relevant across any stack.
                  </p>
                </div>
                <div className="col-lg-8">
                  <div className="row g-2">
                    {skills.principles.map((principle, idx) => (
                      <div key={idx} className="col-sm-6">
                        <div className="d-flex align-items-center gap-2 p-2 rounded-3 bg-body-tertiary border">
                          <i className="bi bi-shield-check text-primary"></i>
                          <span className="small fw-medium">{principle}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
