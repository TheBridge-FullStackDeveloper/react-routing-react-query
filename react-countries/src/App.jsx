import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";  
import Countries from "./pages/Countries";  
import Country from "./pages/Country"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/country/:id" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
