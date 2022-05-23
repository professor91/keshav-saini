import React from "react";
import { Link } from "react-router-dom";

function About () {
    return (
        <div 
            className="mt-10">
            <p
                className="text-3xl font-bold">
                About
            </p>
            <p
                className="text-gray-600 leading-relaxed mt-4">
                I'm a second year Computer Science student at Keshav Mahavidyala, Delhi University.
                I’m interested in Data Science, Economics and Computer Science in general.
            </p>
            <ul
                className="list-disc mt-6 mx-4 text-gray-600 ">
                <li>
                    <Link 
                        // href="https://github.com/professor91/keshav-saini/blob/master/src/assets/Resume.pdf">
                        to="/resume">
                        My Resume
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/projects">
                        My Projects
                    </Link>
                </li>
                <li>
                    <a
                        href="mailto:keshavsaini1820@gmail.com">
                        Contact Me
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default About;