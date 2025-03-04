import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage.jsx";
import AllShorts from "./components/AllShorts.jsx"; 
import ContactPage from "./components/ContactPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-shorts" element={<AllShorts />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/contact-page" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
