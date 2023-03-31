import React from "react";

const Card = (props) => {

    const points= []

    for (let point of props.desc) {
        points.push(
            <li className="pr-6">
                {point}
            </li>
        )
    };

    const pub = []

    if (props.pub) {
        pub.push(
            <div
                className="pb-2">
                <a className="pr-6 italic"
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
            className="pb-10 block">
                {/* md:flex flex-row justify-evenly */}
            <span
                className="text-2xl font-bold">
                    {props.position}
            </span>
            <p
                className="text-xl pt-1 pb-1">
                {props.orgi}
            </p>
            <div
                className="pb-1">
                {props.duration}
            </div>
            {pub}
            <div 
                className="ml-auto px-3">
                {points}
            </div>
        </div>
    );
}

function Experience () {
    return (
        <div 
            className="mt-10">
                {/* max-w-4xl */}
            <p
                className="text-3xl font-bold">
                Work Experience
            </p>
            <div
                className="list-disc mt-6 text-gray-600 ">
                <Card 
                    position="Discord Bot Developer"
                    orgi="Rachana Ranade and Associates"
                    duration="June-August 2022"
                    desc={[
                        "Collaborated with a friend to cold pitch the idea of creating a Discord server for students enrolled in their course",
                        "Successfully created and set up the entire Discord server for the organization",
                        "Conceptualized a Discord bot that verifies students and gives them access to course-specific chat rooms",
                        "Integrated the bot with Google Sheets using GSheets API to provide an interface for team data",
                        "Proven ability to take an idea from conception to implementation"
                    ]}
                />
            </div>
            <p
                className="text-3xl font-bold">
                Position of Responsibility
            </p>
            <div
                className="list-disc mt-6 text-gray-600 ">
                <Card 
                    position="Content Team Lead"
                    orgi="e-Blitzine, Department of Computer Science, Keshav Mahavidyalaya"
                    duration="2022-2023"
                    pub={[
                        "Publication- Information Age 2.0",
                        "https://keshav.du.ac.in/uploads/magazine/computerscience/e-Blitzine-2023.pdf"
                    ]}
                    desc={[
                        "Took on leadership role as Content Team Lead",
                        "Researched and selected magazine theme, and suggested topics for interested students to write about",
                        "Engaged in discussions and provided continuous feedback on submitted articles",
                        "Supervised and Contributed content for social media platforms",
                        "Prepared MOMs and monthly status reports to save catch up time during meetings"
                    ]}
                />
                <Card 
                    position="Content Executive"
                    orgi="e-Blitzine, Department of Computer Science, Keshav Mahavidyalaya"
                    duration="2021-2022"
                    pub={[
                        "Publication- AI Empowering the Future",
                        "https://keshav.du.ac.in/uploads/magazine/computerscience/e-Blitzine-2022.pdf"
                    ]}
                    desc={[
                        "Demonstrated writing skills by contributing articles to the magazine for three years",
                        "Showed creativity and design skills by designing a crossword puzzle for the magazine",
                        "Demonstrated ability to manage multiple tasks and meet deadlines in a team environment"
                    ]}
                />
                <Card 
                    position="Executive"
                    orgi="e-Blitzine, Department of Computer Science, Keshav Mahavidyalaya"
                    pub={[
                        "Publization- e-Blitzine'21",
                        "https://keshav.du.ac.in/uploads/magazine/computerscience/e-Blitzine2021.pdf"
                    ]}
                    duration="2020-2021"
                    desc={[
                        "Showed creativity and design skills by adding pictures to articles",
                        "Developed keen eye for detail by proofreading articles for grammatical mistakes",
                        "Proven ability to adapt to changing situations and take on new challenges"
                    ]}
                />
            </div>
            <p
                className="text-3xl font-bold">
                Volunteer Experience
            </p>
            <div
                className="list-disc mt-6 text-gray-600 ">
                <Card 
                    position="Discord Community Manager"
                    orgi="Abhi and Niyu"
                    duration="2021-present"
                    pub={[
                        "Discord Server",
                        "https://discord.gg/DY58PFPVfd"
                    ]}
                    desc={[
                        "Successfully created and launched Abhi and Niyu's Discord Community in March 2021",
                        "Showcased excellent interpersonal skills in building a thriving online community with 21k+ members and counting",
                        "Showed a passion for creating fun and inclusive spaces for people to connect through engaging events, including open mic, book and movie discussions, game tournaments etc",
                        "Coordinated a highly successful 6-day long event (Harry Potter Week) with 200+ members participating, featuring daily competitions like chess tournaments, treasure hunts, and COD tournaments",
                        "Proven ability to work collaboratively with others to achieve shared goals",
                    ]}
                />
            </div>
        </div>
    );
}

export default Experience;