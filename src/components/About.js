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
                Backend Developer with focus on building backend systems using <span style={{ fontWeight: "bold" }}>Python, Django, FastAPI, PostgreSQl, and AWS</span>.
            </p>
            <ul
                className="list-disc mt-6 mx-4 text-gray-600 ">
                {/* <li>
                    <a 
                        href="https://drive.google.com/drive/folders/1W3Trttd5CQuJ1mDyXTZDlsViZOroNaTv?usp=sharing" 
                        target='_blank'
                        rel="noreferrer">
                        My Resume
                    </a>
                </li> */}
                <li>
                    <Link 
                        to="/keshav-saini/experience">
                        Experience
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/keshav-saini/projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/keshav-saini/academics">
                        Academics
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default About;
