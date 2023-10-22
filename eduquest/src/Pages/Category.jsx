


import React from 'react';
import Select from 'react-select';
import categorytop from "../assets/catergory-top.png";
import { Link, useNavigate } from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa";

const options = [
  { value: 'option1', label: 'Biology' },
  { value: 'option2', label: 'History' },
  { value: 'option3', label: 'Chemistry' },
  { value: 'option4', label: 'Math' },
  // Add more options as needed
];

function MySearchableSelect() {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const navigate = useNavigate();
  const handleChoice = () => {
    console.log(selectedOption);
    if (selectedOption) {
      if (selectedOption.value === 'option1') {
          localStorage.setItem('topic', "Biology");
          navigate("/upload");
      }
      else if (selectedOption.value === 'option2') {
        localStorage.setItem('topic', "History");
        navigate("/upload");
    }
    else if (selectedOption.value === 'option3') {
      localStorage.setItem('topic', "Chemistry");
      navigate("/upload");
  }
  else if (selectedOption.value === 'option4') {
    localStorage.setItem('topic', "Math");
    navigate("/upload");
}
  }}

  const colourStyles = {  
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? '#FEB800' : 'transparent',
        color: isFocused ? '#fff' : '#5F5F5F',
      };
    },
    };

  return (

    <div style={{backgroundColor: "#F8F8F8",height: "667px"}}>
    <img src={categorytop} style={{width: "100%"}}></img>
    <div style={{position:"absolute", top:"1%", left:'8%', fontSize:"200%"}}><Link to="/journey"><FaArrowLeft fill="#FDF2BC" /></Link></div>

    <div style={{ margin: "0 auto", width: "50%"}}>
    <div style={{marginbottom: "-10px"}}>
    <div style={{position: "relative", height: "300px"}}>
    <div style={{color: "#5F5F5F", fontSize: "24px", position: "absolute", width:"330px", marginTop:"40px", left: "-70px"}}>
      <Select
      className='dropdown-category'
      placeholder="Search topic"
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isSearchable={true}
        styles={colourStyles}
      /></div>

    </div>
    </div>
    </div>

    <button onClick={handleChoice} style={{marginLeft: "32%", fontSize: "26px", border: "none", padding: "10px", borderRadius: "20px", color: "#fff", backgroundColor: "#FE8900", textAlign: "center", fontWeight: "bold", boxShadow: "2px 2px 2px #FE890073"}}>Continue</button>
    

    </div>
  );
}

export default MySearchableSelect;