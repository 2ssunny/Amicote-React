import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useScrollFadeIn } from "../animation.js";

import "./products.css";

import p1 from "../media/DSC00671.JPG";
import p2 from "../media/DSC00737.JPG";
import p3 from "../media/DSC00250.JPG";
import p4 from "../media/DSC00284.JPG";

function Home() {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0, 20),
  };
  return (
    <div className="product">
      <div>
        <h1 className="producttitle" {...animatedItem[0]}>
          Amicote Products
        </h1>
      </div>

      <div className="product_1">
        <div className="product_image">
          <img src={p1} className="p1_1" />
          <div className="imageempty"></div>
          <img src={p2} className="p1_2" />
        </div>
        <div className="product_text">
          <h2>Product 1</h2>
          <p>product</p>
        </div>
      </div>

      <div className="product_2">
        <div className="product_image">
          <img src={p3} className="p2_1" />
          <div className="imageempty"></div>
          <img src={p4} className="p2_2" />
        </div>
        <div className="product_text">
          <h2>Product 2</h2>
          <p>product</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
