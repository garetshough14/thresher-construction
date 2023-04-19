import './App.css';
import HomePage from './Components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './Components/AboutUs';
function App() {
  return (
<div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
    </div>
  );
}

export default App;
