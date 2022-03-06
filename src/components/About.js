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
                I'm a second year Computer Science student at Keshav Mahavidyala, Delhi University in Delhi. 
                I’m interested in Operating Systems, Economics and Data Science.
            </p>
            <ul
                className="list-disc mt-6 mx-4 text-gray-600 ">
                <li>
                    <a 
                        href="https://github.com/professor91/keshav-saini/blob/master/src/assets/Resume.pdf">
                        My Resume
                    </a>
                </li>
                <li>
                    <Link 
                        to="/projects">
                        My Projects
                    </Link>
                </li>
                <li>My Bookmarks</li>
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