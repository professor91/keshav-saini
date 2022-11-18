import React from "react";
import NoPreviewImg from "../assets/img/No Preview Available.png";
import SyllabusWebImg from "../assets/img/syllabusWeb.png"
import YoutubeImg from "../assets/img/youtube.jpg"
import DiscordImg from "../assets/img/discord.jpg"
import SpotifyImg from "../assets/img/spotify.jpg"
import WazirXImg from "../assets/img/wazirX.jpg"
import jProfIMG from "../assets/img/jprof.png"

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
                    projectDesc= "A simple wrapper for YouTube Data API written in Python"
                    previewImg= {YoutubeImg}
                    socials= {[]}
                    duration= "November 2022"
                />
                <Card 
                    projectName= "Syllabus Web"
                    projectDesc= "Syllabus web is India’s largest course-syllabus database which features an interactive website that presents syllabus of courses in Delhi University and their syllabus in a well interactive manner. Hardcoded website using HTML & CSS. Working on shifting on ReactJS."
                    previewImg= {SyllabusWebImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/SyllabusWeb"], 
                                ["Preview Site", "https://professor91.github.io/ProjectSyllabusDB/"]
                            ]}
                    duration= "Sep 2021, April 2022"
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
                    duration= "May 2022"
                />
                <Card 
                    projectName= "Dependency Graph Builder"
                    projectDesc= "Dependency Graph Builder iterates through each file and tells you that which file depends on what all files and how much it depends on them"
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
                    socials= {[[
                                "GitHub", "https://github.com/professor91/wazirXAPI"]
                            ]}
                    duration= "Feb 2022"
                />
                <Card 
                    projectName= "DUSC Bot"
                    projectDesc= "Used Pycord, a Python API wrapper to interact with discord API, to build a discord bot. Implemented select_menu, a menu giving multiple options to members to choose from and assigning roles to the members according to their responses. Also implemented a logging system to record actions performed by the bot at various stages and a couple utility commands for easy use."
                    previewImg= {DiscordImg}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/DUSC-DBot"]
                            ]}
                    duration= "December 2022"
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
                    projectName= "jProf"
                    projectDesc= "Implemented jProf, an interpreter following Crafting Interpreters by Robert Nystrom in JAVA. It features 38 Tokens, a Scanner, a Parser, an Error Handler and a Prompt Window. Can parse code from both prompt window and soruce file. Error Handler reports error with an error message and the line number in which it occured."
                    previewImg= {jProfIMG}
                    socials= {[
                                ["GitHub", "https://github.com/professor91/jProf"],
                                ["Crafting Interpreters", "http://www.craftinginterpreters.com/"]
                            ]}
                    duration= "June 2021"
                />
            </div>
        </div>
    );
}

export default Projects;  