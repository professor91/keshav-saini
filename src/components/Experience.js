import React from "react";
import './style.css'

const Card = (props) => {

    const points = []
    const tagsList = []

    for (let point of props.desc) {
        points.push(
            <li>
                {point}
            </li>
        )
    };

    for (let tag of (props.tags || [])) {
        tagsList.push(<span className='tech-tag'>{tag}</span>)
    }

    const pub = []

    if (props.pub) {
        pub.push(
            <div
                className="mb-2">
                <a className="italic"
                    href={props.pub[1]}
                    target="_blank"
                    rel="noreferrer">
                    {props.pub[0]}
                </a>
            </div>
        )
    }

    return (
        <div 
            className="mb-10 block">
                {/* md:flex flex-row justify-evenly */}
            <span
                className="text-2xl font-bold">
                    {props.position}
            </span>
            <div className="flex justify-between items-baseline mt-1 mb-1">
              <p className="text-xl">{props.orgi}</p>
              <div>{props.duration}</div>
            </div>
            {pub}
            <div 
                className="ml-auto ml-3">
                {points}
            </div>
            <div className='tech-stack' style={{display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '10px'}}>
                {tagsList}
            </div>
        </div>
    );
}

function Experience () {
    return (
        <div 
            className="mt-10">
                {/* max-w-4xl */}
            <p className="text-3xl font-bold">Work Experience </p>

            <div className="mt-6 text-gray-600 ">
                <Card
                    position="Fullstack Developer"
                    orgi="Waltr - Kre38labs"
                    duration="Nov 2023 - Present"
                    desc={[
                        "Designed and implemented a Media management platform using Django, AWS S3, Flutter where users can upload, organize, and retrieve device-related assets such as installed device photos, plumbing diagrams, and apartment layout diagrams",
                        "Built a dashboard using Django, AWS DynamoDB, Flutter that enables users to send new Firmwares and configurations to IoT devices via OTA and maintains update audit trails, reducing developer-handled operational requests by 60%",
                        "Created a centralized monitoring platform using Django, Redis, Flutter, that detects faulty devices early and cuts manual effort by 70%. Integrated it with Freshdesk via APIs to create and route support tickets",
                        "Implemented and optimized various SQL and AWS DynamoDB queries for water usage reports, device monitoring platform reducing response time of selected APIs down by 20%",
                        "Built and maintained an internal tools application using Flutter, deployed on Firebase and Play Store",
                        "Built time-series visualizations using Pandas and Bokeh to analyze device connectivity patterns, detect network anomalies, and identify data outliers",
                    ]}
                    tags={["Python", "Django", "DRF", "PostgreSQL", "Redis", "Pandas", "Bokeh", "AWS EC2", "AWS S3", "AWS DynamoDB", "Flutter"]}
                />
            </div>

            <div className="mt-6 text-gray-600 ">
                <Card
                    position="Backend Developer"
                    orgi="TLE Eliminators"
                    duration="Jun 2023 - Aug 2024"
                    desc={[
                        "Built and maintained a service layer using Discord API’s Python wrapper, and MongoDB that powers TLE’s chat-based doubt support system. Migrated from a JavaScript based third-party platform to Digital Ocean’s VPS saving $40/month on Infra",
                        "Built a FastAPI layer enabling users to securely connect their website account to their discord account and get access to doubt support channels for their courses in a single click",
                        "Automated the tedious process of configuring new Discord batches by implementing a backend workflow, reducing setup time from 2.5 hours to seconds",
                        "Implemented MongoDB aggregation queries for reporting system-analytics and drove a mentor Leaderboard",
                    ]}
                    tags={["Python", "JavaScript", "FastAPI", "API Integration", "MongoDB", "Digital Ocean"]}
                />
            </div>

            <p className="text-3xl font-bold">Internships</p>

            <div className="mt-6 text-gray-600 ">
                <Card
                    position="Backend Developer"
                    orgi="Rachana Ranade and Associates"
                    duration="June-August 2022"
                    desc={[
                        "Cold pitched an idea and set up a Private Discord community for students enrolled in Rachana Mam’s courses along with a discord bot custom built for the community",
                        "The bot was created using Discord API wrapper in Python, Google Sheets and GSheets API featuring an authentication layer enabling course students to securely get access to course-specific chat-rooms",
                        "Proven ability to take an idea from conception to implementation"
                    ]}
                    tags={["Python", "API Integration", "Google Sheets API"]}
                />
            </div>

            <p className="text-3xl font-bold">Activities</p>

            <div className="mt-6 text-gray-600 ">
                <Card
                    position="Discord Community Manager"
                    orgi="Abhi and Niyu"
                    duration="Mar 2021 - Mar 2022"
                    pub={[
                        "Discord Server",
                        "https://discord.gg/DY58PFPVfd"
                    ]}
                    desc={[
                        "Cold pitched an idea and created a Public Discord community for Abhi & Niyu",
                        "Collaborated in organizing a 6-day long Harry Potter themed event featuring a Treasure Hunt",
                        "Collabored with other in organinzing engaging events, including open mic, book and movie discussions, game tournaments etc",
                    ]}
                />

                <Card
                    position="Content Team Lead"
                    orgi="e-Blitzine, Department of Computer Science, Keshav Mahavidyalaya"
                    duration="Mar 2022 - Mar 2023"
                    pub={[
                        "Publication- Information Age 2.0",
                        "https://keshav.du.ac.in/uploads/magazine/computerscience/e-Blitzine-2023.pdf"
                    ]}
                    desc={[
                        "Led a team of 3 to produce the department's annual magazine 2023 publication",
                        "Engaged in discussions and provided continuous feedback on submitted articles",
                        "Supervised and Contributed content for social media platforms",
                        "Prepared MOMs and monthly status reports to save catch up time during meetings"
                    ]}
                />

                <Card
                    position="Content Team Member"
                    orgi="e-Blitzine, Department of Computer Science, Keshav Mahavidyalaya"
                    duration="Mar 2020 - Mar 2022"
                    pub={[
                        "Publication- AI Empowering the Future",
                        "https://keshav.du.ac.in/uploads/magazine/computerscience/e-Blitzine-2022.pdf"
                    ]}
                    desc={[
                        "Contributed 2 articles on Blockchain and Open Source Intelligence",
                        "Reviewed, revised and restructured submitted articles for flow and tone, while correcting grammar, spelling, and factual errors",
                    ]}
                />
            </div>
        </div>
    );
}

export default Experience;
