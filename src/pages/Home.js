import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import { useScrollFadeIn } from "../animation.js";

import "./home.css";

function Home() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0, 20),
    1: useScrollFadeIn("up", 2, 0, 20),
  };
  return (
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
  );
}

export default Home;
