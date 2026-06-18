import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Col, Row } from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";
import {
  FaCode, FaMobileScreen, FaPenNib, FaChartLine,
  FaLocationDot, FaClock, FaIndianRupeeSign,
  FaChevronDown, FaChevronUp, FaRocket, FaHandshake,
  FaGraduationCap, FaHeartPulse, FaLaptop, FaUsers,
} from "react-icons/fa6";
import "./CareersPage.scss";

const openings = [
  {
    id: "fullstack-react-node",
    title: "Full Stack Developer",
    dept: "Engineering",
    icon: <FaCode size={20} />,
    color: "#2D7DD2",
    type: "Full-time",
    location: "Walajapet / Remote",
    experience: "2–5 years",
    salary: "Competitive",
    tags: ["React.js", "Node.js", "PostgreSQL", "REST APIs"],
    about: "We're looking for a full stack developer who can own features end-to-end — from database schema design through API development to React UI. You'll work across Healthcare, EdTech, and D2C projects.",
    responsibilities: [
      "Design and build RESTful APIs using Node.js / Express",
      "Build responsive React.js frontends with clean component architecture",
      "Write and optimise PostgreSQL queries and data models",
      "Participate in fortnightly sprint demos with clients",
      "Code review, pair programming, and knowledge sharing within the team",
    ],
    requirements: [
      "2+ years of production experience with React.js and Node.js",
      "Comfortable with PostgreSQL — you can write a JOIN without Googling it",
      "Experience deploying on AWS or GCP (EC2, RDS, S3 at minimum)",
      "Familiarity with Git workflows, PRs, and code reviews",
      "Good written English — we write clear commit messages and technical specs",
    ],
    niceToHave: ["Next.js experience", "Flutter knowledge", "Prior work in Healthcare or EdTech domain"],
  },
  {
    id: "flutter-mobile",
    title: "Flutter Developer",
    dept: "Mobile",
    icon: <FaMobileScreen size={20} />,
    color: "#F59E0B",
    type: "Full-time",
    location: "Walajapet / Remote",
    experience: "1–4 years",
    salary: "Competitive",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs"],
    about: "We ship mobile apps across Healthcare, EdTech, and Logistics. We're looking for a Flutter developer who cares deeply about performance, smooth animations, and apps that actually feel good to use.",
    responsibilities: [
      "Build and maintain cross-platform Flutter apps (Android + iOS)",
      "Integrate with REST APIs and Firebase services",
      "Implement state management (Riverpod / BLoC / Provider)",
      "Work closely with the design team to implement pixel-perfect UIs",
      "Optimise for performance — smooth 60fps, fast startup, low battery use",
    ],
    requirements: [
      "1+ year of production Flutter development",
      "Published at least one app to Play Store or App Store",
      "Solid understanding of Dart and Flutter widget lifecycle",
      "Experience with at least one state management approach",
      "Comfortable consuming REST APIs and handling auth flows",
    ],
    niceToHave: ["Firebase / Firestore experience", "Experience with camera, Bluetooth, or maps plugins", "Basic understanding of native Android / iOS for plugin debugging"],
  },
  {
    id: "uiux-designer",
    title: "UI/UX Designer",
    dept: "Design",
    icon: <FaPenNib size={20} />,
    color: "#EC4899",
    type: "Full-time",
    location: "Walajapet / Remote",
    experience: "1–4 years",
    salary: "Competitive",
    tags: ["Figma", "UX Research", "Prototyping", "Design Systems"],
    about: "We design products used by doctors, patients, students, and delivery drivers. Good UX here isn't about pretty — it's about clarity under pressure. We're looking for a designer who thinks in flows, not screens.",
    responsibilities: [
      "Lead UX research — user interviews, journey mapping, pain point analysis",
      "Create wireframes, high-fidelity mockups, and interactive prototypes in Figma",
      "Build and maintain design systems that developers can actually implement",
      "Work closely with engineers during handoff to ensure implementation accuracy",
      "Conduct usability testing and iterate based on real user feedback",
    ],
    requirements: [
      "1+ year of product design experience (not just graphic design)",
      "Strong Figma skills — components, auto-layout, variants, prototyping",
      "Portfolio showing end-to-end design work: research → wireframe → hi-fi → shipped",
      "Understanding of mobile design patterns for Android and iOS",
      "Can articulate design decisions — not just 'it looks better'",
    ],
    niceToHave: ["Experience designing healthcare or B2B SaaS products", "Basic knowledge of HTML/CSS to communicate with engineers", "Accessibility-first design mindset"],
  },
  {
    id: "business-dev",
    title: "Business Development Executive",
    dept: "Growth",
    icon: <FaChartLine size={20} />,
    color: "#10B981",
    type: "Full-time",
    location: "Remote (India)",
    experience: "1–3 years",
    salary: "Base + Commission",
    tags: ["B2B Sales", "LinkedIn Outreach", "CRM", "Proposal Writing"],
    about: "We build industry-specific software and we know exactly who needs it. We need someone who can take our Healthcare, EdTech, Logistics, and D2C positioning and convert it into booked discovery calls.",
    responsibilities: [
      "Identify and qualify leads across Healthcare, EdTech, Logistics, and D2C verticals",
      "Run outbound outreach via LinkedIn, cold email, and WhatsApp",
      "Schedule and run initial discovery calls with prospects",
      "Work with the founding team to create tailored proposals",
      "Maintain CRM hygiene and report pipeline metrics weekly",
    ],
    requirements: [
      "1+ year of B2B sales or business development experience",
      "Comfortable making cold calls and sending structured cold emails",
      "Good written English — you write proposals, not just send brochures",
      "Organised — you follow up, you keep notes, you don't let leads go cold",
      "Genuine curiosity about technology products and how businesses use them",
    ],
    niceToHave: ["Prior experience selling to hospitals, clinics, or EdTech companies", "LinkedIn Sales Navigator experience", "Exposure to proposal writing or RFP responses"],
  },
];

