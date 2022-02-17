import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// component imports
import NavBar from "./components/NavBar";
import About from "./components/About";
import Project from "./components/Projects"
import Footer from "./components/Footer";
// import Skills from "./components/Skills";

function App() {
  return (
      <div 
        className="max-w-screen-lg mx-auto min-h-screen sm: px-10 md:px-14">
          {/* py-5 px-10 sm: px-5 bg-gray-100 */}

        <Router>
          <NavBar />
          <hr></hr>

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Project />} />
            {/* <Route path="/skills" element={Skills} /> */}
          </Routes>
        
          <Footer />
        </Router>
      </div>  
  );
}

export default App;