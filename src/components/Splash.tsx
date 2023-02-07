import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./splash.css"
const Logo =  require("../Logo.jpeg")

function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => navigate("/home"), 5000);
  });

  return (
    <div>
      <img src={Logo} alt="" />
      <p className="text">The bigger the train, the greater the impact.</p>
    </div>
  );
}

export default Splash;
