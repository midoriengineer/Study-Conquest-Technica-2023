import {HiMiniDocumentText} from 'react-icons/hi';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {BsFillFileEarmarkTextFill} from 'react-icons/bs';
import orangefile from "../assets/orange-file.png";
import whitefile from "../assets/white-file.png";


function Upload(){
    const [upload, setUpload] = useState(null)


    return( 
        <div style={{backgroundColor: "#FF9909"}}>
            <h1 style={{fontWeight: "bold", color: "#FDF2BC"}}>Upload notes</h1>
            <div style={{width: "150px", height:"150px", borderRadius: "150px", backgroundColor:"#FDF2BC"}}>
                <img style={{marginTop: "30px", marginLeft: "39px"}} src={upload ? orangefile : whitefile} height="80px"></img>
                </div>
        </div>
    )

} export default Upload;