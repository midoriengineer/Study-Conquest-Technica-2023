import Home from './Pages/Home'
import Game from './Pages/Game'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
