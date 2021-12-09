import React from "react";
import NavBar from "./Navbar";
import Finalfantasy from "./assets/finalfantasy.mp4"
// import { useHistory } from "react-router-dom";

// const history = useHistory();

function Homepage() {
  return (
    <div>
      <video autoPlay muted controls  
      style = {{ 
        position: "absolute",
        width: "50%",
        height: "50%", 
        left: "25%",
        right: "50%"
      }}>
        <source src = {Finalfantasy} type = "video/mp4" start = {0.40} />
      </video>
    </div>
  );
}

export default Homepage;
