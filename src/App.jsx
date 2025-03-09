import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sponsors from "./components/Sponsors/Sponsors";
import Events from "./components/Events/Events";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TeamPic from "./components_team/TeamPic";
import Body from "./components_team/Body";
import Footer from "./components_team/Footer";
import Team from "./assets_team/skull.png";
import Background from "./components_team/Background"; // Import the Background component

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        {" "}
        {/* Add this wrapper */}
        <Routes>
          <Route
            path="/Teams"
            element={
              <Background>
                <Navbar />
                <TeamPic imageUrl={Team} />
                <Body />
                <Footer />
              </Background>
            }
          />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  {/* <Route path="/" element={<Navigate to="home.html" />} /> */}
                  {/* <Route path="/Home" element={<Home />} /> */}
                  <Route path="/Events" element={<Events />} />
                  <Route path="/Sponsors" element={<Sponsors />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
