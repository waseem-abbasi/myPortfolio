import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact({ personal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'submitted' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Read credentials exclusively from .env
  const emailjsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setErrorMessage('');

    // Prepare template params matching standard EmailJS template variable names
    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      email: formData.email,
      from_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject.trim() || `New Portfolio Message from ${formData.name}`,
      message: formData.message,
      from_message: formData.message,
      user_message: formData.message,
      msg: formData.message,
      content: formData.message
    };

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      setStatus('submitted');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setErrorMessage(
        error?.text || 'Failed to send message. Please try again or reach out directly via email.'
      );
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="bg-body-tertiary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Whether you have an upcoming project, a full-time opportunity, or just want to discuss software development, my inbox is always open.
          </p>
        </div>

        <div className="row g-5 justify-content-center">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="col-lg-5">
            <div className="custom-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="h5 fw-bold mb-3">Direct Contact</h3>
                <p className="text-secondary small mb-4">
                  Prefer direct email or social media? Feel free to reach out via any channel below. I typically respond within 24 hours.
                </p>
                {/* Email Copy Card */}
                <div className="p-3 rounded-3 bg-body-tertiary border mb-4">
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <div className="text-truncate">
                      <span className="small text-secondary d-block">Email Address</span>
                      <a
                        href={`mailto:${personal.email}`}
                        className="fw-semibold text-reset text-truncate text-decoration-none"
                      >
                        {personal.email}
                      </a>
                    </div>
                    <button
                      type="button"
                      className={`btn btn-sm ${
                        copied ? 'btn-success' : 'btn-outline-primary'
                      } flex-shrink-0`}
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                    >
                      <i className={`bi ${copied ? 'bi-check-lg' : 'bi-clipboard'} me-1`}></i>
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* Location & Status */}
                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary"
                      style={{ width: '40px', height: '40px' }}
                    >
                      <i className="bi bi-geo-alt fs-5"></i>
                    </div>
                    <div>
                      <span className="small text-secondary d-block">Location</span>
                      <span className="fw-medium">{personal.location}</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success"
                      style={{ width: '40px', height: '40px' }}
                    >
                      <i className="bi bi-clock-history fs-5"></i>
                    </div>
                    <div>
                      <span className="small text-secondary d-block">Availability</span>
                      <span className="fw-medium">Open to opportunities</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-top">
                <span className="small text-secondary d-block mb-3">Find me online:</span>
                <div className="d-flex gap-2">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="bi bi-github me-1"></i> GitHub
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="bi bi-linkedin me-1"></i> LinkedIn
                  </a>
                  <a
                    href={personal.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="bi bi-twitter-x me-1"></i> Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="col-lg-7">
            <div className="custom-card p-4 p-md-5">
              <h3 className="h5 fw-bold mb-2">Send a Message</h3>
              <p className="small text-secondary mb-4">
                Fill out the form below and I'll receive it straight to my mailbox.
              </p>

              {status === 'submitted' ? (
                <div className="alert alert-success border-0 rounded-4 p-4 text-center my-4">
                  <div className="mb-2">
                    <i className="bi bi-check-circle-fill text-success fs-1"></i>
                  </div>
                  <h4 className="h5 fw-bold text-success mb-2">Message Sent!</h4>
                  <p className="small mb-3 text-secondary">
                    Thank you for reaching out. I've received your note and will reply as soon as possible.
                  </p>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-success"
                    onClick={() => setStatus('idle')}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {status === 'error' && (
                    <div className="alert alert-danger d-flex align-items-center gap-2 mb-3 py-2 px-3 small rounded-3">
                      <i className="bi bi-exclamation-triangle-fill flex-shrink-0"></i>
                      <div>{errorMessage}</div>
                    </div>
                  )}

                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="name" className="form-label small fw-semibold">
                        Your Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={status === 'submitting'}
                        className="form-control"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="email" className="form-label small fw-semibold">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={status === 'submitting'}
                        className="form-control"
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="subject" className="form-label small fw-semibold">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        disabled={status === 'submitting'}
                        className="form-control"
                        placeholder="Project inquiry / Opportunity / Hello"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="message" className="form-label small fw-semibold">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        disabled={status === 'submitting'}
                        rows="5"
                        className="form-control"
                        placeholder="Tell me a bit about what you have in mind..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="col-12 pt-2">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            <span>Sending message...</span>
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send-fill"></i>
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
