import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import Home from "../pages/home";
import Portfolio from "../pages/portfolio";
import ContactUs from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function AppRoutes() {
  return (
    <div className="s_c">
      <Socialicons />
    </div>
  );
}

export default AppRoutes;