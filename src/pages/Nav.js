import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./nav.css";
import logo from "../media/favicon.jpg";

function App() {
  return (
    <div>
      <header className="title-header">
        <Link to="/" className="tltle-text">
          <img src={logo} className="title-logo" alt="logo" />
        </Link>

        <Link to="About" className="tltle-text">
          <span className="title-text2">About</span>
        </Link>
        <Link to="Products" className="tltle-text">
          <span className="title-text2">Products</span>
        </Link>
      </header>
    </div>
  );
}

export default App;
