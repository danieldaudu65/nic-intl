import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhoWe from "./pages/WhoWe";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Leaders from "./pages/Leaders";
import Branch from "./pages/Branch";
import Giving from "./pages/Giving";
import Audio from "./pages/Audio";
import Videos from "./pages/Videos";
import Pictures from "./pages/Pictures";
import Media from "./pages/Media";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<WhoWe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/giving" element={<Giving  />} />
          <Route path="/branch" element={<Branch  />} />
          <Route path="/about/leaders" element={<Leaders />} />
          <Route path="/about" element={<Media />} />
          <Route path="/media/audio" element={<Audio />} />
          <Route path="/media/video" element={<Videos />} />
          <Route path="/media/picture" element={<Pictures />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
