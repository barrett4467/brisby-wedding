import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Navbar from './components/Navbar';
import About from "./components/About";
import Photos from "./components/Photos";
import Registry from "./components/Registry";
import RSVP from "./components/Rsvp";
import Wedding from "./components/Wedding";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/photos" element={<Photos />} />
    <Route path="/wedding" element={<Wedding />} />
    <Route path="/registry" element={<Registry />} />
    <Route path="/rsvp" element={<RSVP />} />

  </Routes>
  </BrowserRouter>
);
