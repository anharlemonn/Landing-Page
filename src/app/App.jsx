import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/home";
import Portfolio from "../pages/portfolio";
import ContactUs from "../pages/contact";
import About from "../pages/about";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";
import { Socialicons } from "../components/socialicons";

export default function App() {
  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={8}
            outerSize={8}
            color="var(--primary-color)"
            outerAlpha={0.2}
            innerScale={0.8}
            outerScale={3}
            trailingSpeed={2.5}
          />
        </div>
        <Headermain />
        <Socialicons />
        <div className="sections">
          <Home />
          <Portfolio />
          <About />
          <ContactUs />
        </div>
      </Router>
    </div>
  );
}
