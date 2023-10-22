import { Link } from "react-router-dom";
import React from 'react';
import myImage from '../assets/home.png';
// const button = () => {
//     alert('Button clicked');
// }
function Home (){
const bonderStyle = {
    border: '2px solid #000',
}
const marginStyle = {
    margin:'20px',
};
    return(
     <> <img src={myImage} alt="My Image" width="462.5" height="1000"/>
        <div style={{marginTop: "-150px"}}><Link to="/Customize"><button>Customize Your Character</button></Link>
        </div></>
    )
}export default Home;