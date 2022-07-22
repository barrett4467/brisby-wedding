import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/Home";
import Photos from "./components/Photos";
import Registry from "./components/Registry";
import RSVP from "./components/Rsvp";
import Details from "./components/Details";


const App = () => {
  // changes the tab title
  useEffect(() => {
    document.title = "Becca & Dylan"
  }, [])
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/brisby-wedding/photos" element={<Photos />} />
          <Route path="/brisby-wedding/details" element={<Details />} />
          <Route path="/brisby-wedding/registry" element={<Registry />} />
          <Route path="/brisby-wedding/rsvp" element={<RSVP />} />
      
        </Routes>
      </BrowserRouter>
  );
}

export default App;
