import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sponsors from "./components/Sponsors/Sponsors";
import Events from "./components/Events/Events";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TeamPic from "./components_team/TeamPic";
import Body from "./components_team/Body";
import Footer from "./components_team/Footer";
import Team from "./assets_team/The_Team.jpg";
import Background from "./components_team/Background"; // Import the Background component
import Contact from "./components/ContactForm";
import Loader from "./components/Loader";

const TeamsPageWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for actual content to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <TeamPic imageUrl={Team} />
      <Body />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Background>
          <Navbar />
          <Routes>
            <Route path="/Teams" element={<TeamsPageWrapper />} />
            <Route
              path="/*"
              element={
                <>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Events" element={<Events />} />
                    <Route path="/Sponsors" element={<Sponsors />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </>
              }
            />
          </Routes>
        </Background>
      </div>
    </Router>
  );
}

export default App;
