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
            className="pb-10 block md:flex flex-row justify-evenly">
            <div
                className="img w-2/5 sm:justify-center">
                <img
                    src={props.previewImg}>
                </img>
            </div>
            <div
                className="pt-5 flex flex-col md:basis-1/2 md:pt-0">
                <span
                    className="text-2xl font-bold">
                        {props.projectName}
                </span>
                <p
                    className="pt-3 pb-5">
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
                className="list-disc mt-6 mx-4 text-gray-600 ">
                <Card 
                    projectName= "Pytubedata"
                    projectDesc= "A simple wrapper for YouTube Data API v3 written in Python. Followed official documentation of Youtube Data API and studied multiple existing wrapper projects to implement the wrapper according to industry standards. Implemented Python's setuptools to provide streamline setup on different machines and uploaded the project on PyPi, just a `pip install pytubedata` away to use."
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
                className="list-disc mt-6 mx-4 text-gray-600 ">
                <Card 
                    projectName= "Spotify API"
                    projectDesc= "Followed a tutorial to build an API wrapper for Spotify API. Implemented OAuth 2.0 authorization to get client credentials to make API calls on behalf of the user. Added functionality to save fetched data in structured format using JSON."
                    previewImg= {SpotifyImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/SpotifyAPI"]
                            ]}
                    duration= "June 2022"
                />
                <Card 
                    projectName= "Syllabus Web"
                    projectDesc= "Syllabus web is India’s largest course-syllabus database which features an interactive website that presents syllabus of courses in Delhi University and their syllabus in a well interactive manner. Hardcoded website using HTML & CSS. Working on shifting on ReactJS."
                    previewImg= {SyllabusWebImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/SyllabusWeb"], 
                                ["Preview Site", "https://professor91.github.io/ProjectSyllabusDB/"]
                            ]}
                    duration= "April 2022"
                />
                <Card 
                    projectName= "Dependency Graph Builder"
                    projectDesc= "Dependency Graph Builder iterates through each file and tells you that which file depends on what all files and how much it depends on them."
                    previewImg= {NoPreviewImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/DependencyGraph-Builder"]
                            ]}
                    duration= "March 2022"
                />
                <Card
                    projectName= "WazirX Scraper"
                    projectDesc= "Followed instructions of official WazirX REST API wrapper and online sources to build an application that fetches data from wazirX for the specified tokens. Scheduled the task of fetching data to happen automatically everyday at 12 midnight and hosted it on Heroku. Added functionality to save fetched data in structured format using JSON structured in different directories. Also implemented a logging system to record actions performed by the application at various stages."
                    previewImg= {WazirXImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/wazirXAPI"]
                            ]}
                    duration= "Feb 2022"
                />
                <Card
                    projectName= "Linux From Scratch"
                    projectDesc= "Primarily followed instructions from Linux From Scratch 10.1, along with multiple forums to try and build my first running Linux From Scratch. Apart from copy-pasting commands from the LFS book, downloaded packages from GitHub and other sources when mentioned packages were incompatible or outdated at the time. Debugged errors and made tweaks in commands after reading multiple forums and documentations. Successfully compiled cross-toolchain, cross compiled temporary tools. Got stuck while building Libstdc++ from GCC-10.2.0. Will pick up again someday!"
                    previewImg= {LinuxIMG}
                    socials= {[
                                ["Linux From Scratch", "https://www.linuxfromscratch.org/"],
                                ["10.1 Book", "https://www.linuxfromscratch.org/lfs/view/10.1/"]
                            ]}
                    duration= "Jan 2022"
                />
                <Card 
                    projectName= "DUSC Bot"
                    projectDesc= "Used Pycord, a Python API wrapper to interact with discord API, to build a discord bot. Implemented select_menu, a menu giving multiple options to members to choose from and assigning roles to the members according to their responses. Also implemented a logging system to record actions performed by the bot at various stages and a couple utility commands for easy use."
                    previewImg= {DiscordImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/DUSC-DBot"]
                            ]}
                    duration= "December 2021"
                />
                <Card
                    projectName= "DPP Bot"
                    projectDesc= "Followed official documentation of C++, DPP (a C++ API wrapper to interact with discord API) and forums to program a discord bot. Built DPP library from source using CMake on Linux."
                    previewImg= {DiscordImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/DPP_bot"]
                            ]}
                    duration= "October 2021"
                />
                <Card
                    projectName= "Project Syllabus DB"
                    projectDesc= "Project Syllabus DB is India’s largest course-syllabus database which features an interactive website that presents syllabus of courses in Delhi University and their syllabus in an interactive manner. Hardcoded website using HTML & CSS."
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
                    projectDesc= "Implemented jProf, an interpreter following Crafting Interpreters by Robert Nystrom in JAVA. It features 38 Tokens, a Scanner, a Parser, an Error Handler and a Prompt Window. Can parse code from both prompt window and soruce file. Error Handler reports error with an error message and the line number in which it occured."
                    previewImg= {jProfIMG}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/jProf"],
                                ["Crafting Interpreters", "http://www.craftinginterpreters.com/"]
                            ]}
                    duration= "May 2021"
                />
                <Card
                    projectName= "Professor: The Builder"
                    projectDesc= "Professor: The Builder is a discord server builder bot built in Python. One of the tedious task in building a new discord server is setting up permissions. The bot creates different staff and level roles, creates different channels and sets up all the permissions with just a single command."
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