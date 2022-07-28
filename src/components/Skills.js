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
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div>
                    <p
                        className="text-gray-600 leading-relaxed mt-4">
                        Data Science
                    </p>
                    <ul
                        className="list-disc mt-2 mx-4 text-gray-600 ">
                        <li>Linear Algebra</li>
                        <li>Parameter Estimation</li>
                        <li>Hypothesis Testing</li>

                    </ul>
                </div>
                <div>
                    <p
                        className="text-gray-600 leading-relaxed mt-4">
                        Machine Learning
                    </p>
                    <ul
                        className="list-disc mt-2 mx-4 text-gray-600 ">
                        <li>Regression</li>
                        <li>Optimization</li>
                    </ul>
                </div>

                <div>
                    <p
                        className="text-gray-600 leading-relaxed mt-4">
                        Other
                    </p>
                    <ul
                        className="list-disc mt-2 mx-4 text-gray-600 ">
                        <li>Google Colab</li>
                        <li>ReactJS</li>
                        <li>Tailwind CSS</li>
                        <li>Git</li>
                        <li>Linux</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Skills;

