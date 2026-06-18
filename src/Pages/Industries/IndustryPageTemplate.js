import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Col, Row } from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import "./IndustryPageTemplate.scss";

const FAQ = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`ipt-faq-item ${open ? "open" : ""}`} onClick={() => setOpen((o) => !o)}>
      <div className="ipt-faq-question">
        <span>{q}</span>
        {open ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
      </div>
      {open && <div className="ipt-faq-answer">{a}</div>}
    </div>
  );
};

/**
 * data shape:
 * {
 *   meta: { title, description, canonical, keywords },
 *   hero: { badge, h1, accentWords:[], sub, ctaText, pills:[] },
 *   painPoints: { heading, sub, items:[] },
 *   appTypes: { heading, sub, items:[{title,desc}] },
 *   segments: [{title, icon, examples:[], sizes:[], stakeholders:[]}],
 *   services: [{icon, text}],
 *   techStack: [{layer, tech}],
 *   process: [{step, title, desc}],
 *   faqs: [{q, a}],
 *   accentColor: "#hex"
 * }
 */
const IndustryPageTemplate = ({ data }) => {
  const responsive = isMobile || isTablet;
  const { meta, hero, painPoints, appTypes, segments, services, techStack, process: steps, faqs, accentColor } = data;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const h1Parts = (() => {
    if (!hero.accentWords?.length) return [{ text: hero.h1, accent: false }];
    let result = [];
    let remaining = hero.h1;
    hero.accentWords.forEach((word) => {
      const idx = remaining.indexOf(word);
      if (idx === -1) return;
      if (idx > 0) result.push({ text: remaining.slice(0, idx), accent: false });
      result.push({ text: word, accent: true });
      remaining = remaining.slice(idx + word.length);
    });
    if (remaining) result.push({ text: remaining, accent: false });
    return result;
  })();

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.keywords && <meta name="keywords" content={meta.keywords} />}
        <link rel="canonical" href={meta.canonical} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className={`ipt-hero ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}
        style={{ "--accent": accentColor }}>
        <div className="ipt-hero-badge" style={{ background: `${accentColor}18`, color: accentColor }}>
          {hero.badge}
        </div>
        <h1 className="ipt-hero-h1">
          {h1Parts.map((p, i) =>
            p.accent
              ? <span key={i} style={{ color: accentColor }}>{p.text}</span>
              : <React.Fragment key={i}>{p.text}</React.Fragment>
          )}
        </h1>
        <p className="ipt-hero-sub">{hero.sub}</p>
        <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center">
          <Link to="/contact" className="btn-electric">{hero.ctaText || "Book a Free Consultation"}</Link>
          <a href="#painPoints" className="btn-outline-electric">See the Problems We Solve</a>
        </div>
        {hero.pills?.length > 0 && (
          <div className="ipt-hero-pills mt-5">
            {hero.pills.map((p, i) => (
              <span key={i} className="ipt-hero-pill">{p}</span>
            ))}
          </div>
        )}
      </section>

      {/* ── PAIN POINTS ── */}
      <section className={`ipt-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`} id="painPoints">
        <Row className="g-5 align-items-start">
          <Col lg={5}>
            <p className="section-label">The Problem</p>
            <h2 className="section-title">{painPoints.heading}</h2>
            {painPoints.sub && <p className="section-subtitle mt-3">{painPoints.sub}</p>}
            <div className="mt-4 d-flex justify-content-center justify-content-lg-start">
              <Link to="/contact" className="btn-electric">Let's Fix Yours →</Link>
            </div>
          </Col>
          <Col lg={7}>
            <div className="ipt-pain-list">
              {painPoints.items.map((item, i) => (
                <div key={i} className="ipt-pain-item" style={{ borderLeftColor: accentColor }}>
                  <div className="ipt-pain-num" style={{ color: `${accentColor}55` }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </section>

      {/* ── APP TYPES ── */}
      <section className={`ipt-section ipt-apps-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">What We Build</p>
          <h2 className="section-title">{appTypes.heading}</h2>
          {appTypes.sub && <p className="section-subtitle mx-auto mt-3">{appTypes.sub}</p>}
        </div>
        <Row className="g-3">
          {appTypes.items.map((item, i) => (
            <Col key={i} md={6} lg={4}>
              <div className="ipt-app-card card-surface h-100">
                <div className="ipt-app-num" style={{ color: `${accentColor}25` }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="ipt-app-title">{item.title}</h3>
                <p className="ipt-app-desc">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* ── SEGMENTS ── */}
      {segments?.length > 0 && (
        <section className={`ipt-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
          <div className="text-center mb-5">
            <p className="section-label">Who We Build For</p>
            <h2 className="section-title">Market Segments</h2>
          </div>
          <Row className="g-4">
            {segments.map((seg) => (
              <Col key={seg.title} md={6}>
                <div className="ipt-segment-card card-surface h-100">
                  <div className="ipt-seg-icon" style={{ background: `${accentColor}18`, color: accentColor }}>
                    {seg.icon}
                  </div>
                  <h3 className="ipt-seg-title">{seg.title}</h3>
                  <div className="ipt-seg-examples">
                    {seg.examples.map((ex) => (
                      <span key={ex} className="ipt-seg-pill">{ex}</span>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      )}

      {/* ── SERVICES ── */}
      <section className={`ipt-section ipt-services-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <Row className="g-5 align-items-start">
          <Col lg={5}>
            <p className="section-label">Our Services</p>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle mt-3">
              From research and design through development, deployment, and ongoing support.
              We cover the full build.
            </p>
            <div className="mt-4 d-flex justify-content-center justify-content-lg-start">
              <Link to="/contact" className="btn-electric">Start a Project</Link>
            </div>
          </Col>
          <Col lg={7}>
            <div className="ipt-services-list">
              {services.map((s, i) => (
                <div key={i} className="ipt-service-row" style={{ "--accent": accentColor }}>
                  <div className="ipt-service-icon" style={{ color: accentColor }}>{s.icon}</div>
                  <span>{s.text}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </section>

      {/* ── TECH STACK ── */}
      <section className={`ipt-section ipt-tech-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">Technology</p>
          <h2 className="section-title">Our Tech Stack</h2>
        </div>
        <div className="ipt-tech-table">
          <div className="ipt-tech-header" style={{ background: `${accentColor}20` }}>
            <div>Layer</div>
            <div>Technologies</div>
          </div>
          {techStack.map((row) => (
            <div key={row.layer} className="ipt-tech-row">
              <div className="ipt-tech-layer">{row.layer}</div>
              <div className="ipt-tech-value">{row.tech}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`ipt-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">How We Work</p>
          <h2 className="section-title">Our 4-Step Process</h2>
        </div>
        <Row className="g-4">
          {steps.map((p) => (
            <Col key={p.step} md={6} lg={3}>
              <div className="ipt-process-card" style={{ "--accent": accentColor }}>
                <div className="ipt-process-step" style={{ color: `${accentColor}30` }}>{p.step}</div>
                <h3 className="ipt-process-title">{p.title}</h3>
                <p className="ipt-process-desc">{p.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* ── FAQ ── */}
      <section className={`ipt-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Common Questions</h2>
        </div>
        <div className="ipt-faq-list" style={{ maxWidth: 760, margin: "0 auto" }}>
          {faqs.map((f, i) => <FAQ key={i} {...f} />)}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className={`ipt-cta-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}
        style={{ "--accent": accentColor }}>
        <div className="ipt-cta-card">
          <h2 className="ipt-cta-title">Ready to build? Let's talk.</h2>
          <p className="ipt-cta-sub">
            Book a free 30-minute call with our team. No sales pitch. Just a honest conversation
            about what you're building and how we can help.
          </p>
          <Link to="/contact" className="btn-electric mt-4 d-inline-block">Schedule a Call →</Link>
          <p className="ipt-cta-note">We respond within 24 hours · No commitment required</p>
        </div>
      </section>
    </>
  );
};

export default IndustryPageTemplate;
