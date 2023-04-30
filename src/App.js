import { Route, Routes } from "react-router-dom";
import Home  from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Services" element ={<Services />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
