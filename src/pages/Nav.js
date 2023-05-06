import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./nav.css";
import logo from "../media/favicon.jpg";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></link>
      <div className="bar">
        <header className="title-header">
          <Link to="/" className="tltle-text">
            <img src={logo} className="title-logo" alt="logo" />
          </Link>
          <Desktop>
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
            <div className="contact_button">
              <div className="contact">
                <a
                  href="https://www.instagram.com/ami__cote/"
                  target="_blank"
                  class="L-Affiliate-Tagged"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </Desktop>
          <Mobile>
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
            <div className="contact_button">
              <div className="contact">
                <a
                  href="https://www.instagram.com/ami__cote/"
                  target="_blank"
                  class="L-Affiliate-Tagged"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </Mobile>
        </header>
      </div>
    </div>
  );
}

export default App;
