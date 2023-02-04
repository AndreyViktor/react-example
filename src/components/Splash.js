import React, {useEffect, useState} from "react";
import "./splash.css"

import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Home from "./Home.js"
import Logo from "../Logo.jpeg"

function Splash() {
  return (
    <div>
      <img className="Logo" src={Logo} alt="" />
      <p className="p">The bigger the train, the greater the impact.</p>
    </div>
  );
}

export default Splash;
