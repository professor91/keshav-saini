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
                        Languages
                    </p>
                    <ul
                        className="list-disc mt-2 mx-4 text-gray-600 ">
                        <li>C++</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>JAVA</li>
                    </ul>
                </div>
                <div>
                    <p
                        className="text-gray-600 leading-relaxed mt-4">
                        Frameworks
                    </p>
                    <ul
                        className="list-disc mt-2 mx-4 text-gray-600 ">
                        <li>Tailwind CSS</li>
                        <li>ReactJS</li>
                        <li>Qt</li>
                    </ul>
                </div>
                <div>
                    <p
                        className="text-gray-600 leading-relaxed mt-4">
                        Tools
                    </p>
                    <ul
                        className="list-disc mt-2 mx-4 text-gray-600 ">
                        <li>Git</li>
                        <li>Linux</li>
                        <li>CMake</li>
                        <li>Google Colab</li>
                    </ul>
                </div>
                <div>
                    <p
                        className="text-gray-600 leading-relaxed mt-4">
                        Other
                    </p>
                    <ul
                        className="list-disc mt-2 mx-4 text-gray-600 ">
                        <li>Statistics</li>
                        <li>Linear Algebra</li>
                        <li>Public Finance</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Skills;

