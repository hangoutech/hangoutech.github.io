import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Col, Row } from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";
import {
  FaLinkedin, FaHospital, FaGraduationCap, FaTruck, FaBagShopping,
  FaRocket, FaHandshake, FaCode, FaGlobe,
} from "react-icons/fa6";
import "./AboutPage.scss";

const values = [
  { icon: <FaRocket size={28} />, title: "Ship Fast, Learn Faster", desc: "We get working software in front of real users quickly. Demos every 2 weeks, not big deliveries at month 6." },
  { icon: <FaHandshake size={28} />, title: "Know the Domain First", desc: "We don't just write code. We learn your industry, your users, and your business model before writing the first line." },
  { icon: <FaCode size={28} />, title: "Quality Without Overengineering", desc: "We build what is needed, done well. No unnecessary abstractions, no feature bloat. The right tech for the right stage." },
  { icon: <FaGlobe size={28} />, title: "Global Mindset, Indian Roots", desc: "Built in India, serving clients globally. We understand both the cost-sensitivity of Indian markets and the quality bar of global ones." },
];

const industries = [
  { icon: <FaHospital size={20} />, name: "Healthcare", color: "#2D7DD2", path: "/industries/healthcare" },
  { icon: <FaGraduationCap size={20} />, name: "EdTech", color: "#F59E0B", path: "/industries/edtech" },
  { icon: <FaTruck size={20} />, name: "Logistics", color: "#10B981", path: "/industries/logistics" },
  { icon: <FaBagShopping size={20} />, name: "Retail & D2C", color: "#EC4899", path: "/industries/retail-d2c" },
];

const timeline = [
  { year: "2021", title: "Hangoutech Founded", desc: "Tejesh Pichandi and Rehman Sheriff founded Hangoutech with a focus on building high-quality digital products for underserved industry verticals in India." },
  { year: "2022", title: "First Enterprise Client", desc: "Delivered our first enterprise-grade web application for a B2B client, establishing our delivery process and engineering standards." },
  { year: "2023", title: "Healthcare & EdTech Focus", desc: "Doubled down on Healthcare and EdTech verticals, delivering HMS and LMS products for clients across India and internationally." },
  { year: "2024", title: "Global Client Reach", desc: "Expanded to serve clients in the USA, UK, Australia, and Canada, while keeping our engineering base in India." },
  { year: "2025", title: "Product-Led Growth", desc: "Launched dedicated industry practices for Logistics and D2C, with a team of 15+ engineers and designers across verticals." },
  { year: "2026", title: "Scaling Up", desc: "Building our playbook for industry-specific software that actually moves the numbers, not just launching and walking away." },
];

const stats = [
  { number: "20+", label: "Projects Delivered" },
  { number: "5", label: "Countries Served" },
  { number: "4", label: "Industry Verticals" },
  { number: "3+", label: "Years of Expertise" },
];

