import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Col, Row } from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";
import {
  SiReact, SiNextdotjs, SiFlutter, SiVuedotjs,
  SiNodedotjs, SiPython, SiDjango, SiFastapi,
  SiPostgresql, SiMongodb, SiMysql, SiRedis,
  SiAmazon, SiGooglecloud, SiVercel, SiCloudflare,
  SiDocker, SiKubernetes, SiGithub, SiGitlab,
  SiTailwindcss, SiBootstrap, SiGraphql, SiFirebase,
  SiStripe, SiRazorpay, SiFigma, SiAdobexd,
  SiTensorflow, SiWhatsapp, SiShopify,
  SiKotlin, SiSwift, SiAndroid, SiOpenjdk,
  SiDotnet, SiSpring, SiPhp, SiLaravel, SiGo,
  SiTypescript, SiAngular, SiGithubactions, SiNginx,
  SiXamarin, SiDart,
} from "react-icons/si";
import {
  FaReact, FaMobileScreen, FaDatabase, FaCloud,
  FaCode, FaPenNib, FaGears, FaPlugCircleCheck,
  FaApple,
} from "react-icons/fa6";
import "./TechStackPage.scss";

const ALL = "All";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: <FaCode size={16} />,
    color: "#2D7DD2",
    desc: "We build fast, accessible, and conversion-optimised frontends using modern frameworks — chosen based on your performance and SEO requirements.",
    techs: [
      { name: "React.js", icon: <SiReact size={36} />, color: "#61DAFB", note: "Web apps & dashboards" },
      { name: "Next.js", icon: <SiNextdotjs size={36} />, color: "#ffffff", note: "SSR / SSG for SEO" },
      { name: "TypeScript", icon: <SiTypescript size={36} />, color: "#3178C6", note: "Typed JS — all projects" },
      { name: "Vue.js", icon: <SiVuedotjs size={36} />, color: "#42B883", note: "Lightweight SPAs" },
      { name: "Angular", icon: <SiAngular size={36} />, color: "#DD0031", note: "Enterprise web apps" },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={36} />, color: "#06B6D4", note: "Utility-first styling" },
      { name: "Bootstrap", icon: <SiBootstrap size={36} />, color: "#7952B3", note: "Rapid UI development" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: <FaMobileScreen size={16} />,
    color: "#F59E0B",
    desc: "We build mobile apps across the full spectrum — native Android (Kotlin / Java), native iOS (Swift), and cross-platform (Flutter / React Native). Native when performance or device APIs demand it; Flutter for speed and single-codebase efficiency.",
    techs: [
      { name: "Flutter", icon: <SiFlutter size={36} />, color: "#54C5F8", note: "Cross-platform (Android + iOS)" },
      { name: "Dart", icon: <SiDart size={36} />, color: "#0175C2", note: "Flutter's language" },
      { name: "React Native", icon: <FaReact size={36} />, color: "#61DAFB", note: "JS-based cross-platform" },
      { name: "Android Native", icon: <SiAndroid size={36} />, color: "#3DDC84", note: "Kotlin / Java — full native" },
      { name: "Kotlin", icon: <SiKotlin size={36} />, color: "#7F52FF", note: "Modern Android development" },
      { name: "Java (Android)", icon: <SiOpenjdk size={36} />, color: "#ED8B00", note: "Legacy Android & enterprise" },
      { name: "iOS Native", icon: <FaApple size={36} />, color: "#ffffff", note: "Swift — full native iOS" },
      { name: "Swift", icon: <SiSwift size={36} />, color: "#FA7343", note: "iOS / macOS development" },
      { name: "Xamarin", icon: <SiXamarin size={36} />, color: "#3498DB", note: ".NET cross-platform mobile" },
      { name: "Firebase", icon: <SiFirebase size={36} />, color: "#FFCA28", note: "Auth, push, real-time DB" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: <FaGears size={16} />,
    color: "#10B981",
    desc: "Scalable APIs, microservices, and server infrastructure. We pick the right language and framework for your traffic patterns, team, and long-term maintenance needs — Node.js for real-time, Python for ML, Java/Spring for enterprise, .NET for Microsoft stacks.",
    techs: [
      { name: "Node.js", icon: <SiNodedotjs size={36} />, color: "#339933", note: "REST APIs & real-time" },
      { name: "Python", icon: <SiPython size={36} />, color: "#3776AB", note: "AI/ML & data pipelines" },
      { name: "Django", icon: <SiDjango size={36} />, color: "#44B78B", note: "Full-stack Python framework" },
      { name: "FastAPI", icon: <SiFastapi size={36} />, color: "#009688", note: "High-performance Python APIs" },
      { name: "Java", icon: <SiOpenjdk size={36} />, color: "#ED8B00", note: "Enterprise-grade backend" },
      { name: "Spring Boot", icon: <SiSpring size={36} />, color: "#6DB33F", note: "Java microservices & APIs" },
      { name: ".NET / C#", icon: <SiDotnet size={36} />, color: "#512BD4", note: "Microsoft ecosystem & enterprise" },
      { name: "Go (Golang)", icon: <SiGo size={36} />, color: "#00ADD8", note: "High-throughput microservices" },
      { name: "PHP", icon: <SiPhp size={36} />, color: "#777BB4", note: "Web scripting & CMS backends" },
      { name: "Laravel", icon: <SiLaravel size={36} />, color: "#FF2D20", note: "PHP full-stack framework" },
      { name: "GraphQL", icon: <SiGraphql size={36} />, color: "#E10098", note: "Flexible data querying" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: <FaDatabase size={16} />,
    color: "#EC4899",
    desc: "From relational to document stores to in-memory caching — we choose the database that fits your data model, not the one we're most comfortable with.",
    techs: [
      { name: "PostgreSQL", icon: <SiPostgresql size={36} />, color: "#4169E1", note: "Primary relational DB" },
      { name: "MongoDB", icon: <SiMongodb size={36} />, color: "#47A248", note: "Document store" },
      { name: "MySQL", icon: <SiMysql size={36} />, color: "#4479A1", note: "Legacy & enterprise" },
      { name: "Redis", icon: <SiRedis size={36} />, color: "#DC382D", note: "Caching & sessions" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Infra",
    icon: <FaCloud size={16} />,
    color: "#8B5CF6",
    desc: "We deploy on AWS and GCP, with Vercel for frontend-heavy projects. Every production environment is containerised, monitored, and backed up.",
    techs: [
      { name: "AWS", icon: <SiAmazon size={36} />, color: "#FF9900", note: "Primary cloud provider" },
      { name: "Google Cloud", icon: <SiGooglecloud size={36} />, color: "#4285F4", note: "ML & data workloads" },
      { name: "Vercel", icon: <SiVercel size={36} />, color: "#ffffff", note: "Next.js deployments" },
      { name: "Cloudflare", icon: <SiCloudflare size={36} />, color: "#F48120", note: "CDN & DDoS protection" },
      { name: "Docker", icon: <SiDocker size={36} />, color: "#2496ED", note: "Containerisation" },
      { name: "Kubernetes", icon: <SiKubernetes size={36} />, color: "#326CE5", note: "Container orchestration" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    icon: <FaGears size={16} />,
    color: "#06B6D4",
    desc: "CI/CD pipelines that deploy on every merge, automated testing, rollback on failure. You don't manage deployments — we set it up so they just happen.",
    techs: [
      { name: "GitHub", icon: <SiGithub size={36} />, color: "#ffffff", note: "Source control & CI" },
      { name: "GitHub Actions", icon: <SiGithubactions size={36} />, color: "#2088FF", note: "Automated CI/CD pipelines" },
      { name: "GitLab", icon: <SiGitlab size={36} />, color: "#FC6D26", note: "Self-hosted CI/CD" },
      { name: "Docker", icon: <SiDocker size={36} />, color: "#2496ED", note: "Build & run containers" },
      { name: "Kubernetes", icon: <SiKubernetes size={36} />, color: "#326CE5", note: "Container orchestration" },
      { name: "Nginx", icon: <SiNginx size={36} />, color: "#009639", note: "Web server & reverse proxy" },
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: <FaPlugCircleCheck size={16} />,
    color: "#F59E0B",
    desc: "We've integrated with dozens of third-party services. If your industry needs it, we've probably built the connector.",
    techs: [
      { name: "WhatsApp API", icon: <SiWhatsapp size={36} />, color: "#25D366", note: "WATI / Interakt / Gupshup" },
      { name: "Stripe", icon: <SiStripe size={36} />, color: "#635BFF", note: "Global payments" },
      { name: "Razorpay", icon: <SiRazorpay size={36} />, color: "#2DAAFE", note: "India payments" },
      { name: "Shopify", icon: <SiShopify size={36} />, color: "#96BF48", note: "Commerce platform" },
      { name: "TensorFlow", icon: <SiTensorflow size={36} />, color: "#FF6F00", note: "ML model serving" },
    ],
  },
  {
    id: "design",
    label: "Design",
    icon: <FaPenNib size={16} />,
    color: "#EC4899",
    desc: "Our design team works in Figma. Every product gets a proper design system — not a one-off mockup — so your UI stays consistent as the product grows.",
    techs: [
      { name: "Figma", icon: <SiFigma size={36} />, color: "#F24E1E", note: "UI/UX design & prototyping" },
      { name: "Adobe XD", icon: <SiAdobexd size={36} />, color: "#FF61F6", note: "Design handoff" },
    ],
  },
];

const industryStacks = [
  {
    industry: "Healthcare",
    color: "#2D7DD2",
    stack: ["React.js", "Node.js", "PostgreSQL", "Flutter", "AWS", "WhatsApp API"],
  },
  {
    industry: "EdTech",
    color: "#F59E0B",
    stack: ["Next.js", "Node.js", "MongoDB", "Flutter", "AWS S3", "Razorpay"],
  },
  {
    industry: "Logistics",
    color: "#10B981",
    stack: ["React.js", "Node.js", "PostgreSQL", "Flutter", "Google Maps", "Redis"],
  },
  {
    industry: "Retail & D2C",
    color: "#EC4899",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS CloudFront", "WhatsApp API"],
  },
];

const TechStackPage = () => {
  const responsive = isMobile || isTablet;
  const [activeFilter, setActiveFilter] = useState(ALL);

  const filters = [ALL, ...categories.map((c) => c.label)];
  const visible = activeFilter === ALL ? categories : categories.filter((c) => c.label === activeFilter);

  return (
    <>
      <Helmet>
        <title>Our Tech Stack | Hangoutech — React, Flutter, Node.js, AWS & More</title>
        <meta
          name="description"
          content="Hangoutech builds with React, Next.js, Flutter, Node.js, Python, PostgreSQL, AWS, and more. See the full technology stack we use across Healthcare, EdTech, Logistics and D2C projects."
        />
        <link rel="canonical" href="https://hangoutech.com/tech-stack" />
      </Helmet>

      {/* ── HERO ── */}
      <section className={`ts-hero ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center">
          <p className="section-label">Our Technology</p>
          <h1 className="section-title" style={{ maxWidth: 680, margin: "0 auto" }}>
            The Tech Stack Behind Every Product We Build
          </h1>
          <p className="section-subtitle mx-auto mt-3" style={{ maxWidth: 580 }}>
            We don't have a favourite stack — we pick the right technology for your product's performance
            requirements, team, budget, and long-term maintenance needs. Here's what that typically looks like.
          </p>
        </div>
      </section>

      {/* ── FILTER ── */}
      <section className={`ts-filter-section ${responsive ? "px-4" : "px-5"}`}>
        <div className="ts-filter-row">
          {filters.map((f) => (
            <button
              key={f}
              className={`ts-filter-btn ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ── TECH CATEGORIES ── */}
      <section className={`ts-categories ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        {visible.map((cat) => (
          <div key={cat.id} className="ts-category-block">
            <div className="ts-category-header">
              <div className="ts-cat-icon" style={{ color: cat.color, background: `${cat.color}18` }}>
                {cat.icon}
              </div>
              <div>
                <h2 className="ts-cat-title">{cat.label}</h2>
                <p className="ts-cat-desc">{cat.desc}</p>
              </div>
            </div>
            <div className="ts-logo-wall">
              {cat.techs.map((tech) => (
                <div key={tech.name} className="ts-logo-card card-surface">
                  <div className="ts-logo-icon" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <div className="ts-logo-name">{tech.name}</div>
                  <div className="ts-logo-note">{tech.note}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── INDUSTRY STACKS ── */}
      <section className={`ts-industry-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center mb-5">
          <p className="section-label">By Vertical</p>
          <h2 className="section-title">Typical Stack Per Industry</h2>
          <p className="section-subtitle mx-auto mt-3">
            The tools we reach for most often in each vertical — shaped by years of building
            in that domain.
          </p>
        </div>
        <Row className="g-4">
          {industryStacks.map((ind) => (
            <Col key={ind.industry} md={6}>
              <div className="ts-industry-card card-surface h-100">
                <div className="ts-ind-label" style={{ color: ind.color }}>{ind.industry}</div>
                <div className="ts-ind-pills">
                  {ind.stack.map((t) => (
                    <span key={t} className="ts-ind-pill" style={{ borderColor: `${ind.color}40`, color: ind.color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className={`ts-philosophy ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <Row className="g-5 align-items-center">
          <Col lg={5}>
            <p className="section-label">Our Philosophy</p>
            <h2 className="section-title">We Don't Have a Favourite Stack</h2>
          </Col>
          <Col lg={7}>
            <div className="philosophy-points">
              {[
                { title: "Right tool, right job", text: "We use Next.js when you need SEO and React when you need a fast SPA. We use Flutter when you need one codebase for two platforms and native when you need camera or Bluetooth-level performance." },
                { title: "No vendor lock-in", text: "We architect so you're not tied to a single cloud provider, SaaS tool, or framework. Your codebase is yours — readable, documented, and transferable." },
                { title: "Proven over trendy", text: "We use boring, well-understood technology for the infrastructure layer and save experimentation for features, not foundations. Your production system isn't a lab." },
                { title: "Scalability from day one", text: "We design the data model and API contracts for where you'll be in two years, not just where you are today. Scaling shouldn't require a rewrite." },
              ].map((p) => (
                <div key={p.title} className="philosophy-point">
                  <h4 className="phil-title">{p.title}</h4>
                  <p className="phil-text">{p.text}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </section>

      {/* ── CTA ── */}
      <section className={`ts-cta ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
        <div className="text-center" style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 className="section-title">Want to Discuss the Right Stack for Your Product?</h2>
          <p className="section-subtitle mx-auto mt-3">
            Free 30-minute tech consultation — we'll map out the right architecture for your use case, team, and budget.
          </p>
          <Link to="/contact" className="btn-electric d-inline-block mt-4">
            Book a Free Tech Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default TechStackPage;
