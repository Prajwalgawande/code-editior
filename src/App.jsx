import React from 'react';
import Dashboard from './Components/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
