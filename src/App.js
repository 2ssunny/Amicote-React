import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./App.css";
import About from "./pages/About.js";
import Nav from "./pages/Nav.js";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
