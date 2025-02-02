import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';  

import Home from './pages/Home';
import Countries from './pages/Countries';
import Country from './pages/Country';
import CountriesList from './pages/CountriesList';  
import Navbar from './components/Navbar';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountriesList />} />
          <Route path="/country/:id" element={<Country />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
