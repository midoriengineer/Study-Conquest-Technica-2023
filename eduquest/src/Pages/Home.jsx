import { Link } from "react-router-dom";
import React from 'react';
import bottomcard from "../assets/bottom-card.png";
import logo from "../assets/logo.png";

function Home (){
    return(
        <>
        <div style={{backgroundColor: "#FDF2BC", height: "667px"}}>
        <img src={logo} style={{width: "200px", marginLeft: "22%", marginTop: "120px", marginBottom: "60px"}}></img>
      <div style={{marginLeft:"15px", }}><h1 style={{fontFamily: "Montserrat", color: "#6C3729",textAlign: "left", fontSize: "35px", fontWeight: "normal"}}>Study</h1>
      <h1 style={{fontFamily: "Montserrat", color: "#6C3729",textAlign: "left", fontSize: "35px", fontWeight: "bold", marginTop: "-15px"}}>Conquest</h1>
        </div>

      <img src={bottomcard} style={{width: "100%" }}></img>
      <h3 style={{color: "#fff",textAlign: "center", fontWeight: "bold", position: "absolute", top: "85%", left: "30%", transform: "translate(-23%,-85%)"}}>Discover a new world of learning</h3>

        <Link to="/journey"><button style={{fontSize: "26px", border: "none", padding: "10px", borderRadius: "10px", color: "#FE8900", backgroundColor: "#FDF2BC", textAlign: "center", fontWeight: "bold", position: "absolute", top: "100%", left: "50%", transform: "translate(-50%,-100%)"}}>Get Started</button>
        </Link>
</div>
        </>
    )
}export default Home;