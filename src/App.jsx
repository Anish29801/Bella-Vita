import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.jsx"
import Main from "./components/main.jsx"
import HotelHistory from "./components/HotelHistory.jsx"
import Dining from "./components/Dinning.jsx"
import Suites from "./components/Suites.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/footer.jsx"

const App = () => {
  return (
    <div className="font-kumbh-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/history" element={<HotelHistory />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/suites" element={<Suites />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
