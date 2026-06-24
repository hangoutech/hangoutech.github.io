import React from "react";
import IndustryPageTemplate from "./IndustryPageTemplate";
import {
  FaWheatAwn, FaLeaf, FaTractor, FaStore,
  FaCode, FaMobileScreen, FaPenNib, FaPlugCircleCheck, FaCloud, FaWrench,
} from "react-icons/fa6";

const data = {
  accentColor: "#22C55E",

  meta: {
    title: "Agriculture & AgriTech Software Development India | Hangoutech",
    description: "Custom AgriTech solutions for farmers, agribusinesses and FPOs: farm management apps, agri marketplaces, crop monitoring platforms and supply chain software. Built in India.",
    keywords: "agriculture app development India, agritech software development, farm management system India, agri marketplace development, farmer mobile app India",
    canonical: "https://hangoutech.com/industries/agriculture",
  },

  hero: {
    badge: "Agriculture & AgriTech",
    h1: "Custom Software Solutions for Agriculture and Agribusiness",
    accentWords: ["Agriculture", "Agribusiness"],
    sub: "We build mobile apps, marketplaces, and farm management systems for agribusinesses, FPOs, and agritech startups across India. Our work with Findicus is a live example of what we can build for the agriculture sector.",
    ctaText: "Book a Free AgriTech Consultation",
    pills: ["🌾 Farm Management", "📱 Farmer Mobile Apps", "🏪 Agri Marketplace", "🔗 Supply Chain Traceability"],
  },

  painPoints: {
    heading: "The Technology Gaps Holding Agribusinesses Back",
    sub: "We have spoken with farmers, FPO managers, commodity traders, and agritech founders. These are the blockers they raise again and again.",
    items: [
      "No digital platform to connect farmers directly with buyers. Middlemen take a large cut and farmers lose significant margin.",
      "Crop and input records managed on paper or in basic spreadsheets, with no visibility into farm performance over time.",
      "Supply chain has no traceability. Buyers cannot verify the origin, handling, or quality of produce from field to shelf.",
      "Market price information reaches farmers too late or not at all, leaving them unable to time their sales effectively.",
      "Weather alerts, pest advisories, and soil health recommendations are generic and not tied to specific farm locations.",
      "Government scheme eligibility, subsidy tracking, and loan applications are done entirely offline with no digital support.",
    ],
  },

  appTypes: {
    heading: "AgriTech Products We Build",
    sub: "From farmer-facing mobile apps to enterprise agribusiness platforms, we have built solutions across the full agriculture technology stack.",
    items: [
      { title: "Farmer Mobile App", desc: "Offline-capable Android app for farmers: crop calendar, input tracking, yield recording, live market prices, and agri advisory in local languages." },
      { title: "Agri Marketplace Platform", desc: "Buyer-seller marketplace for agricultural produce with quality grading, price discovery, order management, and logistics coordination." },
      { title: "Farm Management System", desc: "Web and mobile platform for managing multiple farm plots: crop planning, input cost tracking, harvest logging, and profit/loss reporting." },
      { title: "Supply Chain Traceability Platform", desc: "Track produce from farm to shelf with QR-based lot tracking, cold chain monitoring, quality checkpoints, and consumer-facing origin verification." },
      { title: "FPO Management System", desc: "Digital platform for Farmer Producer Organisations: member management, input procurement, produce aggregation, and payment distribution to members." },
      { title: "Agri Advisory and Crop Monitoring App", desc: "Location-based crop advisory, weather alerts, pest and disease identification using image AI, and personalised soil health recommendations." },
      { title: "Commodity Trading Platform", desc: "Digital trading platform for agri commodities with live price feeds, buy/sell order management, contract tracking, and settlement processing." },
      { title: "Agricultural Finance App", desc: "Digital lending platform for farmers: KCC loan applications, subsidy tracking, repayment management, and government scheme integration." },
    ],
  },

  segments: [
    {
      title: "Farmers and FPOs",
      icon: <FaWheatAwn size={22} />,
      examples: ["Individual Farmers", "Farmer Producer Organisations (FPOs)", "Farmer Self-Help Groups", "Cooperative Societies", "Organic Farmers"],
      sizes: ["Individual", "10-500 Members", "500+ Members"],
      stakeholders: ["Farmer", "FPO CEO", "Board Members"],
    },
    {
      title: "Agribusinesses and Traders",
      icon: <FaStore size={22} />,
      examples: ["Commodity Traders", "Agri Input Distributors", "Fertiliser Companies", "Seed Companies", "Cold Storage Operators", "Mandi Operators"],
      sizes: ["Small", "Medium", "Large Enterprise"],
      stakeholders: ["Owner", "Operations Head", "Procurement Manager"],
    },
    {
      title: "AgriTech Startups",
      icon: <FaLeaf size={22} />,
      examples: ["Farm-to-Fork Platforms", "Precision Agriculture Startups", "Agri Fintech", "Rural Commerce Platforms", "Crop Insurance Tech"],
      sizes: ["Early Stage", "Growth Stage"],
      stakeholders: ["Founder", "CTO", "Product Head"],
    },
    {
      title: "Food and Processing Companies",
      icon: <FaTractor size={22} />,
      examples: ["Food Processing Companies", "FMCG Brands Sourcing from Farms", "Export Houses", "Organic Food Brands", "Dairy and Poultry Companies"],
      sizes: ["Mid-market", "Enterprise"],
      stakeholders: ["Supply Chain Head", "Procurement Director", "CTO"],
    },
  ],

  services: [
    { icon: <FaMobileScreen size={20} />, text: "Farmer mobile app development, Android-first, offline-capable, with vernacular language support" },
    { icon: <FaCode size={20} />, text: "Web platform development for agribusinesses, marketplace operators, and FPOs" },
    { icon: <FaPlugCircleCheck size={20} />, text: "API integrations with Agmarknet mandi price feeds, eNAM, PM-KISAN, and state government agri portals" },
    { icon: <FaCloud size={20} />, text: "Cloud infrastructure optimised for low-bandwidth rural deployments and offline-first data sync" },
    { icon: <FaPenNib size={20} />, text: "UI/UX design for low-literacy and multilingual farming audiences with icon-heavy, voice-guided interfaces" },
    { icon: <FaWrench size={20} />, text: "Post-launch support, farmer onboarding training, and platform scaling as your user base grows" },
  ],

  techStack: [
    { layer: "Mobile", tech: "Flutter, React Native, Android Native (Kotlin)" },
    { layer: "Frontend", tech: "React.js, Next.js" },
    { layer: "Backend", tech: "Node.js, Python (Django / FastAPI)" },
    { layer: "Database", tech: "PostgreSQL, MongoDB, Redis" },
    { layer: "Maps and GIS", tech: "Google Maps API, Mapbox, satellite imagery APIs" },
    { layer: "Cloud / Infra", tech: "AWS, Google Cloud Platform" },
    { layer: "Payments", tech: "Razorpay, UPI integration, NEFT / IMPS" },
    { layer: "Offline Support", tech: "SQLite, local-first sync architecture for rural connectivity" },
  ],

  process: [
    { step: "01", title: "Discovery", desc: "We spend time understanding your crop cycles, supply chain flows, and the digital literacy of your end users before designing a single screen." },
    { step: "02", title: "Design", desc: "Simple, visual interfaces built for low-literacy and multilingual users. Icon-heavy design, local language support, and offline-first architecture from the start." },
    { step: "03", title: "Build", desc: "Sprint-based development with working demos every 2 weeks. Every build is tested on low-end Android devices and 2G/3G networks typical in rural India." },
    { step: "04", title: "Launch", desc: "Deployment, farmer onboarding, and 90-day post-launch support. We train your field team so adoption actually happens on the ground." },
  ],

  faqs: [
    { q: "Do your apps work in areas with poor internet connectivity?", a: "Yes. We build offline-first mobile apps that work without internet and sync data automatically when connectivity is available. This is a core requirement for agri apps in India and we design for it from day one." },
    { q: "Do you support regional and vernacular languages?", a: "Yes. We build multilingual apps with support for Hindi, Tamil, Telugu, Kannada, Marathi, Bengali, and other regional languages. For low-literacy users we also build icon-based and voice-guided interfaces." },
    { q: "Can you integrate with government agriculture portals and mandi price APIs?", a: "Yes. We have experience integrating with Agmarknet mandi price feeds, PM-KISAN APIs, eNAM, and state government agriculture portals. We also integrate with commodity exchange data feeds for live pricing." },
    { q: "You built the Findicus app. Can you build something similar for our agri business?", a: "Yes. Our work on the Findicus mobile application gave us direct experience building agri-focused digital products in India. We understand the unique challenges of building for farmers and agribusinesses and can apply that experience directly to your project." },
    { q: "How long does it take to build an agri marketplace app?", a: "A functional MVP agri marketplace with buyer-seller matching, product listings, and basic order management typically takes 10 to 14 weeks. A full platform with traceability, payments, and logistics integration takes 20 to 28 weeks depending on scope." },
  ],
};

const AgriculturePage = () => <IndustryPageTemplate data={data} />;

export default AgriculturePage;
