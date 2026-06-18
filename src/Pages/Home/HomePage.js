import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Col, Row } from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";
import heroImage from "../../assests/images/file.png";
import Clients from "../Clients/Clients";
import "./HomePage.scss";
import {
  FaMobileScreen,
  FaCode,
  FaChartLine,
  FaPenNib,
  FaInfinity,
  FaHospital,
  FaGraduationCap,
  FaTruck,
  FaBagShopping,
} from "react-icons/fa6";
import { SiTensorflow } from "react-icons/si";
import CounterSection from "../About/CounterSection";

const services = [
  {
    icon: <FaMobileScreen size={40} color="#2D7DD2" />,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps for Android and iOS. Built for healthcare, EdTech, logistics, and D2C brands.",
    link: "/contact",
  },
  {
    icon: <FaCode size={40} color="#7C3AED" />,
    title: "Web App Development",
    desc: "Scalable web applications including portals, dashboards, SaaS platforms, and enterprise tools with clean, modern UI.",
    link: "/contact",
  },
  {
    icon: <SiTensorflow size={40} color="#F59E0B" />,
    title: "AI / ML Solutions",
    desc: "Automation, recommendation engines, predictive analytics, and custom ML models built around your specific use case.",
    link: "/contact",
  },
  {
    icon: <FaChartLine size={40} color="#10B981" />,
    title: "Digital Marketing",
    desc: "SEO, PPC, and content strategy focused on qualified B2B leads and consistent online visibility.",
    link: "/contact",
  },
  {
    icon: <FaPenNib size={40} color="#EC4899" />,
    title: "UI / UX Design",
    desc: "Practical design that gets results. Wireframes, prototypes, and clean interfaces built around how your users actually work.",
    link: "/contact",
  },
  {
    icon: <FaInfinity size={40} color="#06B6D4" />,
    title: "DevOps & Cloud",
    desc: "CI/CD pipelines, AWS / GCP infrastructure, containerisation, and 24/7 monitoring so your product stays up.",
    link: "/contact",
  },
];

const industries = [
  {
    icon: <FaHospital size={32} color="#2D7DD2" />,
    title: "Healthcare",
    desc: "HMS, patient portals, telemedicine platforms, appointment booking and diagnostic lab software.",
    path: "/industries/healthcare",
    live: true,
  },
  {
    icon: <FaGraduationCap size={32} color="#F59E0B" />,
    title: "EdTech",
    desc: "LMS platforms, live-class apps, student progress dashboards and online examination systems.",
    path: "/industries/edtech",
    live: true,
  },
  {
    icon: <FaTruck size={32} color="#10B981" />,
    title: "Logistics",
    desc: "Fleet management, GPS tracking, order dispatch platforms and warehouse management systems.",
    path: "/industries/logistics",
    live: true,
  },
  {
    icon: <FaBagShopping size={32} color="#EC4899" />,
    title: "Retail & D2C",
    desc: "Custom storefronts, headless commerce, loyalty programs and multi-channel inventory management.",
    path: "/industries/retail-d2c",
    live: true,
  },
];

