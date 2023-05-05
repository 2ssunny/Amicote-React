import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./nav.css";
import logo from "../media/favicon.jpg";

function App() {
  return (
    <div className="bar">
      <header className="title-header">
        <Link to="/" className="tltle-text">
          <img src={logo} className="title-logo" alt="logo" />
        </Link>

        <Link to="About" className="tltle-text">
          <span className="title-text2">About</span>
        </Link>

        <li className="Products-Box">
          <Link to="Products" className="tltle-text">
            <span className="title-text2">Products</span>
          </Link>
          <ul className="Products">
            <li>
              <Link to="Products" className="Product-text">
                <span className="Product-text-2"> Product 1 </span>
              </Link>
            </li>
            <li>
              <Link to="Products" className="Product-text">
                <span className="Product-text-2"> Product 2 </span>
              </Link>
            </li>
            <li>
              <Link to="Products" className="Product-text">
                <span className="Product-text-2"> Product 3 </span>
              </Link>
            </li>
          </ul>
        </li>
      </header>
    </div>
  );
}

export default App;
