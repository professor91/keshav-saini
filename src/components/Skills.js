import React from "react";

function Skills() {
    return(
        <div 
            className="mt-10">
            <p
                className="text-3xl font-bold">
                Skills
            </p>
            <div
                className="flex justify-between">
                <div>
                    <p
                        className="text-gray-600 leading-relaxed mt-4">
                        Programming
                    </p>
                    <ul
                        className="list-disc mt-2 mx-4 text-gray-600 ">
                        <li>Python</li>
                        <li>C++</li>
                        <li>JavaScript</li>
                        <li>SQL</li>
                        <li>JAVA</li>
                    </ul>
                </div>
                {/* <div>
                    <p
                        className="text-gray-600 leading-relaxed mt-4">
                        Data Analytics
                    </p>
                    <ul
                        className="list-disc mt-2 mx-4 text-gray-600 ">
                        <li>MS Excel</li>
                        <li>Statistical Analysis</li>
                        <li>Probability</li>
                    </ul>
                </div> */}
                <div>
                    <p
                        className="text-gray-600 leading-relaxed mt-4">
                        Frontend
                    </p>
                    <ul
                        className="list-disc mt-2 mx-4 text-gray-600 ">
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>ReactJS</li>
                        <li>BootStrap</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div>
                    <p
                        className="text-gray-600 leading-relaxed mt-4">
                        Other
                    </p>
                    <ul
                        className="list-disc mt-2 mx-4 text-gray-600 ">
                        <li>Linux</li>
                        <li>Git & GitHub</li>
                        <li>MS Excel</li>
                        <li>Google APIs</li>
                        <li>Google Colab</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Skills;