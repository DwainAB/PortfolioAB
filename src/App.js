import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "../src/App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Contact from "./Pages/Contact";
import Project from "./Pages/Projects"
import Skills from "./Pages/Skills"
import Github from "./Pages/Github";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="global">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projets" element={<Project />} />
            <Route path="/competences" element={<Skills />} />
            <Route path="/github" element={<Github />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
