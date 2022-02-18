import React from "react";
import NoPreviewImg from "../assets/img/No Preview Available.png";

const Card = (props) => {
    return (
        <div 
            className="pb-10 block md:flex flex-row justify-evenly">
                {/* w-full */}
            <div
                className="img w-2/5 sm:justify-center">
                <img
                    src={NoPreviewImg}>
                </img>
            </div>
            <div
                className="pt-5 flex flex-col md:basis-1/2 md:pt-0">
                <span
                    className="text-2xl font-bold">
                        {props.projectName}
                    </span>
                <p
                    className="mt-5">
                    {props.projectDesc}
                    </p>
                <div
                    className="mt-auto">
                    <a href={props.githubLink}>GitHub</a>
                </div>
            </div>
        </div>
    );
}

function Projects () {
    return (
        <div 
            className=" mt-10">
                {/* max-w-4xl */}
            <p
                className="text-3xl font-bold">
                Active Projects
            </p>
            <div
                className="list-disc mt-6 mx-4 text-gray-600 ">
                <Card 
                    projectName= "Syllabus Web"
                    projectDesc= "Syllabus web is India’s largest course-syllabus database which features an interactive website \
                    that presents syllabus of all courses in Delhi University and their syllabus in a well interactive manner."
                />
                <Card
                    projectName= "WazirX Scraper"
                    projectDesc= "Carnegie Mellon University’s educational graphics software package. \
                    Includes projects in interactive 3D mesh editing, path tracing, dynamic animation, and physics-based simulation."
                />
            </div>
        </div>
    );
}

export default Projects;