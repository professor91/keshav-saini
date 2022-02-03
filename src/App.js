import React from "react"
import NavBar from "./components/NavBar";
import Card from "./components/Card"
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div 
      className="min-h-screen py-5 px-10 sm: px-5 bg-gray-100">
      <NavBar />
      <Card />
      <About />
      <Skills />
      <Footer />
    </div>  
  );
}

export default App;