import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Col, Row } from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";
import {
  FaHospital, FaGraduationCap, FaTruck, FaBagShopping,
  FaReact, FaNodeJs, FaAws,
} from "react-icons/fa6";
import { SiFlutter, SiPostgresql, SiMongodb } from "react-icons/si";
import "./CaseStudiesPage.scss";

const ALL_TAGS = ["All", "Healthcare", "EdTech", "Logistics", "Retail & D2C"];

const cases = [
  {
    id: "hms-multi-specialty",
    tag: "Healthcare",
    tagColor: "#2D7DD2",
    tagIcon: <FaHospital size={14} />,
    title: "Multi-Specialty Hospital Management System",
    client: "Private Multi-Specialty Hospital",
    location: "Tamil Nadu, India",
    duration: "5 months",
    problem: "A 120-bed multi-specialty hospital was managing OPD registrations on paper, billing on a legacy desktop software that crashed frequently, and lab reports via WhatsApp — causing delays, billing errors, and patient experience issues.",
    solution: "Built an end-to-end HMS covering OPD/IPD patient flow, appointment booking, doctor scheduling, billing & insurance management, pharmacy inventory, and an integrated lab portal. Mobile app for nursing staff for ward round documentation.",
    outcome: [
      "75% reduction in patient waiting time at registration",
      "Billing errors reduced from ~12% to under 1%",
      "Lab report turnaround time cut from 4 hours to 45 minutes",
      "Full ROI achieved within 8 months of go-live",
    ],
    stack: [
      { icon: <FaReact size={16} />, name: "React.js" },
      { icon: <FaNodeJs size={16} />, name: "Node.js" },
      { icon: <SiPostgresql size={16} />, name: "PostgreSQL" },
      { icon: <SiFlutter size={16} />, name: "Flutter" },
      { icon: <FaAws size={16} />, name: "AWS" },
    ],
  },
  {
    id: "edtech-lms-coaching",
    tag: "EdTech",
    tagColor: "#F59E0B",
    tagIcon: <FaGraduationCap size={14} />,
    title: "Online Learning Platform for Competitive Exam Coaching",
    client: "IIT-JEE / NEET Coaching Centre",
    location: "Bengaluru, India",
    duration: "4 months",
    problem: "A coaching centre with 2,000+ students was delivering classes over Zoom links shared on WhatsApp, collecting fees via bank transfers, and tracking student performance in Excel. The founders were losing students to competitors with better digital platforms.",
    solution: "Built a full-featured LMS with live class streaming, recorded course library, student progress dashboards, online test series with auto-grading, parent portal, and Razorpay payment integration. Companion Android app for students.",
    outcome: [
      "Student retention rate improved from 68% to 89% year-on-year",
      "Online test registrations: 400+ students taking tests weekly",
      "Fee collection automated — 0 manual follow-ups required",
      "Platform scaled to handle 500 concurrent live students",
    ],
    stack: [
      { icon: <FaReact size={16} />, name: "Next.js" },
      { icon: <FaNodeJs size={16} />, name: "Node.js" },
      { icon: <SiMongodb size={16} />, name: "MongoDB" },
      { icon: <SiFlutter size={16} />, name: "Flutter" },
      { icon: <FaAws size={16} />, name: "AWS S3" },
    ],
  },
  {
    id: "d2c-ecommerce-beauty",
    tag: "Retail & D2C",
    tagColor: "#EC4899",
    tagIcon: <FaBagShopping size={14} />,
    title: "Custom D2C Storefront & Loyalty Platform for Beauty Brand",
    client: "D2C Beauty & Skincare Brand",
    location: "Mumbai, India",
    duration: "3 months",
    problem: "A fast-growing beauty brand was doing 80% of its revenue on Amazon and Nykaa, paying 20%+ commission on every sale. Their own website had a 78% cart abandonment rate and no mechanism to drive repeat purchases from existing customers.",
    solution: "Rebuilt the storefront from scratch on Next.js with a mobile-first design optimised for conversion. Added a loyalty points engine, referral program, WhatsApp order confirmation and tracking, and a personalised product recommendation widget on the PDP.",
    outcome: [
      "Cart abandonment rate dropped from 78% to 41% in 60 days",
      "Direct channel revenue grew 3.2x in the first 6 months",
      "Loyalty program: 4,200 members in first 90 days",
      "WhatsApp order updates drove 28% repeat purchase rate",
    ],
    stack: [
      { icon: <FaReact size={16} />, name: "Next.js" },
      { icon: <FaNodeJs size={16} />, name: "Node.js" },
      { icon: <SiPostgresql size={16} />, name: "PostgreSQL" },
      { icon: <SiMongodb size={16} />, name: "Redis" },
      { icon: <FaAws size={16} />, name: "AWS" },
    ],
  },
];

