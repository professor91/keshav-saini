import React from "react";
import NoPreviewImg from "../assets/img/No Preview Available.png";

const Card = (props) => {
    return (
        <div 
            className="block md:flex flex-row">
                {/* w-full */}
            <div
                className="img">
                <img
                    src={NoPreviewImg}>
                </img>
            </div>
            <div
                className="description basis-1/2 ">
                <span
                    className="text-2xl font-bold">
                        {props.projectName}
                    </span>
                <p
                    className="mt-5">
                    {props.projectDesc}
                    </p>
                <div
                    className="mt-4">
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
            <ul
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
            </ul>
        </div>
    );
}

export default Projects;