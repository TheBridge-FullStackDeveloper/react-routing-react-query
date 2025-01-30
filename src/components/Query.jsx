import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router';

function Query() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/query/${inputValue}`);
    }
  };

  return (
    <>
      <h1>Country Lookup</h1>
      <input
        type="text"
        placeholder="Enter country code..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown} 
      />
      <p>
        {inputValue ? <NavLink to={`/query/${inputValue}`}>Query country with tag: {inputValue}</NavLink> : <></>}
      </p>
    </>
  );
}

export default Query;