const CaseStudiesPage = () => {
  const responsive = isMobile || isTablet;
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All" ? cases : cases.filter((c) => c.tag === activeTag);

  return (
    <>
      <Helmet>
        <title>Case Studies | Hangoutech — Healthcare, EdTech & D2C Projects</title>
        <meta
          name="description"
          content="Real software projects delivered by Hangoutech — Hospital Management Systems, EdTech LMS platforms, and D2C ecommerce storefronts. See the problems we solved and the outcomes we drove."
        />
        <link rel="canonical" href="https://hangoutech.com/case-studies" />
      </Helmet>

      {/* ── HERO ── */}
      <section className={`cs-hero ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center">
          <p className="section-label">Our Work</p>
          <h1 className="section-title" style={{ maxWidth: 660, margin: "0 auto" }}>
            Real Projects. Real Outcomes.
          </h1>
          <p className="section-subtitle mx-auto mt-3" style={{ maxWidth: 560 }}>
            We don't just ship code — we drive measurable business outcomes. Here's a look at what we've
            built and the results it delivered.
          </p>
        </div>
      </section>

      {/* ── FILTER TAGS ── */}
      <section className={`cs-filter ${responsive ? "px-4" : "px-5"} pb-0`}>
        <div className="cs-filter-row">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              className={`cs-filter-btn ${activeTag === tag ? "active" : ""}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* ── CASE STUDY CARDS ── */}
      <section className={`cs-list ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="cs-grid">
          {filtered.map((cs) => (
            <div key={cs.id} className="cs-card card-surface">
              <div className="cs-card-header">
                <span className="cs-tag" style={{ color: cs.tagColor, background: `${cs.tagColor}15` }}>
                  {cs.tagIcon} {cs.tag}
                </span>
                <div className="cs-meta">
                  <span>{cs.location}</span>
                  <span className="cs-meta-dot" />
                  <span>{cs.duration}</span>
                </div>
              </div>

              <h2 className="cs-title">{cs.title}</h2>
              <p className="cs-client">— {cs.client}</p>

              <div className="cs-block">
                <div className="cs-block-label">The Problem</div>
                <p className="cs-block-text">{cs.problem}</p>
              </div>

              <div className="cs-block">
                <div className="cs-block-label">Our Solution</div>
                <p className="cs-block-text">{cs.solution}</p>
              </div>

              <div className="cs-block">
                <div className="cs-block-label">Outcomes</div>
                <ul className="cs-outcomes">
                  {cs.outcome.map((o, i) => (
                    <li key={i}>
                      <span className="cs-outcome-tick" style={{ color: cs.tagColor }}>✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cs-stack">
                {cs.stack.map((s) => (
                  <span key={s.name} className="cs-stack-pill">
                    {s.icon} {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`cs-cta ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="cs-cta-card text-center">
          <h2 className="section-title">Want Results Like These?</h2>
          <p className="section-subtitle mx-auto mt-3" style={{ maxWidth: 520 }}>
            Every project starts with a free 30-minute conversation. Tell us what you're building and
            we'll tell you honestly how we can help.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
            <Link to="/contact" className="btn-electric">Start a Project</Link>
            <Link to="/industries" className="btn-outline-electric">Explore Industries</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage;
