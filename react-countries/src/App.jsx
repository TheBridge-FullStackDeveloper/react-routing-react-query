import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Countries from './components/Countries';
import Country from './components/Country';
import './styles/main.css';
import './styles/navbar.css';

function App() {
  return (
    <Router>
      {/* Setup the routes for each page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/country/:id" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