const benefits = [
  { icon: <FaLaptop size={24} />, title: "Remote-Friendly", desc: "Work from anywhere in India. We care about the output, not the location. Core hours overlap for standups and demos." },
  { icon: <FaRocket size={24} />, title: "Real Ownership", desc: "You'll own features and ship them to production. No ticket factories. No 6-month onboarding before you touch real code." },
  { icon: <FaGraduationCap size={24} />, title: "Learning Budget", desc: "Annual budget for courses, books, and conferences. We pay for certifications relevant to your role." },
  { icon: <FaHeartPulse size={24} />, title: "Health Coverage", desc: "Health insurance for you and immediate family members from day one." },
  { icon: <FaHandshake size={24} />, title: "Transparent Culture", desc: "No office politics, no hierarchy for hierarchy's sake. Everyone knows the company direction and their role in it." },
  { icon: <FaUsers size={24} />, title: "Small, Fast Team", desc: "You work directly with the founders. Decisions are made in hours, not weeks. Your voice actually counts." },
];

const process = [
  { step: "01", title: "Application", desc: "Send your CV and a short note on why this role and why Hangoutech. No cover letter template needed — just tell us something real." },
  { step: "02", title: "Intro Call (30 min)", desc: "Quick video call with the founding team. We talk about your background, what you're looking for, and what we're building." },
  { step: "03", title: "Technical Review", desc: "A small take-home task or portfolio review. Scoped to 2–3 hours maximum. We pay for your time on any task over 2 hours." },
  { step: "04", title: "Final Conversation", desc: "A deeper discussion about the role, team fit, and mutual expectations. If it's right for both sides, we move fast to an offer." },
];

