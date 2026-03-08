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
import GithubProjects from "./components/GitHub";

function App() {
  return (
      <div 
        className="min-h-screen max-w-screen-lg mx-auto sm: px-5 flex flex-col">
        <Router>
          <NavBar />
          <hr></hr>

          <Routes>
            <Route path="/keshav-saini" element={<About />} />
            <Route path="/keshav-saini/academics" element={<Academics />} />
            <Route path="/keshav-saini/projects" element={<Project />} />
            <Route path="/keshav-saini/experience" element={<Experience />} />
            <Route path="/keshav-saini/skills" element={<Skills />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
            <Route path="/credits" element={<Credits />} />
            <Route path="/github" element={<GithubProjects username="professor91"/>} />
          </Routes>

          <Footer />
        </Router>
      </div>  
  );
}

export default App;

// https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/
