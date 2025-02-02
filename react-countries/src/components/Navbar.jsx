import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/"><button>Home</button></Link>
      <Link to="/countries"><button>Countries</button></Link>
    </nav>
  );
};

export default Navbar;

