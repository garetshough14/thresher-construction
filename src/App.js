import './App.css';
import HomePage from './Components/HomePage';
import {Routes, Route } from "react-router-dom";
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Services from './Components/Services';
function App() {
  return (
<div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
    </div>
  );
}

export default App;
