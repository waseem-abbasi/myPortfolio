import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

export default function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'Tools'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  // Function to get distinct icons for project thumbnails
  const getProjectIcon = (id) => {
    switch (id) {
      case 'focusflow':
        return 'bi-check2-square';
      case 'devpulse':
        return 'bi-bar-chart-line';
      case 'craft-commerce':
        return 'bi-bag-check';
      case 'paper-docs':
        return 'bi-journal-code';
      case 'weather-minimal':
        return 'bi-cloud-sun';
      case 'snippet-vault':
        return 'bi-code-slash';
      default:
        return 'bi-app';
    }
  };

  return (
    <section id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            A collection of real-world apps, tools, and experiments I've built. Each project represents specific architectural problems solved.
          </p>

          {/* Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`btn btn-sm px-3 rounded-pill ${activeFilter === category
                  ? 'btn-primary'
                  : 'btn-outline-secondary'
                  }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="card custom-card project-card shadow-sm h-100">
                <div className="card-body">
               
                  <div
                    className="position-relative overflow-hidden rounded-3 mb-4"
                    style={{ height: '220px' }}
                  >
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={`${project.title} screenshot`}
                        className="w-100 h-100 object-fit-cover d-block"
                      />
                    ) : (
                      <i
                        className={`bi ${getProjectIcon(project.id)} project-thumbnail-icon`}
                      ></i>
                    )}

                    <span className="badge bg-body text-body border position-absolute top-0 end-0 m-3 shadow-sm">
                      {project.category}
                    </span>
                  </div>


                  {/* Title & Subtitle */}
                  <h3 className="card-title h5 fw-bold mb-1">{project.title}</h3>
                  <p className="text-secondary small fw-medium mb-3">{project.subtitle}</p>

                  {/* Description */}
                  <p className="card-text text-secondary small flex-grow-1 mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="d-flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span key={idx} className="tech-pill">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="tech-pill">+{project.tags.length - 4}</span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                    <button
                      type="button"
                      className="btn btn-sm btn-link text-decoration-none p-0 text-primary fw-semibold d-inline-flex align-items-center gap-1"
                      onClick={() => setSelectedProject(project)}
                    >
                      <span>Read Story</span>
                      <i className="bi bi-chevron-right small"></i>
                    </button>

                    <div className="d-flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-outline-secondary"
                        aria-label={`Source code for ${project.title}`}
                        title="View Source Code"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-primary"
                        aria-label={`Live demo of ${project.title}`}
                        title="Live Demo"
                      >
                        <i className="bi bi-box-arrow-up-right me-1"></i> Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for project details */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
