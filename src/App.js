import QuotePage from "./screen/QuotePage.jsx";
import Navbar from './components/quotepage/Navbar.jsx';
import Footer from './components/quotepage/Footer.js'
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <QuotePage />
      <Footer />
    </div>
  );
}

export default App;
