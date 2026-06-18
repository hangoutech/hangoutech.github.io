import React from "react";
import IndustryPageTemplate from "./IndustryPageTemplate";
import {
  FaTruck, FaWarehouse, FaBoxesPacking, FaMotorcycle,
  FaCode, FaMobileScreen, FaPenNib, FaPlugCircleCheck, FaCloud, FaWrench,
} from "react-icons/fa6";

const data = {
  accentColor: "#10B981",

  meta: {
    title: "Logistics & Supply Chain Software Development India | Hangoutech",
    description: "Custom logistics software: fleet management, GPS tracking, order dispatch, warehouse management systems, and last-mile delivery apps. Built for Indian businesses.",
    keywords: "logistics software development India, fleet management software, supply chain software India, warehouse management system, last-mile delivery app development",
    canonical: "https://hangoutech.com/industries/logistics",
  },

  hero: {
    badge: "Logistics & Supply Chain Software",
    h1: "Custom Logistics & Fleet Management Software for Indian Businesses",
    accentWords: ["Fleet Management Software"],
    sub: "We build GPS fleet tracking systems, order management platforms, warehouse management software, and last-mile delivery apps for logistics companies, 3PL providers, and e-commerce fulfillment businesses across India.",
    ctaText: "Book a Free Logistics Tech Consultation",
    pills: ["🚛 Fleet & GPS Tracking", "📦 Warehouse Management", "🛵 Last-Mile Delivery", "🔗 API Integrations"],
  },

  painPoints: {
    heading: "The Operational Gaps Costing Logistics Businesses Every Day",
    sub: "Every day without the right software means lost shipments, angry customers, and money left on the table. These are the issues we hear most from logistics operators.",
    items: [
      "Fleet tracking done through phone calls and manual logbooks, with no real-time visibility into where your vehicles are.",
      "No real-time visibility into shipment location for customers. This leads to constant enquiry calls and eroded trust.",
      "Order management across multiple channels (phone, WhatsApp, website, Shopify) is completely disconnected.",
      "Manual billing, invoice generation, and proof-of-delivery processes causing payment delays and disputes.",
      "Inventory sync between warehouse, dispatch teams, and sales is broken. Overselling and stockouts happen regularly.",
      "No data on driver performance, fuel consumption, route efficiency, or delivery SLAs.",
    ],
  },

  appTypes: {
    heading: "Logistics Software We Build",
    sub: "From small fleet operators to large 3PL warehouses, we've built software for the full logistics stack.",
    items: [
      { title: "Fleet Management & GPS Tracking", desc: "Real-time vehicle location, route optimisation, driver behaviour monitoring, fuel tracking, and maintenance scheduling on a live map dashboard." },
      { title: "Order Management & Dispatch Platform", desc: "Centralised order intake from all channels, auto-assign to drivers, dispatch management, and SLA tracking with escalation alerts." },
      { title: "Last-Mile Delivery Tracking App", desc: "Customer-facing tracking portal with live map, SMS/WhatsApp status updates, delivery window selection, and contactless delivery confirmation." },
      { title: "Warehouse Management System (WMS)", desc: "Inbound receiving, bin allocation, pick-pack-ship workflows, cycle counting, and real-time inventory levels across multiple warehouses." },
      { title: "Driver App with Digital POD", desc: "Mobile app for drivers with delivery manifests, navigation, digital proof-of-delivery (photo, signature, OTP), and cash collection management." },
      { title: "Transport Management System (TMS)", desc: "Full freight management: load planning, carrier allocation, freight costing, consignment tracking, and billing reconciliation." },
      { title: "Customer Tracking Portal", desc: "White-labelled portal for your customers to track shipments, raise disputes, download invoices, and view delivery history." },
      { title: "Vendor & Carrier Management", desc: "Onboard third-party carriers, manage rates, track performance SLAs, and automate payouts based on delivery confirmation." },
    ],
  },

  segments: [
    {
      title: "Fleet Operators & Transport Companies",
      icon: <FaTruck size={22} />,
      examples: ["Trucking & HCV Operators", "LCV / Mini-Truck Fleets", "Tanker & Specialized Transport", "School & Staff Transport", "Taxi / Cab Fleet Operators"],
      sizes: ["10–50 Employees", "50–200 Employees", "200+ Employees"],
      stakeholders: ["Fleet Owner / Director", "Operations Manager", "Dispatch Head", "Finance Manager"],
    },
    {
      title: "3PL & Fulfillment Providers",
      icon: <FaWarehouse size={22} />,
      examples: ["Third-Party Logistics (3PL)", "E-commerce Fulfillment Centers", "Cold Chain & Pharma Logistics", "Customs Clearance & Freight", "Courier & Express Delivery"],
      sizes: ["25–100 Employees", "100–500 Employees", "500+ Employees"],
      stakeholders: ["CEO / Managing Director", "VP Operations", "IT Head", "Warehouse Manager"],
    },
    {
      title: "E-commerce & D2C Brands",
      icon: <FaBoxesPacking size={22} />,
      examples: ["D2C Brands with Own Fulfillment", "Online Marketplace Sellers", "FMCG & Food Delivery Brands", "Grocery & Hyperlocal Delivery"],
      sizes: ["5–50 Employees", "50–200 Employees"],
      stakeholders: ["Founder / COO", "Logistics Head", "Operations Manager"],
    },
    {
      title: "Last-Mile Delivery Startups",
      icon: <FaMotorcycle size={22} />,
      examples: ["Hyperlocal Delivery Startups", "Grocery Delivery Platforms", "Dark Store Operators", "Quick Commerce (Q-Commerce)", "Reverse Logistics Platforms"],
      sizes: ["5–30 Employees (MVP stage)", "30–100 Employees (Growth)"],
      stakeholders: ["Founder / CTO", "Product Manager", "City Operations Head"],
    },
  ],

  services: [
    { icon: <FaCode size={20} />, text: "Custom logistics web platform and admin dashboard development" },
    { icon: <FaMobileScreen size={20} />, text: "Driver and field agent mobile apps (Android & iOS)" },
    { icon: <FaPenNib size={20} />, text: "UI/UX design for complex operational workflows and map-based interfaces" },
    { icon: <FaPlugCircleCheck size={20} />, text: "API integration with Shiprocket, Delhivery, BlueDart, Ecom Express, and other carriers" },
    { icon: <FaCloud size={20} />, text: "Cloud infrastructure on AWS / GCP with 99.9% uptime SLA" },
    { icon: <FaWrench size={20} />, text: "Post-launch support, driver onboarding training, and platform scaling" },
  ],

  techStack: [
    { layer: "Frontend", tech: "React.js, Next.js, Flutter (mobile & driver app)" },
    { layer: "Backend", tech: "Node.js, Python (FastAPI)" },
    { layer: "Database", tech: "PostgreSQL, Redis (real-time caching)" },
    { layer: "Maps & GPS", tech: "Google Maps Platform, Mapbox, HERE Maps" },
    { layer: "Real-time", tech: "Socket.io, WebSockets (live tracking & updates)" },
    { layer: "Cloud / Infra", tech: "AWS (EC2, RDS, S3, SQS), Google Cloud" },
    { layer: "Integrations", tech: "Shiprocket, Delhivery, BlueDart APIs, WhatsApp Business, Twilio" },
    { layer: "Hardware", tech: "GPS device integration (Teltonika, Concox, GT06N protocol)" },
  ],

  process: [
    { step: "01", title: "Discovery", desc: "We map your current dispatch, tracking, and billing workflows to identify where manual processes are creating the most delay and cost." },
    { step: "02", title: "Design", desc: "Operational interfaces built for field users: simple driver apps, powerful dispatcher dashboards, and clean customer-facing portals." },
    { step: "03", title: "Build", desc: "Fortnightly sprint demos. GPS and live tracking features are proven in real vehicles before we move to the next module." },
    { step: "04", title: "Launch", desc: "Rollout support, driver training, and a 90-day hypercare period with direct access to the engineering team." },
  ],

  faqs: [
    { q: "Can your software integrate with existing GPS hardware we already have?", a: "Yes. We support integration with most common GPS tracker protocols: GT06N, Teltonika, Concox, and custom MQTT streams. If your devices send a TCP/UDP data packet, we can parse and display it on our map dashboard." },
    { q: "Can you integrate with Shiprocket, Delhivery, or other Indian courier APIs?", a: "Yes. We have pre-built integration modules for Shiprocket, Delhivery, BlueDart, Ecom Express, Shadowfax, and Borzo. New carrier integrations typically take 3–5 working days to build and test." },
    { q: "How do you handle real-time location updates at scale?", a: "We use WebSocket connections with Redis pub/sub for real-time location broadcasting. Our architecture is tested to handle thousands of concurrent driver connections with sub-2 second location refresh." },
    { q: "Can you build a white-labelled tracking page for our customers?", a: "Yes. A branded customer tracking page with live map, delivery status timeline, and driver ETA is one of our most commonly requested features. It can be embedded in your website or sent as a unique URL via SMS/WhatsApp." },
    { q: "Do you build mobile apps for Android drivers?", a: "Yes. Driver apps are a core part of most logistics builds. We typically build Android-first (given driver device demographics in India) with iOS support where needed. Flutter is our preferred stack for cross-platform driver apps." },
  ],
};

const LogisticsPage = () => <IndustryPageTemplate data={data} />;

export default LogisticsPage;
