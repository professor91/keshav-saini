import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// component imports
import NavBar from "./components/NavBar";
import About from "./components/About";
import Project from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
// import Resume from "./components/Resume";
import Credits from "./components/Credits"
import Academics from "./components/Academics";
import Experience from "./components/Experience";

function App() {
  return (
      <div 
        className="min-h-screen max-w-screen-lg mx-auto sm: px-10 flex flex-col">
        <Router>
          <NavBar />
          <hr></hr>

          <Routes>
            <Route path="/keshav-saini" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
            <Route path="/credits" element={<Credits />} />
          </Routes>

          <Footer />
        </Router>
      </div>  
  );
}

export default App;

// https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/