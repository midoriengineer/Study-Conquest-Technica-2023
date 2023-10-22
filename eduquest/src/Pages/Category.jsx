


import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'option1', label: 'Biology' },
  // Add more options as needed
];

function MySearchableSelect() {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (

    <div style={{ margin: "0 auto", width: "50%"}}>
    <div style={{marginbottom: "-10px"}}>
    <div style={{position: "relative", height: "200px"}}>
    <div style={{ position: "absolute", top: "50%", transform: "translateY(300%)" }}>
    <>What are you trying to study?</>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isSearchable={true}
      /></div>

    </div>
    </div>
    </div>
  );
}

export default MySearchableSelect;