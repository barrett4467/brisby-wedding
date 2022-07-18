import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/Home";
import Photos from "./components/Photos";
import Registry from "./components/Registry";
import RSVP from "./components/Rsvp";
import Details from "./components/Details";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/details" element={<Details />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/rsvp" element={<RSVP />} />
      
        </Routes>
      </BrowserRouter>
  );
}

export default App;
