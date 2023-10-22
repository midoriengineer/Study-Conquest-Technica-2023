import { Link } from "react-router-dom";
import myImage from '../assets/customize.png';

function Customize (){
    // const button = () => {
    //     alert('Button clicked');
    // }
        return(
         <>   <h2>Customize Your Character!</h2>
         <img src={myImage} alt="My Image" width="462.5" height="1000"/>
        <div style={{marginTop: "-700px"}}></div>
            <Link to="/Category"><button>Choose your category!</button></Link> </>
            
        )
    }export default Customize;
