import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <h1>React Countries Explorer</h1>
      <div>
        <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Home</Link>
        <Link to="/countries" style={{ color: 'white', textDecoration: 'none' }}>Countries</Link>
      </div>
    </nav>
  );
};

export default Navbar;
