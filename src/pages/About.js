import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./about.css";

function Home() {
  return (
    <div className="about">
      <div className="body">
        <h1 className="abouttitle">Explanation</h1>
        <p className="text">Explanation about amicote</p>
      </div>
    </div>
  );
}

export default Home;
