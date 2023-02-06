import './App.css';
import React, {useState} from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Splash from "./components/Splash.js"
import Home from "./components/Home.js"
import Search from "./components/Search.js"
import Counter from "./components/Counter.js"

function App() {
  const [selectedString, setSelectedString] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element = { <Splash/> }  path="/splash" />
        <Route element = { <Home selectedString={selectedString}/> }  path="/home" />
        <Route element = { <Search setSelectedString={setSelectedString}/> }  path="/search" />
        <Route element = { <Counter/> }  path="/counter" />        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
