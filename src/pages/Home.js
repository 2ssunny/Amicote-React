import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import { useScrollFadeIn } from "../animation.js";

import "./home.css";
import { useMediaQuery } from "react-responsive";

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

function Home() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0, 20),
    1: useScrollFadeIn("up", 2, 0, 20),
  };
  return (
    <div>
      <Default>
        <div className="homeback">
          <div className="hometitle">
            <div className="homebody">
              <h1 className="title-text" {...animatedItem[0]}>
                Amicote
              </h1>
            </div>
          </div>
          <div className="titleexplain">
            <div className="titleex">
              <h1 className="titleex-text" {...animatedItem[1]}>
                Furniture Store
              </h1>
            </div>
          </div>
        </div>
      </Default>
      <Tablet>
        <div className="homeback_tablet">
          <div className="hometitle_tablet">
            <div className="homebody_tablet">
              <h1 className="title-text_tablet" {...animatedItem[0]}>
                Amicote
              </h1>
            </div>
          </div>
          <div className="titleexplain_tablet">
            <div className="titleex_tablet">
              <h1 className="titleex-text_tablet" {...animatedItem[1]}>
                Furniture Store
              </h1>
            </div>
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className="homeback_mobile">
          <div className="hometitle_mobile">
            <div className="homebody_mobile">
              <h1 className="title-text_mobile" {...animatedItem[0]}>
                Amicote
              </h1>
            </div>
          </div>
          <div className="titleexplain_mobile">
            <div className="titleex_mobile">
              <h1 className="titleex-text_mobile" {...animatedItem[1]}>
                Furniture Store
              </h1>
            </div>
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default Home;