const AboutPage = () => {
  const responsive = isMobile || isTablet;

  return (
    <>
      <Helmet>
        <title>About Hangoutech | Software Development Company India</title>
        <meta
          name="description"
          content="Hangoutech is a product-focused software development company based in India. Founded by Tejesh Pichandi and Rehman Sheriff. We build digital products for Healthcare, EdTech, Logistics and D2C brands."
        />
        <link rel="canonical" href="https://hangoutech.com/about" />
      </Helmet>

      {/* ── HERO ── */}
      <section className={`about-hero ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center">
          <p className="section-label">About Us</p>
          <h1 className="about-hero-h1">
            We're a Product-Focused Software Team<br />
            <span className="text-electric">Building for Specific Industries</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4" style={{ maxWidth: 620 }}>
            Hangoutech is a software development company based in Tamil Nadu, India. We partner with
            healthcare providers, EdTech platforms, logistics companies, and D2C brands to build digital
            products that drive real, measurable business outcomes.
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="about-stats-bar">
        <div className={responsive ? "is-padding-responsive" : ""} style={!responsive ? { padding: "0 100px" } : {}}>
          <Row className="text-center">
            {stats.map((s) => (
              <Col key={s.label} xs={6} md={3}>
                <div className="stat-pill">
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className={`about-story ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <Row className="g-5 align-items-start">
          <Col lg={5}>
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Built on a Simple Belief</h2>
          </Col>
          <Col lg={7}>
            <p className="story-text">
              Hangoutech was founded in 2021 by Tejesh Pichandi and Rehman Sheriff with one core belief:
              <strong> the best software is built by people who deeply understand the problem, not just the technology.</strong>
            </p>
            <p className="story-text mt-4">
              Most IT companies build anything for anyone. We took a different path. We focused on specific
              industry verticals where we could go deep, build real domain knowledge, and deliver software
              that actually fits how people work. A hospital does not need a generic CRM. It needs an HMS that
              maps to its OPD workflow. A D2C brand does not need a website. It needs a conversion engine.
            </p>
            <p className="story-text mt-4">
              Starting from Tamil Nadu, we now work with clients across India, the USA, the UK, Australia,
              and Canada. We help clinics, hospitals, EdTech startups, logistics operators, and consumer brands
              build software that moves their business forward.
            </p>
            <p className="story-text mt-4">
              We are not a body-shop. We think about business outcomes first and write the code second.
            </p>
          </Col>
        </Row>
      </section>

      {/* ── FOUNDERS ── */}
      <section className={`about-founders ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">The Founders</p>
          <h2 className="section-title">The People Behind Hangoutech</h2>
        </div>
        <Row className="g-4 justify-content-center">
          <Col md={6} lg={5}>
            <div className="founder-card card-surface">
              <div className="founder-avatar">TP</div>
              <div className="founder-info">
                <h3 className="founder-name">Tejesh Pichandi</h3>
                <p className="founder-role">Co-Founder & CEO</p>
                <p className="founder-bio">
                  Tejesh leads product strategy, client relationships, and the overall technical direction
                  at Hangoutech. He has deep experience in enterprise software architecture and makes sure
                  every product we build is built to scale, from MVP to systems serving thousands of users.
                </p>
                <div className="founder-focus">
                  <span className="focus-tag">Product Strategy</span>
                  <span className="focus-tag">Enterprise Architecture</span>
                  <span className="focus-tag">Client Success</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/tejeshpichandi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="founder-linkedin"
                >
                  <FaLinkedin size={18} /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} lg={5}>
            <div className="founder-card card-surface">
              <div className="founder-avatar">RS</div>
              <div className="founder-info">
                <h3 className="founder-name">Rehman Sheriff</h3>
                <p className="founder-role">Co-Founder</p>
                <p className="founder-bio">
                  Rehman drives engineering quality, team building, and delivery at Hangoutech.
                  He leads our engineering teams across Healthcare, EdTech, Logistics, and D2C verticals.
                  He sets the engineering standards, development processes, and technology choices that
                  define how we build.
                </p>
                <div className="founder-focus">
                  <span className="focus-tag">Engineering Leadership</span>
                  <span className="focus-tag">Full Stack Development</span>
                  <span className="focus-tag">Team Building</span>
                </div>
                <a
                  href="https://in.linkedin.com/company/hangoutech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="founder-linkedin"
                >
                  <FaLinkedin size={18} /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* ── VALUES ── */}
      <section className={`about-values ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">How We Work</p>
          <h2 className="section-title">Our Values</h2>
        </div>
        <Row className="g-4">
          {values.map((v) => (
            <Col key={v.title} md={6}>
              <div className="value-card card-surface h-100">
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* ── TIMELINE ── */}
      <section className={`about-timeline ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">Our Journey</p>
          <h2 className="section-title">How We Got Here</h2>
        </div>
        <div className="timeline-list">
          {timeline.map((t) => (
            <div key={t.year} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-year">{t.year}</div>
              <div className="timeline-content">
                <h4 className="timeline-title">{t.title}</h4>
                <p className="timeline-desc">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className={`about-industries ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-4">
          <p className="section-label">What We Focus On</p>
          <h2 className="section-title">Four Industries, Deep Expertise</h2>
        </div>
        <div className="industry-pill-row">
          {industries.map((ind) => (
            <Link key={ind.name} to={ind.path} className="industry-pill-link"
              style={{ borderColor: `${ind.color}40`, background: `${ind.color}10` }}>
              <span style={{ color: ind.color }}>{ind.icon}</span>
              <span>{ind.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── GEOGRAPHIC FOCUS ── */}
      <section className={`about-geo ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-4">
          <p className="section-label">Where We Work</p>
          <h2 className="section-title">Clients Across 5 Countries</h2>
        </div>
        <div className="geo-flag-row">
          {[
            { flag: "🇮🇳", country: "India", note: "Primary Market" },
            { flag: "🇺🇸", country: "USA",   note: "North America" },
            { flag: "🇬🇧", country: "UK",    note: "Europe" },
            { flag: "🇦🇺", country: "Australia", note: "APAC" },
            { flag: "🇨🇦", country: "Canada", note: "North America" },
          ].map((c) => (
            <div key={c.country} className="geo-flag-card">
              <span className="geo-flag">{c.flag}</span>
              <span className="geo-country">{c.country}</span>
              <span className="geo-note">{c.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`about-cta ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="about-cta-card text-center">
          <h2 className="section-title">Want to Work Together?</h2>
          <p className="section-subtitle mx-auto mt-3">
            We are selective about who we partner with. We work with clients who are serious about building
            something great and want a technology partner who thinks like a founder.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
            <Link to="/contact" className="btn-electric">Start a Conversation</Link>
            <Link to="/case-studies" className="btn-outline-electric">See Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
