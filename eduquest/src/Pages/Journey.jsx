import {IoGameController} from 'react-icons/io5';
import {BsFillChatTextFill} from 'react-icons/bs';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import topcard from "../assets/top-card.png";


function Journey() {

    const navigate = useNavigate();

    const handleChoice = (value) => {
        if (value === 'chat') {
            localStorage.setItem('path', "chat");
            navigate("/category");
        }
        else {
            localStorage.setItem('path', "game");
            navigate("/category");
        }
    }
  return (
    <div style={{backgroundColor: "#FF9909", height: "667px"}}>
        <img src={topcard} style={{width: "100%", marginTop: "-30px"}}></img>
      <h1 style={{color: "#FF9909",textAlign: "center", fontSize: "45px", fontWeight: "bolder", position: "absolute", top: "20%", left: "30%", transform: "translate(-23%,-50%)"}}>Choose your journey</h1>
      <div className="row" style={{marginTop: "40px"}}>
      <div className='col'>
        <Link onClick={handleChoice("chat")}><div className="journey-button-chat">
            <BsFillChatTextFill fill='#FE8900'/>
           
            </div> </Link>
            </div>
            
            <div className='col'> <Link onClick={handleChoice("game")}><div className="journey-button-game"><IoGameController fill='#FE8900'/>
            
            </div></Link></div>
      </div>
      <div className="row" style={{color:"#FDF2BC", fontSize: "14px", fontWeight: "bold", paddingTop: "5px"}}>
      <p className="col" style={{textAlign: "right", marginRight: "5px"}}>AI Study Partner</p>
      <p className="col" style={{textAlign: "left"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Games</p>
        
      </div>
    </div>
  );
}
export default Journey;