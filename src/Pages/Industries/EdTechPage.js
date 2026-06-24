import React from "react";
import IndustryPageTemplate from "./IndustryPageTemplate";
import {
  FaGraduationCap, FaChalkboardUser, FaSchool, FaLaptopCode,
  FaCode, FaMobileScreen, FaPenNib, FaPlugCircleCheck, FaCloud, FaWrench,
} from "react-icons/fa6";

const data = {
  accentColor: "#F59E0B",

  meta: {
    title: "EdTech Software Development Company India | Hangoutech",
    description: "Custom EdTech platforms for schools, coaching centres & online learning brands: LMS, live class apps, student dashboards, and online examination systems. Built in India.",
    keywords: "EdTech app development India, LMS development India, online learning platform development, EdTech software company India",
    canonical: "https://hangoutech.com/industries/edtech",
  },

  hero: {
    badge: "EdTech Software Development",
    h1: "Custom EdTech Platforms for Schools, Coaching Centres & Online Learning Brands",
    accentWords: ["Schools, Coaching Centres"],
    sub: "We design and build learning management systems, live class platforms, student progress dashboards, and online examination tools for EdTech startups, coaching brands, and schools across India.",
    ctaText: "Book a Free EdTech Consultation",
    pills: ["🎓 4 Segment Types", "📱 Mobile-First Builds", "⚡ MVP in 8–12 Weeks", "🇮🇳 India-Focused"],
  },

  painPoints: {
    heading: "The Technology Gaps Holding EdTech Businesses Back",
    sub: "We've spoken with school directors, coaching centre owners, and EdTech founders. These are the blockers they raise again and again.",
    items: [
      "No platform to deliver live or recorded classes at scale. Sending Zoom links on WhatsApp is not a product.",
      "Student progress tracking done manually in Excel sheets or WhatsApp groups. No dashboards, no data.",
      "Payment collection for courses is fragmented and manual, leading to missed revenue and poor cash flow visibility.",
      "No mobile app. Students are forced to attend only on laptop or desktop, which creates friction and drop-off.",
      "No interactive assessments, quizzes, or proctored exam functionality. Everything is paper or Google Forms.",
      "No parent visibility into student attendance, performance, or homework completion.",
    ],
  },

  appTypes: {
    heading: "EdTech Products We Build",
    sub: "From single coaching centres to multi-city EdTech SaaS platforms, we've built software across the full spectrum of education technology.",
    items: [
      { title: "Learning Management System (LMS)", desc: "Full-featured LMS with course management, student enrolment, progress tracking, certificates, and admin dashboards." },
      { title: "Live Class Platform", desc: "Real-time video classes with whiteboard, breakout rooms, attendance, polls, and recording. Scalable to thousands of concurrent students." },
      { title: "Recorded Course Platform", desc: "Self-paced learning with video hosting, chapter-by-chapter progress, drip content scheduling, and completion certificates." },
      { title: "Student Progress Tracking Dashboard", desc: "Visual dashboards for teachers and parents showing attendance, assignment scores, quiz performance, and learning streaks." },
      { title: "Online Examination & Quiz System", desc: "Timed assessments with auto-grading, question banks, randomisation, anti-cheating tools, and instant result generation." },
      { title: "Parent-Teacher Communication App", desc: "Structured communication portal for announcements, homework alerts, meeting booking, and report card sharing." },
      { title: "Course Marketplace / EdTech SaaS", desc: "Multi-vendor course marketplace where educators can list and sell courses with payment integration and revenue sharing." },
      { title: "Mobile Learning App (Android & iOS)", desc: "Native or Flutter mobile app for students to access classes, assignments, and progress reports on the go." },
      { title: "AI-Powered Doubt Resolution", desc: "In-platform Q&A with AI-assisted responses, peer discussion forums, and tutor live support queuing." },
    ],
  },

  segments: [
    {
      title: "Coaching Centres & Institutes",
      icon: <FaChalkboardUser size={22} />,
      examples: ["IIT-JEE / NEET Coaching", "CA / CS Institutes", "UPSC Coaching Centres", "MBA Entrance Prep", "Language Learning Centres", "Spoken English Institutes", "Skill Development Centres"],
      sizes: ["1–10 Employees", "10–50 Employees", "50–200 Employees"],
      stakeholders: ["Owner / Director", "Academic Head", "Operations Manager", "Marketing Head"],
    },
    {
      title: "Schools & K-12 Institutions",
      icon: <FaSchool size={22} />,
      examples: ["CBSE / ICSE Schools", "International Schools (IB / Cambridge)", "State Board Schools", "Play Schools & Pre-KG", "Special Education Schools"],
      sizes: ["10–50 Employees", "50–200 Employees", "200+ Employees"],
      stakeholders: ["Principal / Director", "IT Coordinator", "Academic Coordinator", "Management Committee"],
    },
    {
      title: "Online Learning Brands",
      icon: <FaLaptopCode size={22} />,
      examples: ["Online Course Creators", "EdTech Startups (B2C)", "Corporate L&D Platforms", "Professional Certification Bodies", "Government Skilling Programs"],
      sizes: ["1–10 Employees (Startup)", "10–50 Employees", "50–200 Employees"],
      stakeholders: ["Founder / Co-Founder", "CTO / Product Head", "Content Head", "Growth Manager"],
    },
    {
      title: "Universities & Higher Education",
      icon: <FaGraduationCap size={22} />,
      examples: ["Engineering Colleges", "Management Institutes (MBA)", "Arts & Science Colleges", "Distance Learning Programmes", "Professional Education Bodies"],
      sizes: ["100–500 Employees", "500+ Employees"],
      stakeholders: ["Vice Chancellor / Principal", "IT Director", "Dean of Academics", "Registrar"],
    },
  ],

  services: [
    { icon: <FaCode size={20} />, text: "Custom LMS and EdTech web platform development" },
    { icon: <FaMobileScreen size={20} />, text: "Mobile app development (Android & iOS) for students, teachers, and parents" },
    { icon: <FaPenNib size={20} />, text: "UI/UX design for EdTech, intuitive interfaces for all age groups" },
    { icon: <FaPlugCircleCheck size={20} />, text: "Payment gateway integration (Razorpay, PayU, Stripe) for course fee collection" },
    { icon: <FaCloud size={20} />, text: "Video hosting and streaming infrastructure (Vimeo, Cloudflare Stream, S3)" },
    { icon: <FaWrench size={20} />, text: "Post-launch support, content management training, and platform scaling" },
  ],

  techStack: [
    { layer: "Mobile", tech: "Android Native (Kotlin), iOS (Swift), Flutter, React Native" },
    { layer: "Frontend", tech: "React.js, Next.js, TypeScript" },
    { layer: "Backend", tech: "Node.js, Python (Django / FastAPI)" },
    { layer: "Database", tech: "PostgreSQL, MongoDB, Redis, Firebase" },
    { layer: "Video Streaming", tech: "Cloudflare Stream, AWS S3 + CloudFront, Vimeo OTT" },
    { layer: "Real-time", tech: "WebRTC, Socket.io, Agora SDK" },
    { layer: "Cloud / Infra", tech: "AWS, Google Cloud Platform, Docker, Kubernetes" },
    { layer: "Payments", tech: "Razorpay, PayU, Stripe, Cashfree" },
    { layer: "Notifications", tech: "Firebase FCM, WhatsApp Business API, Twilio SMS" },
  ],

  process: [
    { step: "01", title: "Discovery", desc: "We map your curriculum structure, learner journey, and admin workflows before designing a single screen." },
    { step: "02", title: "Design", desc: "Learner-first design. Interfaces built for students of all ages and comfort levels with technology." },
    { step: "03", title: "Build", desc: "Sprint-based development with working demos every 2 weeks. You see real progress, not a six-month black box." },
    { step: "04", title: "Launch", desc: "Go-live support, teacher onboarding, and 90-day post-launch assistance so your team hits the ground running." },
  ],

  faqs: [
    { q: "How long does it take to build an LMS from scratch?", a: "A functional MVP LMS with course management, student enrolment, and basic video streaming typically takes 8–12 weeks. A full-featured platform with live classes, assessments, and mobile apps takes 16–24 weeks depending on scope." },
    { q: "Can you integrate with Zoom or Google Meet for live classes?", a: "Yes. We can integrate with Zoom, Google Meet, or Microsoft Teams APIs for live class scheduling. We also build native WebRTC video solutions for platforms that need full control over the experience without third-party dependency." },
    { q: "Do you build mobile apps for EdTech platforms?", a: "Yes. We build native Android, native iOS, and cross-platform Flutter apps. Most EdTech clients choose Flutter for the faster timeline and single codebase, while maintaining near-native performance." },
    { q: "Can you migrate an existing platform to a new tech stack?", a: "Yes. We've migrated platforms from WordPress to React, from CodeIgniter to Node.js, and from legacy systems to modern cloud infrastructure. We handle data migration, SEO preservation, and zero-downtime deployment." },
    { q: "What payment gateways do you support for course fee collection?", a: "We integrate with Razorpay, PayU, Cashfree, and Stripe. For international payments we also support PayPal and Stripe's global payment routing. Subscription billing and EMI options are fully supported." },
  ],
};

const EdTechPage = () => <IndustryPageTemplate data={data} />;

export default EdTechPage;
