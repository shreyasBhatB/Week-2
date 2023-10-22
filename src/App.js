import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login.jsx';

const App = () => {
  return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
          </Routes>
        </BrowserRouter>

      </>
  );
};

export default App;