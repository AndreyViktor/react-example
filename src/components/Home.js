import React from "react";
import "./Home.css"
import {Link} from "react-router-dom";

function Home({ selectedString }) {
  return (
    <div className="Home">
      <Link className="Link" to="/search">tela de busca</Link>
      <Link className="Link" to="/counter">Contador</Link>
      {
        selectedString != "" ?
        <p className="ResultText">{selectedString}</p> : <div/>
      }
      
    </div>
  );
}

export default Home;