import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import orangefile from "../assets/orange-file.png";
import whitefile from "../assets/white-file.png";
import abc from "../assets/abc.png";
import camera from "../assets/camera.png";


function Upload(){
    const [upload, setUpload] = useState(null)


    return( 
        <div style={{backgroundColor: "#FF9909", height: "667px"}}>
            <h1 style={{fontFamily: "Montserrat", paddingTop: "40%", paddingBottom: "20%", textAlign: "center", fontWeight: "bold", color: "#FDF2BC"}}>Upload notes</h1>
            <div style={{marginLeft: "30%", marginRight: "50%", width: "150px", height:"150px", borderRadius: "150px", backgroundColor:upload ? "#fff": "transparent" }}>
                <img style={{marginTop: "30px", marginLeft: "39px"}} src={upload ? orangefile : whitefile} height="80px"></img>
                </div>

            <div className='row'style={{marginTop: "43%"}}>
            <div className='col'>
            <Link to="/chat"><img style={{height: "50px", float:"left", margin: "20px"}} src={abc}></img></Link>
            </div>
                <div  className='col'>
<img style={{height: "50px", float: "right", margin: "20px"}} src={camera}></img>
                </div>
            </div>

        </div>
    )

} export default Upload;