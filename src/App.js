import './App.css';
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Splash from "./components/Splash.js"
import Home from "./components/Home.js"
import Search from "./components/Search.js"
import Buttons from "./components/Buttons.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element = { <Splash/> }  path="/splash" />
        <Route element = { <Home/> }  path="/home" />
        <Route element = { <Search/> }  path="/search" />
        <Route element = { <Buttons/> }  path="/buttons" />        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
