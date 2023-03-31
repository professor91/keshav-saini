import React from "react";

const Card = (props) => {
    return (
        <div 
            className="pb-10 block">
                {/* md:flex flex-row justify-evenly */}
            <span
                className="text-2xl font-bold">
                    {props.degree}
            </span>
            <p
                className="text-xl pt-2 pb-1">
                {props.college}
            </p>
            <div
                className="">
                <div> 
                    {props.duration}
                </div>
                <div 
                    className="ml-auto">
                    <a className="pr-6"
                        href={props.certificate}
                        target="_blank"
                        rel="noreferrer">
                        Certificate
                    </a>
                </div>
            </div>
        </div>
    );
}

function Academics () {
    return (
        <div 
            className="mt-10">
                {/* max-w-4xl */}
            <p
                className="text-3xl font-bold">
                Formal Education
            </p>
            <div
                className="list-disc mt-6 text-gray-600 ">
                <Card 
                    degree="BSc. (Hons) Computer Science"
                    college="University of Delhi"
                    duration="2020-2023"
                />
                <Card 
                    degree="Foundational Certificate Data Science & Programming"
                    college="Indian Institute of Technology Madras"
                    duration="2021-2022"
                />
            </div>
            <p
                className="text-3xl font-bold">
                MOOC Certificates
            </p>
            <div
                className="list-disc mt-6 text-gray-600 ">
                <Card 
                    degree="Learning How to Learn"
                    college="Coursera"
                    duration="October 2020"
                    certificate="https://coursera.org/share/7664dba97e4c8f391071805c57ff2077"
                />
                <Card 
                    degree="Introduction to Data Science in Python"
                    college="DataCamp"
                    duration="September 2020"
                    certificate="https://www.datacamp.com/statement-of-accomplishment/course/e2bacfa2784653354a8289efb7b8186a1e305656"
                />
            </div>
        </div>
    );
}

export default Academics;