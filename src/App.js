import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Clients from "./Pages/Clients/Clients";
import Services from "./Pages/Services/Services";
import Footer from "./Pages/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import { useEffect, useState } from "react";

function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="layout">
      <div className=" container-fluid p-0 layout">
        <Home isSticky={isSticky} />
        <Clients />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
