import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import EachContinent from './components/EachContinent';
import Country from './components/Country';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/continent/:title" element={<EachContinent />} />
          <Route path="/country/:name" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
