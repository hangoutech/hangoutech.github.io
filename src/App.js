import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HeaderNavbar from "./Pages/Navbar/HeaderNavbar";
import Footer from "./Pages/Footer/Footer";

// Pages
import HomePage from "./Pages/Home/HomePage";
import ContactPage from "./Pages/Contact/ContactPage";
import IndustriesHub from "./Pages/Industries/IndustriesHub";
import HealthcarePage from "./Pages/Industries/HealthcarePage";
import EdTechPage from "./Pages/Industries/EdTechPage";
import LogisticsPage from "./Pages/Industries/LogisticsPage";
import RetailD2CPage from "./Pages/Industries/RetailD2CPage";
import AgriculturePage from "./Pages/Industries/AgriculturePage";
import AboutPage from "./Pages/About2/AboutPage";
import CaseStudiesPage from "./Pages/CaseStudies/CaseStudiesPage";
import BlogPage from "./Pages/Blog/BlogPage";
import TechStackPage from "./Pages/TechStack/TechStackPage";
import CareersPage from "./Pages/Careers/CareersPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="layout">
      <HeaderNavbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/industries" element={<IndustriesHub />} />
        <Route path="/industries/healthcare" element={<HealthcarePage />} />
        <Route path="/industries/edtech" element={<EdTechPage />} />
        <Route path="/industries/logistics" element={<LogisticsPage />} />
        <Route path="/industries/retail-d2c" element={<RetailD2CPage />} />
        <Route path="/industries/agriculture" element={<AgriculturePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
