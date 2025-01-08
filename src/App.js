import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhoWe from "./pages/WhoWe";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Leaders from "./pages/Leaders";
import Branch from "./pages/Branch";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<WhoWe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/branch" element={<Branch  />} />
          <Route path="/about/leaders" element={<Leaders />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
