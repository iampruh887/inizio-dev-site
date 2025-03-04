import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sponsors from "./components/Sponsors/Sponsors";
import Events from "./components/Events/Events";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Sponsors" element={<Sponsors />} />
          {/* <Route path="/Teams" element={<Teams />} /> */}
          {/* <Route path="/Speakers" element={<Speakers />} /> */}
          {/* <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
      </Router>
      {/* <Events/> */}
      {/* <Sponsors/> */}
    </>
  );
}

export default App;
