import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  useEffect(() => {
    const storedLoggedInState = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(storedLoggedInState);
  }, []);

  useEffect(() => {
    const handlePopstate = () => {
      if (isLoggedIn) {
        handleLogout();
      }
    };

    window.addEventListener("popstate", handlePopstate);

    
    const handleBeforeUnload = (event) => {
      if (isLoggedIn) {
        localStorage.setItem("isLoggedIn", "true");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isLoggedIn]);

  return (
    <Router>
      <div className="App">
        {!isLoggedIn && (
          <>
            <Navbar isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
            <Home />
            <Slider />
            <Features />
            <Comparison />
            <Pricing />
            <FAQ />
            <Footer />
          </>
        )}

        {isLoggedIn ? <LoggedIn /> : <Navigate to="/" replace />}
      </div>
    </Router>
  );
}

export default App;
