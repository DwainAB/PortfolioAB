import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "../src/App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Contact from "./Pages/Contact";
import Project from "./Pages/Projects"
import Skills from "./Pages/Skills"
import About from "./Pages/About";
import MenuTop from "./Components/MenuTop/MenuTop";


function App() {
   
  return (
    <BrowserRouter>
      <div className="app">
      <MenuTop/>
        <Navbar />
        <div className="global">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projets" element={<Project />} />
            <Route path="/competences" element={<Skills />} />
            <Route path="/a-propos" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
