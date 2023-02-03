import './App.css';
import React from "react";
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Splash from "./components/Splash.js"
import Home from "./components/Home.js"
import Search from "./components/Search.js"
import Buttons from "./components/Buttons.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route component = { Splash }  path="/splash" exact />
        <Route component = { Home }  path="/home" />
        <Route component = { Search }  path="/search" />
        <Route component = { Buttons }  path="/buttons" />
    </BrowserRouter>
    </div>
  );
}

export default App;
