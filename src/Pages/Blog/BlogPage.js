import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Col, Row } from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";
import { FaHospital, FaGraduationCap, FaTruck, FaBagShopping, FaRss } from "react-icons/fa6";
import "./BlogPage.scss";

const TOPICS = [
  { icon: <FaHospital size={16} />, label: "Healthcare Tech", color: "#2D7DD2" },
  { icon: <FaGraduationCap size={16} />, label: "EdTech", color: "#F59E0B" },
  { icon: <FaTruck size={16} />, label: "Logistics", color: "#10B981" },
  { icon: <FaBagShopping size={16} />, label: "D2C & Retail", color: "#EC4899" },
];

const UPCOMING = [
  { tag: "Healthcare", tagColor: "#2D7DD2", title: "How to Choose the Right HMS Software for Your Hospital in 2026", eta: "Coming July 2026" },
  { tag: "EdTech", tagColor: "#F59E0B", title: "Building a Live Class Platform: Architecture Decisions We Made for 500+ Concurrent Students", eta: "Coming July 2026" },
  { tag: "D2C & Retail", tagColor: "#EC4899", title: "Why Your D2C Brand's Cart Abandonment Rate Is Above 70% and How to Fix It", eta: "Coming August 2026" },
  { tag: "Healthcare", tagColor: "#2D7DD2", title: "Patient Portal vs. HMS: What's the Difference and Which Does Your Clinic Need First?", eta: "Coming August 2026" },
  { tag: "Logistics", tagColor: "#10B981", title: "GPS Fleet Tracking Hardware vs. SaaS: What Indian Logistics Companies Need to Know", eta: "Coming September 2026" },
];

const BlogPage = () => {
  const responsive = isMobile || isTablet;

  return (
    <>
      <Helmet>
        <title>Blog and Insights | Hangoutech: Healthcare, EdTech and D2C Tech Guides</title>
        <meta
          name="description"
          content="Industry-specific tech guides, product build stories, and insights from the Hangoutech team. Covering Healthcare software, EdTech platforms, Logistics tech, and D2C ecommerce."
        />
        <link rel="canonical" href="https://hangoutech.com/blog" />
      </Helmet>

      {/* ── HERO ── */}
      <section className={`blog-hero ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center">
          <p className="section-label">Insights & Guides</p>
          <h1 className="section-title" style={{ maxWidth: 660, margin: "0 auto" }}>
            Tech Thinking for Healthcare, EdTech, Logistics & D2C
          </h1>
          <p className="section-subtitle mx-auto mt-3">
            Real-world insights from building industry-specific software. Written for operators and founders
            in the verticals we serve.
          </p>
        </div>
      </section>

      {/* ── COMING SOON STATE ── */}
      <section className={`blog-coming-soon ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="blog-cs-card card-surface text-center">
          <div className="blog-cs-icon"><FaRss size={32} /></div>
          <h2 className="blog-cs-title">First Posts Drop in July 2026</h2>
          <p className="blog-cs-sub">
            We're writing the first batch of posts now. Real guides from real project experience.
          </p>
          <div className="blog-topic-pills mt-4">
            {TOPICS.map((t) => (
              <span key={t.label} className="blog-topic-pill"
                style={{ color: t.color, background: `${t.color}15`, borderColor: `${t.color}30` }}>
                {t.icon} {t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING POSTS ── */}
      <section className={`blog-upcoming ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">What's Coming</p>
          <h2 className="section-title">Upcoming Articles</h2>
        </div>
        <div className="upcoming-list">
          {UPCOMING.map((post, i) => (
            <div key={i} className="upcoming-item">
              <span className="upcoming-tag" style={{ color: post.tagColor, background: `${post.tagColor}15` }}>
                {post.tag}
              </span>
              <h3 className="upcoming-title">{post.title}</h3>
              <span className="upcoming-eta">{post.eta}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER / CTA ── */}
      <section className={`blog-cta ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <Row className="g-5 align-items-center">
          <Col lg={6}>
            <p className="section-label">Stay Updated</p>
            <h2 className="section-title">Get Notified When We Publish</h2>
            <p className="section-subtitle mt-3">
              We'll let you know when new guides go live. No newsletters, no marketing emails.
              Just a message when there's something worth reading.
            </p>
          </Col>
          <Col lg={6}>
            <div className="blog-notify-card card-surface">
              <p className="blog-notify-text">
                Want to be notified when the first posts drop? Drop us a message and we'll
                send you the link when they go live.
              </p>
              <Link to="/contact" className="btn-electric d-block text-center mt-3">
                Get Notified →
              </Link>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default BlogPage;
