import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teams from "./pages/Teams";
import Sponsors from "./components/Sponsors/Sponsors";
import Events from "./pages/Events";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
