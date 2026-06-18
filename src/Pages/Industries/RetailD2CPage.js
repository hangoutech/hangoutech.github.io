import React from "react";
import IndustryPageTemplate from "./IndustryPageTemplate";
import {
  FaBagShopping, FaStore, FaBoxOpen, FaTag,
  FaCode, FaMobileScreen, FaPenNib, FaPlugCircleCheck, FaCloud, FaWrench,
} from "react-icons/fa6";

const data = {
  accentColor: "#EC4899",

  meta: {
    title: "D2C & Retail Ecommerce Development India | Hangoutech",
    description: "Custom ecommerce and D2C tech solutions for Indian retail brands: headless commerce, loyalty programs, multi-channel inventory, and WhatsApp commerce. Built to convert.",
    keywords: "D2C ecommerce development India, custom ecommerce platform India, headless commerce development, D2C brand technology, retail software development India",
    canonical: "https://hangoutech.com/industries/retail-d2c",
  },

  hero: {
    badge: "Retail & D2C Technology",
    h1: "Custom Ecommerce & D2C Tech Solutions for Indian Retail Brands",
    accentWords: ["D2C Tech Solutions"],
    sub: "We build custom D2C storefronts, headless commerce platforms, loyalty programs, product recommendation engines, and WhatsApp commerce integrations for Indian retail and consumer brands ready to own their direct channel.",
    ctaText: "Book a Free D2C Tech Consultation",
    pills: ["🛒 Custom Storefronts", "📲 WhatsApp Commerce", "💎 Loyalty Programs", "🔄 Multi-Channel Inventory"],
  },

  painPoints: {
    heading: "The Tech Gaps Keeping D2C Brands Stuck on Marketplaces",
    sub: "Selling on Amazon and Flipkart is fine for volume, but it is not building your brand. These are the blockers we hear from D2C founders week after week.",
    items: [
      "Selling on marketplaces only with no direct channel, no customer data, no brand equity, and 15–30% commission bleed.",
      "Checkout experience on current website is clunky and slow. Mobile users are abandoning at 70%+ rates.",
      "No personalisation or loyalty system. Customers buy once and never return because there is nothing to bring them back.",
      "Inventory sync across Shopify, Amazon, Meesho, and physical stores is done manually in spreadsheets. Overselling happens daily.",
      "No data on customer behaviour, repeat purchase patterns, or cohort LTV. Marketing decisions are guesswork.",
      "WhatsApp is where customers are, but there is no commerce flow. Just broadcast messages that nobody reads.",
    ],
  },

  appTypes: {
    heading: "D2C & Retail Products We Build",
    sub: "From first-time D2C brands to scaling retail chains, we've built commerce technology at every stage of growth.",
    items: [
      { title: "Custom D2C Ecommerce Storefront", desc: "Performance-optimised storefront built around your brand: custom design, fast checkout, mobile-first, and SEO-ready from day one." },
      { title: "Headless Commerce Platform", desc: "Decouple your frontend from your commerce backend for maximum performance and flexibility. React/Next.js frontend with Shopify, Medusa, or custom API backend." },
      { title: "Loyalty & Rewards Program", desc: "Points-based loyalty, tiered memberships, referral programs, and cashback systems that drive repeat purchase and increase LTV." },
      { title: "Product Recommendation Engine", desc: "Smart recommendations: Customers also bought, 'Complete the look', personalised homepage, and smart cart upsell widgets." },
      { title: "Multi-Channel Inventory Management", desc: "Single inventory source of truth synced across Shopify, Amazon, Flipkart, Meesho, Myntra, and physical stores in real time." },
      { title: "WhatsApp Commerce Integration", desc: "Full WhatsApp shopping flow: product catalogue, cart, order confirmation, tracking updates, COD/prepaid checkout, and customer support." },
      { title: "Subscription Commerce Platform", desc: "Recurring billing, subscription box management, pause/skip/cancel flows, and churn-reduction automation for subscription brands." },
      { title: "Returns & Reverse Logistics Portal", desc: "Self-service returns initiation, pickup scheduling, refund/exchange processing, and integration with reverse logistics partners." },
    ],
  },

  segments: [
    {
      title: "D2C Consumer Brands",
      icon: <FaBagShopping size={22} />,
      examples: ["Beauty & Skincare Brands", "Health & Wellness Brands", "Food & Beverage D2C", "Apparel & Fashion Brands", "Home & Lifestyle Brands", "Pet Care Brands", "Baby & Parenting Products"],
      sizes: ["1–20 Employees (Startup)", "20–100 Employees (Growth)", "100–500 Employees (Scale)"],
      stakeholders: ["Founder / Co-Founder", "VP Ecommerce / Growth", "Product Manager", "CTO"],
    },
    {
      title: "Retail Chains & Omnichannel Brands",
      icon: <FaStore size={22} />,
      examples: ["Multi-City Retail Chains", "Fashion & Apparel Retailers", "Electronics Retailers", "Pharmacy & Healthcare Retail", "Grocery & FMCG Chains", "Jewellery & Luxury Retail"],
      sizes: ["50–200 Employees", "200–1000 Employees"],
      stakeholders: ["CEO / MD", "Head of Ecommerce", "IT Director", "Category Manager"],
    },
    {
      title: "Private Label & Manufacturing Brands",
      icon: <FaBoxOpen size={22} />,
      examples: ["Manufacturers Going D2C", "White Label Product Brands", "Export Brands Entering India", "Co-operative & Farmers Collective D2C"],
      sizes: ["10–50 Employees", "50–200 Employees"],
      stakeholders: ["Managing Partner", "Business Development Head", "Operations Head"],
    },
    {
      title: "Marketplace Sellers Going D2C",
      icon: <FaTag size={22} />,
      examples: ["Amazon / Flipkart Top Sellers", "Meesho & Myntra Sellers", "Nykaa / Zepto Brand Partners", "Social Commerce Sellers (Instagram)"],
      sizes: ["5–30 Employees", "30–100 Employees"],
      stakeholders: ["Founder / Owner", "Ecommerce Manager", "Marketing Head"],
    },
  ],

  services: [
    { icon: <FaCode size={20} />, text: "Custom ecommerce platform and D2C storefront development" },
    { icon: <FaMobileScreen size={20} />, text: "Mobile commerce apps (Android & iOS) with native checkout experience" },
    { icon: <FaPenNib size={20} />, text: "Conversion-optimised UI/UX design with A/B tested checkout flows and PDP layouts" },
    { icon: <FaPlugCircleCheck size={20} />, text: "Integration with Razorpay, PayU, Shiprocket, WhatsApp Business, and marketplace APIs" },
    { icon: <FaCloud size={20} />, text: "High-performance cloud hosting on AWS / GCP, built for traffic spikes during sales events" },
    { icon: <FaWrench size={20} />, text: "Post-launch CRO support, A/B testing, and ongoing platform optimisation" },
  ],

  techStack: [
    { layer: "Frontend", tech: "Next.js (SSR/SSG), React.js, Flutter (mobile)" },
    { layer: "Commerce Backend", tech: "Medusa.js, Shopify Storefront API, custom Node.js APIs" },
    { layer: "Database", tech: "PostgreSQL, Redis (cart & session), Elasticsearch (product search)" },
    { layer: "Payments", tech: "Razorpay, PayU, Cashfree, Stripe, UPI QR" },
    { layer: "Cloud / Infra", tech: "AWS (CloudFront CDN, S3, RDS), Vercel Edge" },
    { layer: "Integrations", tech: "WhatsApp Business API (WATI / Interakt), Shiprocket, Clevertap, MoEngage" },
    { layer: "Analytics", tech: "Google Analytics 4, Mixpanel, Meta Pixel, Google Tag Manager" },
    { layer: "Search & Personalisation", tech: "Algolia, Elasticsearch, custom ML recommendation models" },
  ],

  process: [
    { step: "01", title: "Discovery", desc: "We audit your current conversion funnel, customer journey, and tech stack to define what to build and in what order for fastest ROI." },
    { step: "02", title: "Design", desc: "Conversion-first design. Every page, every CTA, every checkout step is designed to reduce friction and drive purchase." },
    { step: "03", title: "Build", desc: "Sprint-based development. Your storefront is live in staging after 4–6 weeks so you can test with real users before full launch." },
    { step: "04", title: "Launch & Optimise", desc: "We handle launch, SEO migration, and the first 90 days of CRO, tracking performance and shipping improvements weekly." },
  ],

  faqs: [
    { q: "Should we build a custom storefront or use Shopify?", a: "It depends on your stage. For most brands under ₹5Cr ARR, Shopify is faster and more cost-effective. Above that threshold, or if you need deep customisation, headless flexibility, or want to avoid 2% transaction fees, a custom storefront makes sense. We build both and will give you an honest recommendation." },
    { q: "Can you migrate our existing Shopify store to a custom platform?", a: "Yes. We handle full Shopify-to-custom migrations including product data, customer records, order history, SEO URL preservation, and redirect mapping. Zero data loss, zero downtime." },
    { q: "How do you handle high traffic during sale events?", a: "We architect for peak load from day one: autoscaling infrastructure on AWS, CDN for all static assets, Redis caching for product and cart data, and load testing before every major sale. Your site won't go down on sale day." },
    { q: "Can you build WhatsApp shopping into our existing website?", a: "Yes. We integrate WhatsApp Business API (via WATI, Interakt, or Gupshup) to enable product catalogue browsing, cart sharing, order confirmation, COD collection, and post-purchase tracking updates, all within WhatsApp." },
    { q: "Do you build loyalty and rewards programs?", a: "Yes. Loyalty and referral programs are one of our most in-demand D2C features. We build custom points engines, tiered membership systems, referral flows with attribution, and integrate with push/email/WhatsApp notifications to drive redemption." },
  ],
};

const RetailD2CPage = () => <IndustryPageTemplate data={data} />;

export default RetailD2CPage;
