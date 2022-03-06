import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// component imports
import NavBar from "./components/NavBar";
import About from "./components/About";
import Project from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
      <div 
        className="min-h-screen max-w-screen-lg mx-auto sm: px-10 flex flex-col">
        <Router>
          <NavBar />
          <hr></hr>

          <Routes>
            <Route path="/keshav-saini" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        
          <Footer />
        </Router>
      </div>  
  );
}

export default App;

// https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/