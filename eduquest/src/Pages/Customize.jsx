import { Link } from "react-router-dom";
import myImage from '../assets/customize.png';
import {FaArrowLeft} from "react-icons/fa";


function Customize (){
    // const button = () => {
    //     alert('Button clicked');
    // }
        return(
         <> 

         <img src={myImage} alt="My Image" width="462.5" height="1000"/>
         <div style={{position:"absolute", top:"1%", left:'8%', fontSize:"200%"}}><Link to="/journey"><FaArrowLeft fill="#FDF2BC" /></Link></div>

        <div style={{marginTop: "-700px"}}></div>
            <Link to="/Category">
                <button>Play</button></Link> </>
            
        )
    }export default Customize;
