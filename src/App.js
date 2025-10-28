import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Clients from "./Pages/Clients/Clients";
import Services from "./Pages/Services/Services";
import Footer from "./Pages/Footer/Footer";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="layout">
      <div className=" container-fluid p-0 layout">
        <Home />
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
