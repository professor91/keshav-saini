import React from "react";
import { SiC, SiCplusplus, SiPython, SiJava, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiFigma, SiQt, SiCmake, SiDiscord, SiMysql, SiGooglecolab } from "react-icons/si"
import { DiGit, DiGithub, DiReact, DiBootstrap ,DiLinux } from "react-icons/di"
import { FcStatistics } from "react-icons/fc"

function Skills () {
    return (
        <div 
            className="max-w-4xl mx-auto justify-center py-12" id="tech">
            <p 
                className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
                Skills
            </p>
            <div
                className="flex flex-wrap justify-center pt-2">
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiC
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            C
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiCplusplus 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            C++
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiPython 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Python
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiJava 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Java
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiCmake 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Cmake
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiDiscord 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Pycord
                        </p>
                </div>
            </div>

            <p 
                className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
                Web 2.0
            </p>
            <div
                className="flex flex-wrap justify-center pt-2">
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiHtml5 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            HTML5
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiCss3 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            CSS3
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiJavascript 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            JavaScript
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiFigma
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Figma
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <DiBootstrap
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Bootstrap
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiTailwindcss
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Tailwind CSS
                        </p>
                </div>
            </div>

            <p 
                className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
                Data Science
            </p>
            <div
                className="flex flex-wrap justify-center pt-2">
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <FcStatistics 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Statistics
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiPython 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Python
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiMysql 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            MySQL
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiPython 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Pandas
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiPython 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Numpy
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiPython 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Matplotlib
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiGooglecolab 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Google Colab
                        </p>
                </div>
            </div>
            <p 
                className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
                Frameworks
            </p>
            <div
                className="flex flex-wrap justify-center pt-2">
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <DiReact 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            React
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiQt 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Qt
                        </p>
                </div>
            </div>
            
            <p 
                className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
                Tools
            </p>
            <div
                className="flex flex-wrap justify-center pt-2">
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <DiGit
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Git
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <DiGithub
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            GitHub
                        </p>
                </div>
                <div
                    className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <DiLinux 
                        color="#2196f3"
                        className="mx-auto text-4xl"/>
                        <p
                            className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                            Linux
                        </p>
                </div>
            </div>
        </div>

    );
}

export default Skills;