const JobCard = ({ job }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`job-card card-surface ${open ? "open" : ""}`}>
      <div className="job-card-header" onClick={() => setOpen((o) => !o)}>
        <div className="job-header-left">
          <div className="job-icon" style={{ color: job.color, background: `${job.color}18` }}>
            {job.icon}
          </div>
          <div>
            <h3 className="job-title">{job.title}</h3>
            <div className="job-meta">
              <span className="job-dept" style={{ color: job.color }}>{job.dept}</span>
              <span className="job-meta-dot" />
              <FaLocationDot size={11} />
              <span>{job.location}</span>
              <span className="job-meta-dot" />
              <FaClock size={11} />
              <span>{job.experience}</span>
              <span className="job-meta-dot" />
              <FaIndianRupeeSign size={11} />
              <span>{job.salary}</span>
            </div>
          </div>
        </div>
        <div className="job-expand-icon">
          {open ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
        </div>
      </div>

      <div className="job-tags">
        {job.tags.map((t) => (
          <span key={t} className="job-tag">{t}</span>
        ))}
        <span className="job-type-badge">{job.type}</span>
      </div>

      {open && (
        <div className="job-detail">
          <p className="job-about">{job.about}</p>

          <div className="job-section">
            <div className="job-section-title">Responsibilities</div>
            <ul className="job-list">
              {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>

          <div className="job-section">
            <div className="job-section-title">Requirements</div>
            <ul className="job-list">
              {job.requirements.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>

          <div className="job-section">
            <div className="job-section-title">Nice to Have</div>
            <ul className="job-list job-list--dim">
              {job.niceToHave.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>

          <a
            href={`mailto:work.hangoutech@gmail.com?subject=Application: ${job.title}&body=Hi Hangoutech team,%0A%0AI'm applying for the ${job.title} role.%0A%0A[Tell us a bit about yourself and attach your CV]`}
            className="btn-electric d-inline-block mt-3"
          >
            Apply for This Role →
          </a>
        </div>
      )}
    </div>
  );
};

const CareersPage = () => {
  const responsive = isMobile || isTablet;

  return (
    <>
      <Helmet>
        <title>Careers at Hangoutech | Join Our Engineering & Design Team</title>
        <meta
          name="description"
          content="We're hiring Full Stack Developers, Flutter Developers, UI/UX Designers and Business Development Executives. Build real products for Healthcare, EdTech & D2C clients."
        />
        <link rel="canonical" href="https://hangoutech.com/careers" />
      </Helmet>

      {/* ── HERO ── */}
      <section className={`careers-hero ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center">
          <p className="section-label">Join the Team</p>
          <h1 className="careers-h1">
            Build Products That Actually<br />
            <span className="text-electric">Matter to Real People</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4" style={{ maxWidth: 580 }}>
            At Hangoutech, you'll work on software used by doctors, patients, students, logistics
            operators, and D2C brands. Not internal dashboards. Not todo apps. Real products that
            real businesses depend on every day.
          </p>
          <div className="careers-stats mt-5">
            <div className="careers-stat">
              <div className="careers-stat-num">4</div>
              <div className="careers-stat-label">Open Roles</div>
            </div>
            <div className="careers-stat-div" />
            <div className="careers-stat">
              <div className="careers-stat-num">Remote</div>
              <div className="careers-stat-label">Friendly</div>
            </div>
            <div className="careers-stat-div" />
            <div className="careers-stat">
              <div className="careers-stat-num">Fast</div>
              <div className="careers-stat-label">Hiring Process</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section className={`careers-roles ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="mb-5">
          <p className="section-label">Open Positions</p>
          <h2 className="section-title">Current Openings</h2>
        </div>
        <div className="jobs-list">
          {openings.map((job) => <JobCard key={job.id} job={job} />)}
        </div>
        <div className="no-fit-card card-surface mt-4 text-center">
          <h4 className="no-fit-title">Don't see a role that fits?</h4>
          <p className="no-fit-text">
            We're always interested in hearing from exceptional people. If you think you'd add
            something to the team, send us a note anyway.
          </p>
          <a
            href="mailto:work.hangoutech@gmail.com?subject=Open Application — Hangoutech"
            className="btn-outline-electric d-inline-block mt-3"
          >
            Send an Open Application
          </a>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className={`careers-benefits ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">Why Hangoutech</p>
          <h2 className="section-title">What You Get</h2>
        </div>
        <Row className="g-4">
          {benefits.map((b) => (
            <Col key={b.title} md={6} lg={4}>
              <div className="benefit-card card-surface h-100">
                <div className="benefit-icon">{b.icon}</div>
                <h3 className="benefit-title">{b.title}</h3>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* ── HIRING PROCESS ── */}
      <section className={`careers-process ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">How We Hire</p>
          <h2 className="section-title">4 Steps, No Nonsense</h2>
          <p className="section-subtitle mx-auto mt-3">
            Our hiring process is fast and transparent. We don't do multiple rounds of whiteboard
            theory — we want to see how you actually work.
          </p>
        </div>
        <Row className="g-4">
          {process.map((p) => (
            <Col key={p.step} md={6} lg={3}>
              <div className="process-step-card card-surface h-100">
                <div className="process-step-num">{p.step}</div>
                <h4 className="process-step-title">{p.title}</h4>
                <p className="process-step-desc">{p.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* ── CTA ── */}
      <section className={`careers-cta ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center" style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 className="section-title">Ready to Apply?</h2>
          <p className="section-subtitle mx-auto mt-3">
            Pick a role above, expand it, and hit Apply. We read every application and respond
            to every qualified candidate within 5 business days.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
            <a href="#openings" className="btn-electric">See Open Roles</a>
            <Link to="/about" className="btn-outline-electric">Learn About Us First</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
