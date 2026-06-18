import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Col, Row } from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";
import {
  FaHospital,
  FaGraduationCap,
  FaTruck,
  FaBagShopping,
} from "react-icons/fa6";
import "./IndustriesHub.scss";

const industries = [
  {
    icon: <FaHospital size={44} />,
    title: "Healthcare",
    tagline: "Hospital management, patient portals & telemedicine",
    desc: "We build HMS systems, patient portals, telemedicine platforms, appointment booking apps, diagnostic lab software, and health & wellness apps for clinics, hospitals, diagnostic centres, and health-tech startups across India and globally.",
    apps: ["Hospital Management System", "Patient Portal / App", "Telemedicine Platform", "Appointment Booking", "Pharmacy Management", "Diagnostic Lab Software"],
    path: "/industries/healthcare",
    live: true,
    color: "#2D7DD2",
    targetKw: "Healthcare Software Development India",
    markets: ["Clinics", "Hospitals", "Diagnostic Centers", "Health-Tech Startups"],
  },
  {
    icon: <FaGraduationCap size={44} />,
    title: "EdTech",
    tagline: "LMS, live classes, student dashboards & online exams",
    desc: "Custom EdTech platforms for schools, coaching centres, and online learning brands. From LMS and live class platforms to student progress tracking and online examination systems.",
    apps: ["Learning Management System", "Live Class Platform", "Student Dashboard", "Online Examination", "Course Marketplace", "Parent-Teacher App"],
    path: "/industries/edtech",
    live: true,
    color: "#F59E0B",
    targetKw: "EdTech App Development India",
    markets: ["Schools", "Coaching Centres", "Online Learning Brands", "EdTech Startups"],
  },
  {
    icon: <FaTruck size={44} />,
    title: "Logistics",
    tagline: "Fleet tracking, order management & warehouse systems",
    desc: "Custom logistics and supply chain software for Indian businesses. Fleet management, GPS tracking, last-mile delivery apps, warehouse management, and dispatch platforms.",
    apps: ["Fleet Management & GPS", "Order Management", "Last-Mile Delivery App", "Warehouse Management (WMS)", "Shipment Tracking Portal", "Driver App with Digital POD"],
    path: "/industries/logistics",
    live: true,
    color: "#10B981",
    targetKw: "Logistics Software Development India",
    markets: ["Fleet Operators", "3PL Providers", "E-commerce Fulfillment", "Supply Chain Companies"],
  },
  {
    icon: <FaBagShopping size={44} />,
    title: "Retail & D2C",
    tagline: "Custom storefronts, loyalty programs & headless commerce",
    desc: "Custom ecommerce and D2C tech solutions for Indian retail brands. Headless commerce, loyalty programs, product recommendation engines, and multi-channel inventory management.",
    apps: ["Custom D2C Storefront", "Headless Commerce", "Loyalty & Rewards", "Product Recommendation Engine", "Multi-Channel Inventory", "WhatsApp Commerce"],
    path: "/industries/retail-d2c",
    live: true,
    color: "#EC4899",
    targetKw: "D2C Ecommerce Development India",
    markets: ["D2C Brands", "Retail Chains", "FMCG Companies", "Online Marketplaces"],
  },
];

const IndustriesHub = () => {
  const responsive = isMobile || isTablet;

  return (
    <>
      <Helmet>
        <title>Industries We Serve | Hangoutech: Healthcare, EdTech, Logistics and D2C</title>
        <meta
          name="description"
          content="Hangoutech builds industry-specific software for Healthcare, EdTech, Logistics and Retail/D2C brands. Explore our vertical-specific solutions."
        />
        <link rel="canonical" href="https://hangoutech.com/industries" />
      </Helmet>

      {/* ── HERO ── */}
      <section className={`industries-hero ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center">
          <p className="section-label">Industry-Specific Software</p>
          <h1 className="section-title" style={{ maxWidth: 720, margin: "0 auto" }}>
            We Build Digital Products for<br />Specific Industries, Not Everyone
          </h1>
          <p className="section-subtitle mx-auto mt-3">
            "We build software for everyone" is not a positioning statement. We focus on four verticals and go
            deep. Every product we ship is built around the real workflows, regulations, and users of that industry.
          </p>
        </div>
      </section>

      {/* ── INDUSTRY CARDS ── */}
      <section className={`industries-list-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="industries-grid">
          {industries.map((ind) => (
            <div key={ind.title} className="industry-full-card card-surface">
              <Row className="align-items-start g-4">
                <Col lg={8}>
                  <div className="d-flex align-items-start gap-4 mb-3">
                    <div className="ind-icon-wrap" style={{ background: `${ind.color}18`, color: ind.color }}>
                      {ind.icon}
                    </div>
                    <div>
                      <div className="ind-tag">Target Keyword: {ind.targetKw}</div>
                      <h2 className="ind-title">{ind.title}</h2>
                      <p className="ind-tagline">{ind.tagline}</p>
                    </div>
                  </div>
                  <p className="ind-desc">{ind.desc}</p>

                  <div className="ind-markets">
                    {ind.markets.map((m) => (
                      <span key={m} className="market-pill">{m}</span>
                    ))}
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="apps-we-build">
                    <div className="apps-title">Apps We Build</div>
                    {ind.apps.map((app) => (
                      <div key={app} className="app-item">
                        <span className="app-dot" style={{ background: ind.color }} />
                        {app}
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
              <div className="ind-cta mt-4">
                <Link to={ind.path} className="btn-electric">
                  Explore {ind.title} Solutions →
                </Link>
                <Link to="/contact" className="btn-outline-electric ms-3">
                  Discuss Your Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className={`hub-bottom-cta ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="cta-box text-center">
          <h2 className="section-title">Your Industry Not Listed?</h2>
          <p className="section-subtitle mx-auto mt-3">
            We work with companies across various verticals. If you're building something specific and
            need a technology partner who understands your domain, let's talk.
          </p>
          <Link to="/contact" className="btn-electric d-inline-block mt-4">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default IndustriesHub;
