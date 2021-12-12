import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/home/home";
import MySkill from "./pages/Myskill/Myskill";
import Portofolio from "./pages/Portofolio/portofolio";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
    {/* navbar */}
    <Navbar></Navbar>
      {/* navbar */}
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      <Routes>
        <Route path="/MySkill" element={<MySkill />} />
      </Routes>
      <Routes>
        <Route path="/Portofolio" element={<Portofolio />} />
      </Routes>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
