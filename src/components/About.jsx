import React from 'react';

export default function About({ personal, education }) {
  return (
    <section id="about" className="bg-body-tertiary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-label"></span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A quick glimpse into my journey, how I approach software development, and what I enjoy outside of the editor.
          </p>
        </div>

        <div className="row g-5 align-items-center">
          {/* Left: Bio narrative */}
          <div className="col-lg-7">
            <div className="pe-lg-4">
              <h3 className="h4 fw-bold mb-3">
                Building reliable software with curiosity and care.
              </h3>
              {personal.bio.map((paragraph, index) => (
                <p key={index} className="text-secondary fs-6 mb-3">
                  {paragraph}
                </p>
              ))}

              <div className="mt-4 pt-2">
                <h4 className="h5 fw-bold mb-3">Things I prioritize in every project:</h4>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-start gap-2">
                      <i className="bi bi-check-circle-fill text-success fs-5 mt-1"></i>
                      <div>
                        <strong>Real Accessibility</strong>
                        <p className="small text-secondary mb-0">
                          Semantic markup, keyboard navigability, and clear contrast.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-start gap-2">
                      <i className="bi bi-check-circle-fill text-success fs-5 mt-1"></i>
                      <div>
                        <strong>Snappy Performance</strong>
                        <p className="small text-secondary mb-0">
                          Small bundles, efficient rendering, and fast first paint.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-start gap-2">
                      <i className="bi bi-check-circle-fill text-success fs-5 mt-1"></i>
                      <div>
                        <strong>Readable Code</strong>
                        <p className="small text-secondary mb-0">
                          Written for teammates and future maintainers, not just compilers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-start gap-2">
                      <i className="bi bi-check-circle-fill text-success fs-5 mt-1"></i>
                      <div>
                        <strong>Thoughtful UI</strong>
                        <p className="small text-secondary mb-0">
                          Natural interactions that don't make the user guess what to click.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick facts card */}
          <div className="col-lg-5">
            <div className="custom-card p-4">
              <h4 className="h5 fw-bold mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-person-lines-fill text-primary"></i>
                Quick Facts
              </h4>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                <li className="d-flex align-items-start gap-3">
                  <i className="bi bi-geo-alt text-primary fs-5 mt-1"></i>
                  <div>
                    <span className="small text-secondary d-block">Location</span>
                    <span className="fw-medium">{personal.location}</span>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <i className="bi bi-mortarboard text-primary fs-5 mt-1"></i>
                  <div>
                    <span className="small text-secondary d-block">Education</span>
                    <span className="fw-medium">{education[0].degree}</span>
                    <span className="small text-secondary d-block">{education[0].institution} ({education[0].period})</span>
                    <span className="fw-medium">{education[1].degree}</span>
                    <span className="small text-secondary d-block">{education[1].institution} ({education[1].period})</span>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <i className="bi bi-laptop text-primary fs-5 mt-1"></i>
                  <div>
                    <span className="small text-secondary d-block">Current Focus</span>
                    <span className="fw-medium">React 19, TypeScript & Design Systems</span>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <i className="bi bi-translate text-primary fs-5 mt-1"></i>
                  <div>
                    <span className="small text-secondary d-block">Languages</span>
                    <span className="fw-medium">English (Native)</span>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <i className="bi bi-heart text-danger fs-5 mt-1"></i>
                  <div>
                    <span className="small text-secondary d-block">Interests Outside Tech</span>
                    <span className="fw-medium">Film photography, cycling, specialty coffee</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
