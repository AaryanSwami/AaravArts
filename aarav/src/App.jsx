import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import AllShorts from "./components/AllShorts";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="AaravArts/#/" element={<Home />} />
        <Route path="AaravArts/#/all-shorts" element={<AllShorts />} />
        <Route path="AaravArts/#/about-page" element={<AboutPage />} />
        <Route path="AaravArts/#/contact-page" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
