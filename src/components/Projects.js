import React from "react";
import YoutubeImg from "../assets/img/youtube.jpg"
import SyllabusWebImg from "../assets/img/syllabusWeb.png"
import SpotifyImg from "../assets/img/spotify.jpg"
import NoPreviewImg from "../assets/img/No Preview Available.png";
import WazirXImg from "../assets/img/wazirX.jpg"
import LinuxIMG from "../assets/img/linux.jpeg"
import DiscordImg from "../assets/img/discord.jpg"
import SyllabusDB from "../assets/img/syllabusdb.png"
import jProfIMG from "../assets/img/jprof.png"
import GameofLifeIMG from "../assets/img/gameofLife.png"

const Card = (props) => {
    const socials= []

    for (let social of props.socials) {
        socials.push(
            <a className="pr-6"
                href={social[1]}
                target="_blank"
                rel="noreferrer">
                {social[0]}
            </a>
        )
    };

    return (
        <div 
            className="mb-10 block md:flex flex-row justify-evenly">
            <div
                className="img w-2/5 sm:justify-evenly">
                <img
                    src={props.previewImg}>
                </img>
            </div>
            <div
                className="pt-5 flex flex-col md:basis-1/2 md:pt-0">
                <span
                    className="text-2xl font-bold mb-3">
                        {props.projectName}
                </span>
                <p
                    className="mb-5">
                    {props.projectDesc}
                </p>
                <div
                    className="mt-auto flex">
                    <div> 
                        {socials}
                    </div>
                    <div 
                        className="ml-auto">
                        {props.duration}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Projects () {
    return (
        <div 
            className="mt-10">
                {/* max-w-4xl */}
            <p
                className="text-3xl font-bold">
                Active Projects
            </p>
            <div
                className="mt-6 text-gray-600 ">
                <Card 
                    projectName= "Pytubedata"
                    projectDesc= "Developed an API wrapper for YouTube Data API v3 in Python. Created a modular and maintainable codebase following monolithic architecture. Abstracted HTTP request handling, to make GET requests, handle pagination, and manage API errors. Conducted thorough unit testing and uploaded package on PyPi, just a `pip install pytubedata` away to use."
                    previewImg= {YoutubeImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/pytubedata"],
                                ["PyPi", "https://pypi.org/project/pytubedata/0.0.1/"]
                            ]}
                    duration= "November 2022"
                />
            </div>
            <p
                className="text-3xl font-bold">
                Inactive Projects
            </p>
            <div
                className="mt-6 text-gray-600 ">
                <Card 
                    projectName= "Hangman Guesser Algorithm"
                    projectDesc= "Utilizing Python libraries like Pandas, Numpy, and Matplotlib, developed a word prediction algorithm based on probability. Trained on a 175,000-word dictionary, the model predicts letters one at a time. It achieves an average accuracy of 33% in word prediction, allowing it only 5 incorrect guesses."
                    previewImg= {NoPreviewImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/SpotifyAPI"]
                            ]}
                    duration= "June 2022"
                />
                <Card 
                    projectName= "Spotify API"
                    projectDesc= "Implemented complete flow of OAuth 2.0 authorization from scratch."
                    previewImg= {SpotifyImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/SpotifyAPI"]
                            ]}
                    duration= "June 2022"
                />
                {/* <Card 
                    projectName= "Syllabus Web"
                    projectDesc= "Syllabus web is India’s largest course-syllabus database which features an interactive website that presents syllabus of courses in Delhi University and their syllabus in a well interactive manner. Hardcoded website using HTML & CSS. Working on shifting on ReactJS."
                    previewImg= {SyllabusWebImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/SyllabusWeb"], 
                                ["Preview Site", "https://professor91.github.io/ProjectSyllabusDB/"]
                            ]}
                    duration= "April 2022"
                /> */}
                {/* <Card 
                    projectName= "Dependency Graph Builder"
                    projectDesc= "Dependency Graph Builder iterates through each file and tells you that which file depends on what all files and how much it depends on them."
                    previewImg= {NoPreviewImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/DependencyGraph-Builder"]
                            ]}
                    duration= "March 2022"
                /> */}
                <Card
                    projectName= "WazirX Scraper"
                    projectDesc= "Built an application using WazirX API wrapper that automatically fetches data from wazirX at midnight. Hosted it on Heroku. Added functionality store fetched data in structured format in JSON files."
                    previewImg= {WazirXImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/wazirXAPI"]
                            ]}
                    duration= "Feb 2022"
                />
                <Card
                    projectName= "Linux From Scratch"
                    projectDesc= "Following instructions from Linux From Scratch 10.1, along with multiple forums tried to build my first Linux From Scratch. Downloaded packages from GitHub and other sources when mentioned packages were incompatible or outdated at the time. Debugged errors and made tweaks in commands after reading multiple forums and documentations. Successfully compiled cross-toolchain, cross compiled temporary tools. Got stuck while building Libstdc++ from GCC-10.2.0. Will pick up again some-decade!"
                    previewImg= {LinuxIMG}
                    socials= {[
                                ["Linux From Scratch", "https://www.linuxfromscratch.org/"],
                                ["10.1 Book", "https://www.linuxfromscratch.org/lfs/view/10.1/"]
                            ]}
                    duration= "Jan 2022"
                />
                <Card 
                    projectName= "DUSC Bot"
                    projectDesc= "Built a discord bot for DUSC discord community. Implemented discord views to provide a simple UI menus for community members. Used python's requests library to report any updates from news section of DU's official website."
                    previewImg= {DiscordImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/DUSC-DBot"]
                            ]}
                    duration= "December 2021"
                />
                <Card
                    projectName= "DPP Bot"
                    projectDesc= "Followed official documentation of C++, DPP (a C++ API wrapper to interact with discord API) and forums to build a C++ library from source. Successfully built the library using CMake on Linux."
                    previewImg= {DiscordImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/DPP_bot"]
                            ]}
                    duration= "October 2021"
                />
                <Card
                    projectName= "Project Syllabus DB"
                    projectDesc= "Project Syllabus DB is India’s largest course-syllabus database. Features an interactive website that presents syllabus of courses in Delhi University and their syllabus in an interactive manner. Hardcoded website using HTML & CSS."
                    previewImg= {SyllabusDB}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/ProjectSyllabusDB"],
                                ["Live Website", "https://professor91.github.io/ProjectSyllabusDB/"]
                            ]}
                    duration= "August 2021"
                />
                <Card 
                    projectName= "Game of Life"
                    projectDesc= "Semester's project. Implemented John Conway's Game of Life in JAVA. Features simulation of predefined patterns. Used AWT to build user interface."
                    previewImg= {GameofLifeIMG}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/GameofLife"]
                            ]}
                    duration= "July 2021"
                />
                <Card 
                    projectName= "jProf"
                    projectDesc= "Implemented jProf, an interpreter following Crafting Interpreters by Robert Nystrom in JAVA. Features 38 Tokens, a Scanner, a Parser, an Error Handler and a Prompt Window. Can parse code from both prompt window and soruce file. Error Handler reports error with an error message and the line number in which it occured."
                    previewImg= {jProfIMG}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/jProf"],
                                ["Crafting Interpreters", "http://www.craftinginterpreters.com/"]
                            ]}
                    duration= "May 2021"
                />
                <Card
                    projectName= "Professor: The Builder"
                    projectDesc= "The most tedious task when building a new discord server is setting up roles and permissions. Built a discord bot that creates all staff roles, level roles, and channels and sets up all the permissions with just a single command."
                    previewImg= {DiscordImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/ProfessorTheBuilder"]
                            ]}
                    duration= "April 2021"
                />
            </div>
        </div>
    );
}

export default Projects;