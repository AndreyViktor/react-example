import React from "react";
import {
  Link
} from "react-router-dom";

function Home({ selectedString }) {
  return (
    <div>
      <Link to="/search">Ir para tela 1</Link>
      <Link to="/counter">Ir para tela 2</Link>
      <p>{selectedString}</p>
    </div>
  );
}

export default Home;