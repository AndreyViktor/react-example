import './App.css'
import {useState} from "react"
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import Splash from "./components/Splash/Splash"
import Home from "./components/Home/Home"
import Search from "./components/Search/Search"
import Counter from "./components/Counter/Counter"

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
