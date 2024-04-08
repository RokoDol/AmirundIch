import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Slider from "./pages/Slider";
import Features from "./pages/Features";
import Comparison from "./pages/Comparison";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Footer from "./components/Footer";
import LoggedIn from "./pages/LoggedIn";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        {!isLoggedIn && (
          <Navbar isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
        )}

        {!isLoggedIn && (
          <>
            <Home />
            <Slider />
            <Features />
            <Comparison />
            <Pricing />
            <FAQ />
            <Footer />
          </>
        )}

        <Routes>
          {isLoggedIn && <Route path="/loggedIn" element={<LoggedIn />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
