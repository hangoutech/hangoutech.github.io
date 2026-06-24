import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Col, Row } from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";
import "./ContactPage.scss";

const INDUSTRIES = ["Healthcare", "EdTech", "Logistics", "Retail / D2C", "Other"];
const PROJECT_TYPES = ["Web App", "Mobile App", "Hospital Management System", "Ecommerce Platform", "Consulting", "Other"];
const BUDGETS = ["Under ₹1L", "₹1L – ₹5L", "₹5L – ₹20L", "₹20L+", "Not Sure"];
const SOURCES = ["Google Search", "LinkedIn", "Email / Cold Outreach", "Referral", "Other"];

const INITIAL = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  industry: "",
  projectType: "",
  budget: "",
  message: "",
  source: "",
};

const ContactPage = () => {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const responsive = isMobile || isTablet;

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Name is required";
    if (!form.company.trim()) e.company = "Company is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.industry) e.industry = "Please select an industry";
    if (!form.projectType) e.projectType = "Please select a project type";
    if (!form.message.trim() || form.message.trim().length < 20) e.message = "Please describe your project (min 20 characters)";
    return e;
  };

  const handle = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "e31d626e-df48-4ef1-b99c-a05ba9a4addc",
          subject: `New Enquiry from ${form.fullName} — ${form.company}`,
          from_name: "Hangoutech Website",
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          company: form.company,
          industry: form.industry,
          project_type: form.projectType,
          budget: form.budget || "Not specified",
          source: form.source || "Not specified",
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please email us directly at info@hangoutech.com");
      }
    } catch {
      alert("Something went wrong. Please email us directly at info@hangoutech.com");
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <div className={`contact-page ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2 className="success-title">Message Received!</h2>
          <p className="success-sub">
            Thank you for reaching out. Our team will review your enquiry and get back to you within 24 hours.
          </p>
          <button className="btn-electric mt-4" onClick={() => setSubmitted(false)}>
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Hangoutech: Custom Software Development India</title>
        <meta
          name="description"
          content="Get in touch with Hangoutech. Tell us about your project in Healthcare, EdTech, Logistics or D2C. We'll respond within 24 hours."
        />
        <link rel="canonical" href="https://hangoutech.com/contact" />
      </Helmet>

      <div className={`contact-page ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">Get In Touch</p>
          <h1 className="section-title">Tell Us About Your Project</h1>
          <p className="section-subtitle mx-auto mt-3">
            Fill in the form below and a member of our team will respond within 24 hours. No sales pitch.
            Just a real conversation about what you're building.
          </p>
        </div>

        <Row className="g-5">
          {/* ── FORM ── */}
          <Col lg={7}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <Row className="g-3">
                <Col md={6}>
                  <div className="form-group">
                    <label>Full Name <span className="required">*</span></label>
                    <input
                      type="text"
                      className={`form-input ${errors.fullName ? "input-error" : ""}`}
                      placeholder="Your full name"
                      value={form.fullName}
                      onChange={handle("fullName")}
                      maxLength={80}
                    />
                    {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label>Company / Organisation <span className="required">*</span></label>
                    <input
                      type="text"
                      className={`form-input ${errors.company ? "input-error" : ""}`}
                      placeholder="Your company name"
                      value={form.company}
                      onChange={handle("company")}
                      maxLength={120}
                    />
                    {errors.company && <span className="error-msg">{errors.company}</span>}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label>Email Address <span className="required">*</span></label>
                    <input
                      type="email"
                      className={`form-input ${errors.email ? "input-error" : ""}`}
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handle("email")}
                    />
                    {errors.email && <span className="error-msg">{errors.email}</span>}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label>Phone Number <span className="required">*</span></label>
                    <input
                      type="tel"
                      className={`form-input ${errors.phone ? "input-error" : ""}`}
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handle("phone")}
                    />
                    {errors.phone && <span className="error-msg">{errors.phone}</span>}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label>Industry <span className="required">*</span></label>
                    <select
                      className={`form-input form-select-input ${errors.industry ? "input-error" : ""}`}
                      value={form.industry}
                      onChange={handle("industry")}
                    >
                      <option value="">Select your industry</option>
                      {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                    {errors.industry && <span className="error-msg">{errors.industry}</span>}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label>Project Type <span className="required">*</span></label>
                    <select
                      className={`form-input form-select-input ${errors.projectType ? "input-error" : ""}`}
                      value={form.projectType}
                      onChange={handle("projectType")}
                    >
                      <option value="">What are you building?</option>
                      {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.projectType && <span className="error-msg">{errors.projectType}</span>}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label>Budget Range <span className="optional">(optional)</span></label>
                    <select
                      className="form-input form-select-input"
                      value={form.budget}
                      onChange={handle("budget")}
                    >
                      <option value="">Select budget range</option>
                      {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label>How did you find us? <span className="optional">(optional)</span></label>
                    <select
                      className="form-input form-select-input"
                      value={form.source}
                      onChange={handle("source")}
                    >
                      <option value="">Select source</option>
                      {SOURCES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    <label>Project Description <span className="required">*</span></label>
                    <textarea
                      className={`form-input form-textarea ${errors.message ? "input-error" : ""}`}
                      placeholder="Tell us about your project. What you're building, the problem you're solving, and your timeline."
                      value={form.message}
                      onChange={handle("message")}
                      rows={5}
                    />
                    {errors.message && <span className="error-msg">{errors.message}</span>}
                    <span className="char-count">{form.message.length} / 2000</span>
                  </div>
                </Col>
              </Row>

              <button type="submit" className="btn-electric submit-btn mt-4" disabled={loading}>
                {loading ? "Sending..." : "Send Message →"}
              </button>
              <p className="form-note mt-3">
                We respond to all enquiries within 24 hours. Your information is kept confidential.
              </p>
            </form>
          </Col>

          {/* ── CONTACT INFO ── */}
          <Col lg={5}>
            <div className="contact-info-card card-surface">
              <h3 className="contact-info-title">Contact Information</h3>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span className="contact-info-icon"><FaMapMarkerAlt size={18} /></span>
                  <div>
                    <strong>Registered Office</strong>
                    <p>No: 26, Madeena Nagar, Vannivedu,<br />Walajapet – 632513, Tamil Nadu, India.</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon"><FaPhone size={16} /></span>
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:+919698338807">+91 96983 38807</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon"><TbMailFilled size={18} /></span>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:info@hangoutech.com">info@hangoutech.com</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon"><FaLinkedin size={18} /></span>
                  <div>
                    <strong>LinkedIn</strong>
                    <p>
                      <a href="https://in.linkedin.com/company/hangoutech" target="_blank" rel="noopener noreferrer">
                        linkedin.com/company/hangoutech
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="response-promise mt-4">
                <div className="promise-badge">⚡ 24h Response Guarantee</div>
                <p className="promise-text">
                  Every enquiry submitted through this form receives a response within one business day.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ContactPage;
