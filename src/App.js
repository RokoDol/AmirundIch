import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Slider from "./pages/Slider.js";
import Features from "./pages/Features.js";
import Comparison from "./pages/Comparison.js";
import Pricing from "./pages/Pricing.js";
import FAQ from "./pages/FAQ.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />

        <Slider></Slider>
        <Features> </Features>
        <Comparison></Comparison>
        <Pricing />
        <FAQ />
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
