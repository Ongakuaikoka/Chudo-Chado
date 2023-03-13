import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import EarlyPage from './Components/EarlyPage';
import EnglishPage from './Components/EnglishPage';
import PreschoolPage from './Components/PreschoolPage';
import Navbar from './Components/Navbar';
import GalleryPage from './Components/GalleryPage';
import About from './Components/About';
import Contact from './Components/Contact';
import PhotoCarousel from './Components/PhotoCarousel'
import './App.css';

function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/early' element={<EarlyPage/>} />
          <Route path='/english' element={<EnglishPage/>} />
          <Route path='/preschool' element={<PreschoolPage/>} />
          <Route path='/gallery' element={<GalleryPage/>} />
          <Route path="/gallery/:id" element={<PhotoCarousel/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
      </Routes>
      </Router>
  );
}

export default App;