const HomePage = () => {
  const responsive = isMobile || isTablet;

  return (
    <>
      <Helmet>
        <title>Hangoutech | Custom Software for Healthcare, EdTech & D2C Brands</title>
        <meta
          name="description"
          content="We build digital products for Healthcare, EdTech, Logistics & D2C brands. HMS, patient portals, LMS, fleet management and more. India-based software development company."
        />
        <link rel="canonical" href="https://hangoutech.com/" />
      </Helmet>

      {/* ── HERO ── */}
      <section className={`hero-section ${responsive ? "is-padding-responsive" : "is-padding-hero"}`} id="homeSection">
        <Row className="align-items-center hero-inner">
          <Col lg={6}>
            <p className="section-label">Custom Software Development</p>
            <h1 className="hero-h1">
              We Build Digital Products for <span className="text-electric">Healthcare</span>, EdTech &amp; D2C Brands
            </h1>
            <p className="hero-subtext">
              Hangoutech works with clinics, hospitals, health-tech startups, EdTech platforms and D2C brands
              across India to design, build, and launch software that gets real results.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center justify-content-lg-start">
              <Link to="/contact" className="btn-electric">
                Book a Free Consultation
              </Link>
              <Link to="/industries" className="btn-outline-electric">
                Explore Industries
              </Link>
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-center mt-5 mt-lg-0">
            <div className="hero-image-wrapper">
              <img src={heroImage} alt="Hangoutech software development" />
            </div>
          </Col>
        </Row>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="trust-bar">
        <div className={responsive ? "is-padding-responsive" : "trust-bar-inner"}>
          <Row className="align-items-center text-center">
            <Col xs={6} md={3}>
              <div className="stat-pill">
                <div className="stat-number">20+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="stat-pill">
                <div className="stat-number">4+</div>
                <div className="stat-label">Industries Served</div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="stat-pill">
                <div className="stat-number">5+</div>
                <div className="stat-label">Countries</div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="stat-pill">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years of Expertise</div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
      <Clients />

      {/* ── INDUSTRIES ── */}
      <section className={`industries-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`} id="industriesSection">
        <div className="text-center mb-5">
          <p className="section-label">Who We Build For</p>
          <h2 className="section-title">Industry-Specific Software Solutions</h2>
          <p className="section-subtitle mx-auto mt-3">
            We don't build generic software. Every product we ship is built around the workflows, compliance requirements,
            and growth goals of a specific industry vertical.
          </p>
        </div>
        <Row className="g-4">
          {industries.map((ind) => (
            <Col key={ind.title} md={6} lg={3}>
              <div className="industry-card card-surface h-100">
                <div className="industry-icon mb-3">{ind.icon}</div>
                <h3 className="industry-card-title">{ind.title}</h3>
                <p className="industry-card-desc">{ind.desc}</p>
                {ind.live ? (
                  <Link to={ind.path} className="industry-card-link">
                    Learn more →
                  </Link>
                ) : (
                  <span className="industry-card-soon">Coming Soon</span>
                )}
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <Link to="/industries" className="btn-outline-electric">
            View All Industries
          </Link>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={`services-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`} id="serviceSection">
        <div className="text-center mb-5">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Comprehensive Tech Solutions</h2>
          <p className="section-subtitle mx-auto mt-3">
            From mobile and web to AI/ML, UI/UX, and DevOps. Pick what you need or let us map out the full build.
          </p>
        </div>
        <Row className="g-4">
          {services.map((svc, i) => (
            <Col key={svc.title} lg={4} md={6}>
              <div className="service-card card-surface h-100">
                <div className="service-count">{String(i + 1).padStart(2, "0")}.</div>
                <div className="service-icon mb-3">{svc.icon}</div>
                <h3 className="service-card-title">{svc.title}</h3>
                <p className="service-card-desc">{svc.desc}</p>
                <Link to={svc.link} className="service-card-link">
                  Get started →
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* ── ABOUT ── */}
      <section className={`about-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`} id="aboutSection">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <p className="section-label">About Hangoutech</p>
            <h2 className="section-title">Building Tech That Moves Industries Forward</h2>
            <p className="about-text mt-4">
              Hangoutech is a software company based in India. We work with healthcare providers, health-tech
              startups, EdTech platforms, logistics companies, and D2C brands to build software that actually
              works for their business.
            </p>
            <p className="about-text mt-3">
              We are not a body-shop. Before writing a single line of code, we take time to understand your
              workflows, compliance requirements, and what your users actually need. That is how we build
              products people use every day.
            </p>
            <p className="about-text mt-3">
              From MVP to large-scale systems, from clinics to health-tech startups, Hangoutech is your
              long-term technology partner.
            </p>
            <div className="mt-4 d-flex justify-content-center justify-content-lg-start">
              <Link to="/contact" className="btn-electric">
                Talk to Our Team
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <CounterSection />
          </Col>
        </Row>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className={`bottom-cta-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="bottom-cta-card">
          <h2 className="bottom-cta-title">Ready to Build Something Great?</h2>
          <p className="bottom-cta-sub">
            Book a free 30-minute call with our team. No sales pitch. Just a honest conversation about
            what you're building and how we can help.
          </p>
          <Link to="/contact" className="btn-electric mt-4 d-inline-block">
            Schedule a Free Call
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
