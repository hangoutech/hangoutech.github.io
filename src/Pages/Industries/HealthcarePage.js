import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Col, Row } from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";
import {
  FaHospital,
  FaUserDoctor,
  FaVideo,
  FaCalendarCheck,
  FaPills,
  FaFlask,
  FaHeartPulse,
  FaShieldHalved,
  FaCloud,
  FaCode,
  FaMobileScreen,
  FaPenNib,
  FaPlugCircleCheck,
  FaWrench,
  FaComments,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa6";
import "./HealthcarePage.scss";

// ── Reference data: 21 Products from the spec sheet ──
const products = [
  { title: "Patient Portal & Patient Management System", desc: "Centralised patient records, appointment history, lab reports, and communication tools for patients and clinical staff." },
  { title: "Hospital Management System (HMS)", desc: "End-to-end OPD/IPD management, billing, pharmacy, lab reports, patient records, and doctor scheduling in one platform." },
  { title: "Telemedicine Platform", desc: "Video consultation, e-prescription, and digital health records for remote patient care. HIPAA-aware architecture." },
  { title: "Appointment & Scheduling System", desc: "Online scheduling for clinics, diagnostic centres, and multi-specialty hospitals. SMS/WhatsApp reminders built in." },
  { title: "Lab Portal & Lab Management System", desc: "Sample tracking, report generation, patient notification, and HMS integration for seamless diagnostics workflow." },
  { title: "EHR / EMR System", desc: "Structured electronic health and medical records with role-based access, audit logs, and HL7/FHIR API support." },
  { title: "ePrescription System", desc: "Digital prescription generation, pharmacy routing, drug interaction checks, and patient delivery tracking." },
  { title: "Pharmacy Management System", desc: "Inventory, billing, expiry tracking, and supplier management for pharmacies and hospital dispensaries." },
  { title: "Home Care Management System", desc: "Scheduling, task tracking, and documentation for home healthcare service providers and nursing teams." },
  { title: "Medical Practice Management System", desc: "Admin tools for private practices: scheduling, billing, patient records, and revenue cycle management." },
  { title: "Healthcare Inventory Management System", desc: "Real-time tracking of medical supplies, equipment, and consumables across wards and departments." },
  { title: "Healthcare Task & Staff Scheduling", desc: "Shift management, duty rosters, task assignments, and workload balancing for clinical and non-clinical staff." },
  { title: "Healthcare HR Management System", desc: "Recruitment, onboarding, payroll, compliance tracking, and performance management for healthcare organisations." },
  { title: "Medical Asset Management System", desc: "Equipment lifecycle management, maintenance scheduling, and depreciation tracking for medical assets." },
  { title: "Vendor & Contract Management System", desc: "Supplier onboarding, contract tracking, procurement workflows, and vendor performance dashboards." },
  { title: "Healthcare Supply Chain Management", desc: "Full supply chain visibility from procurement and inventory to delivery and consumption tracking." },
  { title: "Insurance Claim Management System", desc: "Automated claim submission, status tracking, rejection management, and payer integration workflows." },
  { title: "Healthcare eCommerce Platform", desc: "Online pharmacy, medical device sales, or health product marketplace with prescription upload and delivery." },
  { title: "Clinical Trial Management System", desc: "Protocol management, participant tracking, data collection, and regulatory reporting for clinical research." },
  { title: "Medical Training Platform", desc: "E-learning for medical professionals: CME modules, certification tracking, and skills assessments." },
  { title: "Healthcare Startup Products", desc: "MVP-to-product development for wellness apps, fitness trackers, mental health platforms, and health-tech SaaS startups." },
];

// ── Reference data: Segments ──
const segments = [
  {
    title: "Clinics",
    icon: <FaUserDoctor size={22} />,
    examples: [
      "Dental", "Dermatology", "Cardiology", "Orthopedic", "ENT", "Ophthalmology",
      "Pediatric", "Gynecology", "Fertility / IVF", "Psychiatry & Mental Health",
      "Physiotherapy & Rehab", "Neurology", "Gastroenterology", "Urology",
      "Diabetology", "Ayurveda / Siddha", "Wellness", "Hair Transplant",
    ],
    sizes: ["1–10 Employees", "10–25 Employees", "25–50 Employees"],
    stakeholders: ["Clinic Owner / Proprietor", "Practice Manager", "Operations Manager", "Marketing / Growth Head"],
  },
  {
    title: "Small & Mid-sized Healthcare Centers",
    icon: <FaHospital size={22} />,
    examples: [
      "Small Hospitals (10–100 beds)", "Multi-speciality Clinics (2–5 specialities)",
      "Day Care Surgery Centers", "Rehabilitation & Recovery Centers",
      "Home Healthcare Service Providers", "Elderly & Senior Care Centers",
      "Urgent Care Centers / Walk-in Clinics", "Community Health Centers",
    ],
    sizes: ["25–50 Employees", "50–100 Employees", "100–250 Employees"],
    stakeholders: ["Hospital Administrator", "COO / Chief Operating Officer", "IT Head / IT Manager", "Center Manager"],
  },
  {
    title: "Diagnostic & Laboratory Services",
    icon: <FaFlask size={22} />,
    examples: [
      "Diagnostic Centers (multi-test)", "Pathology / Clinical Labs",
      "Radiology Centers", "Medical Imaging Centers (MRI, CT, PET)",
      "Blood Testing & Collection Centers", "Preventive Health Checkup Centers",
      "Genetic Testing Labs", "Corporate Health Screening Centers",
    ],
    sizes: ["10–25 Employees", "25–100 Employees", "100–250 Employees"],
    stakeholders: ["Lab Owner / Director", "Chief Pathologist", "Lab Manager", "IT Head"],
  },
  {
    title: "Healthcare Startups",
    icon: <FaHeartPulse size={22} />,
    examples: [
      "Women Health (FemTech)", "Fitness & Wellness App",
      "Telemedicine / Virtual Clinic", "Mental Health App",
      "Doctor Consultation Platform", "Home Healthcare Tech",
      "AI Healthcare SaaS", "Healthcare Marketplace",
      "Lab Booking & Diagnostic", "Digital Prescription & ePharmacy",
      "Chronic Disease Management", "Nutrition & Personalized Diet App",
    ],
    sizes: ["1–10 Employees", "Early Stage / MVP"],
    stakeholders: ["Founder / Co-Founder", "CTO / Technical Co-Founder", "Product Head"],
  },
];

// ── Reference data: Geography ──
const geoMarkets = [
  {
    flag: "🇮🇳",
    country: "India",
    cities: ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Pune", "New Delhi", "Ahmedabad", "Kochi", "Kolkata", "Jaipur", "Chandigarh", "Coimbatore"],
  },
  {
    flag: "🇺🇸",
    country: "USA",
    cities: ["Los Angeles", "San Francisco", "New York City", "Houston", "Dallas", "Boston", "Seattle", "Chicago", "Miami", "Austin"],
  },
  {
    flag: "🇬🇧",
    country: "UK",
    cities: ["London", "Manchester", "Birmingham", "Leeds", "Edinburgh", "Bristol", "Glasgow"],
  },
  {
    flag: "🇦🇺",
    country: "Australia",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"],
  },
  {
    flag: "🇨🇦",
    country: "Canada",
    cities: ["Toronto", "Vancouver", "Calgary", "Montreal", "Ottawa", "Edmonton"],
  },
];

// ── Tech Stack ──
const techStack = [
  { layer: "Mobile", tech: "Android Native (Kotlin), iOS (Swift), Flutter, React Native" },
  { layer: "Frontend", tech: "React.js, Next.js, TypeScript, Angular" },
  { layer: "Backend", tech: "Node.js, Python (Django / FastAPI), Java (Spring Boot)" },
  { layer: "Database", tech: "PostgreSQL, MongoDB, MySQL, Redis, Elasticsearch" },
  { layer: "Cloud / Infra", tech: "AWS, Google Cloud Platform, Docker, Kubernetes" },
  { layer: "Integrations", tech: "WhatsApp API, Razorpay, Stripe, Twilio, Firebase FCM, HL7 / FHIR APIs" },
  { layer: "Security", tech: "End-to-end encryption, role-based access control, audit logs, DPDP / HIPAA-aware architecture" },
];

// ── Services ──
const services = [
  { icon: <FaCode size={20} />, text: "Custom healthcare web application development" },
  { icon: <FaMobileScreen size={20} />, text: "Mobile app development (Android & iOS) for patient-facing and clinical tools" },
  { icon: <FaPenNib size={20} />, text: "UI/UX design for healthcare platforms, accessible and WCAG-compliant" },
  { icon: <FaPlugCircleCheck size={20} />, text: "API integration with third-party healthcare tools (diagnostic machines, payment gateways, WhatsApp)" },
  { icon: <FaCloud size={20} />, text: "Cloud deployment and data security setup (AWS / GCP)" },
  { icon: <FaWrench size={20} />, text: "Post-launch support and maintenance retainers" },
  { icon: <FaComments size={20} />, text: "Tech consulting for hospitals digitising operations" },
];

// ── Pain Points ──
const painPoints = [
  "Patient records still managed on paper or disconnected Excel sheets with no single source of truth.",
  "Appointment systems relying on phone calls, leading to missed bookings, no-shows, and wasted staff time.",
  "No online presence. Patients cannot find, book, or communicate with the clinic digitally.",
  "Billing and pharmacy management running on outdated software that doesn't connect with clinical workflows.",
  "Telemedicine demand growing but no platform to support virtual consultations securely.",
];

// ── Process ──
const process = [
  { step: "01", title: "Discovery", desc: "We spend time understanding your clinical workflows, compliance requirements, and user types before writing a single line of code." },
  { step: "02", title: "Design", desc: "Wireframes and prototypes built specifically for healthcare users: patients, clinical staff, and administrators, with accessibility in mind." },
  { step: "03", title: "Build", desc: "Iterative development with regular demos. You see working software every 2 weeks, not a big-bang delivery at month 6." },
  { step: "04", title: "Launch", desc: "Deployment, data migration, staff training, and 90-day post-launch support. We don't disappear after go-live." },
];

// ── FAQ ──
const faqs = [
  { q: "Is your software HIPAA / DPDP compliant?", a: "We architect all healthcare products with data privacy in mind: role-based access, audit logs, end-to-end encryption, and secure cloud infrastructure. For India-based clients we follow the DPDP Act; for US clients we implement HIPAA-aware architecture." },
  { q: "Can you integrate with existing hospital systems?", a: "Yes. We have experience integrating with diagnostic machines, lab systems, pharmacy software, payment gateways (Razorpay, Stripe), WhatsApp Business API, and standard healthcare APIs (HL7, FHIR)." },
  { q: "Do you build MVPs or only full-scale systems?", a: "Both. For healthcare startups we offer rapid MVP development (6–12 weeks). For established hospitals we build enterprise-grade systems with phased delivery." },
  { q: "What does a typical engagement look like?", a: "We start with a free 30-min discovery call, followed by a detailed scope document, timeline, and fixed-price proposal. Most projects follow a monthly sprint model with fortnightly demos." },
  { q: "Do you offer post-launch support?", a: "Yes. We offer maintenance retainers starting at 10 hours/month covering bug fixes, minor enhancements, security patches, and uptime monitoring." },
];

const FAQ = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`} onClick={() => setOpen((o) => !o)}>
      <div className="faq-question">
        <span>{q}</span>
        {open ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
      </div>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
};

const HealthcarePage = () => {
  const responsive = isMobile || isTablet;

  return (
    <>
      <Helmet>
        <title>Healthcare Software Development Company in India | Hangoutech</title>
        <meta
          name="description"
          content="Custom healthcare software development: HMS, patient portals, telemedicine apps, and appointment systems. Built for clinics, hospitals, and health-tech startups in India."
        />
        <meta name="keywords" content="healthcare software development India, hospital management software, patient portal development, telemedicine app development India, HMS software India" />
        <link rel="canonical" href="https://hangoutech.com/industries/healthcare" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className={`hc-hero ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="hc-hero-badge">Healthcare Software Development</div>
        <h1 className="hc-hero-h1">
          Custom Software Solutions for<br />
          <span className="text-electric">Healthcare Providers</span> &amp; Health-Tech Startups
        </h1>
        <p className="hc-hero-sub">
          We build HMS systems, patient portals, telemedicine platforms, and appointment booking apps for
          clinics, hospitals, diagnostic centres, and health-tech startups across India and globally.
        </p>
        <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center">
          <Link to="/contact" className="btn-electric">
            Book a Free Healthcare Tech Consultation
          </Link>
          <a href="#painPoints" className="btn-outline-electric">
            See the Problems We Solve
          </a>
        </div>
        <div className="hc-hero-pills mt-5">
          <span className="hero-pill"><FaShieldHalved size={13} /> HIPAA-Aware Architecture</span>
          <span className="hero-pill"><FaHospital size={13} /> 4 Market Segments</span>
          <span className="hero-pill">🌍 5 Countries</span>
          <span className="hero-pill"><FaCode size={13} /> 21 Product Types</span>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className={`hc-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`} id="painPoints">
        <Row className="g-5 align-items-start">
          <Col lg={5}>
            <p className="section-label">The Problem</p>
            <h2 className="section-title">The Technology Gaps Holding Healthcare Providers Back</h2>
            <p className="section-subtitle mt-3">
              We've spoken with hundreds of clinic owners, hospital administrators, and health-tech founders.
              These are the problems they raise again and again.
            </p>
            <Link to="/contact" className="btn-electric d-inline-block mt-4">
              Let's Fix Yours →
            </Link>
          </Col>
          <Col lg={7}>
            <div className="pain-points-list">
              {painPoints.map((p, i) => (
                <div key={i} className="pain-point-item">
                  <div className="pain-number">{String(i + 1).padStart(2, "0")}</div>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </section>

      {/* ── PRODUCTS (21 types) ── */}
      <section className={`hc-section hc-products-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">What We Build</p>
          <h2 className="section-title">21 Healthcare Software Products</h2>
          <p className="section-subtitle mx-auto mt-3">
            From single-specialty clinics to multi-hospital networks and health-tech startups, we've built software
            across the full spectrum of healthcare technology.
          </p>
        </div>
        <Row className="g-3">
          {products.map((p, i) => (
            <Col key={i} md={6} lg={4}>
              <div className="product-card card-surface h-100">
                <div className="product-num">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="product-title">{p.title}</h3>
                <p className="product-desc">{p.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* ── MARKET SEGMENTS ── */}
      <section className={`hc-section hc-segments-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">Who We Build For</p>
          <h2 className="section-title">4 Healthcare Market Segments</h2>
          <p className="section-subtitle mx-auto mt-3">
            Each segment has different workflows, compliance requirements, budgets, and decision-makers.
            We understand them all.
          </p>
        </div>
        <Row className="g-4">
          {segments.map((seg) => (
            <Col key={seg.title} md={6}>
              <div className="segment-card card-surface h-100">
                <div className="seg-icon">{seg.icon}</div>
                <h3 className="seg-title">{seg.title}</h3>
                <div className="seg-examples">
                  {seg.examples.map((ex) => (
                    <span key={ex} className="seg-pill">{ex}</span>
                  ))}
                </div>
                <div className="seg-meta mt-3">
                  <div className="seg-meta-block">
                    <div className="seg-meta-label">Company Size</div>
                    <div className="seg-meta-values">{seg.sizes.join(" · ")}</div>
                  </div>
                  <div className="seg-meta-block mt-2">
                    <div className="seg-meta-label">Decision Makers</div>
                    <div className="seg-meta-values">{seg.stakeholders.join(" · ")}</div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* ── GEOGRAPHIC MARKETS ── */}
      <section className={`hc-section hc-geo-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">Geographic Focus</p>
          <h2 className="section-title">We Serve Healthcare Clients Across 5 Countries</h2>
        </div>
        <Row className="g-4 justify-content-center">
          {geoMarkets.map((geo) => (
            <Col key={geo.country} md={6} lg={4}>
              <div className="geo-card card-surface">
                <div className="geo-header">
                  <span className="geo-flag">{geo.flag}</span>
                  <span className="geo-country">{geo.country}</span>
                </div>
                <div className="geo-cities">
                  {geo.cities.join(" · ")}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* ── SERVICES ── */}
      <section className={`hc-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <Row className="g-5 align-items-start">
          <Col lg={5}>
            <p className="section-label">Our Services</p>
            <h2 className="section-title">What We Offer for Healthcare</h2>
            <p className="section-subtitle mt-3">
              From UX research and design through development, deployment, and ongoing support.
              We cover the full build.
            </p>
            <Link to="/contact" className="btn-electric d-inline-block mt-4">
              Start a Project
            </Link>
          </Col>
          <Col lg={7}>
            <div className="services-list">
              {services.map((s, i) => (
                <div key={i} className="service-row">
                  <div className="service-row-icon">{s.icon}</div>
                  <span>{s.text}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </section>

      {/* ── TECH STACK ── */}
      <section className={`hc-section hc-tech-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">Technology</p>
          <h2 className="section-title">Our Healthcare Tech Stack</h2>
          <p className="section-subtitle mx-auto mt-3">
            We use modern, battle-tested technologies chosen specifically for healthcare's performance, security,
            and integration needs.
          </p>
        </div>
        <div className="tech-table">
          <div className="tech-table-header">
            <div>Layer</div>
            <div>Technologies</div>
          </div>
          {techStack.map((row) => (
            <div key={row.layer} className="tech-table-row">
              <div className="tech-layer">{row.layer}</div>
              <div className="tech-value">{row.tech}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`hc-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">How We Work</p>
          <h2 className="section-title">Our 4-Step Process</h2>
        </div>
        <Row className="g-4">
          {process.map((p) => (
            <Col key={p.step} md={6} lg={3}>
              <div className="process-card">
                <div className="process-step">{p.step}</div>
                <h3 className="process-title">{p.title}</h3>
                <p className="process-desc">{p.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* ── FAQ ── */}
      <section className={`hc-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Common Questions</h2>
        </div>
        <div className="faq-list" style={{ maxWidth: 760, margin: "0 auto" }}>
          {faqs.map((f, i) => <FAQ key={i} {...f} />)}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className={`hc-cta-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="hc-cta-card">
          <h2 className="hc-cta-title">Building a healthcare product? Let's talk.</h2>
          <p className="hc-cta-sub">
            Book a free 30-minute call with our team. No sales pitch. Just a honest conversation about
            what you're building and how we can help.
          </p>
          <Link to="/contact" className="btn-electric mt-4 d-inline-block">
            Schedule a Call →
          </Link>
          <p className="hc-cta-note">We respond within 24 hours · No commitment required</p>
        </div>
      </section>
    </>
  );
};

export default HealthcarePage;
