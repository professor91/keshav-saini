import React, { useEffect, useState } from "react";
import NoPreviewImg from "../assets/img/No Preview Available.png";
import TypeRacerImg from "../assets/img/TypeRacer.png";

const Card = (props) => {
    const socials= []
    const tagsList = []

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

    for (let tag of (props.tags || [])) {
        tagsList.push(<span className='tech-tag'>{tag}</span>)
    }

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
                <div className='tech-stack' style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginRight: '10px', marginBottom: '10px'}}>
                    {tagsList}
                </div>
                <div
                    className="mt-auto flex">
                    <div> 
                        {socials}
                    </div>
                    <div 
                        className="ml-auto">
                        Created on: {
                            new Intl.DateTimeFormat("en-IN", {
                                timeZone: "Asia/Kolkata",
                                month: "short",
                                year: "numeric"
                            }).format(new Date(props.created))
                        }
                    </div>
                    <div 
                        className="ml-auto">
                        Last worked on: {
                            new Intl.DateTimeFormat("en-IN", {
                                timeZone: "Asia/Kolkata",
                                month: "short",
                                year: "numeric"
                            }).format(new Date(props.last_updated))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function GithubProjects() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRepos() {
        try {
            const response = await fetch(
                    "https://api.github.com/users/professor91/repos?per_page=100");
            const data = await response.json();
            console.log(data);
            setRepos(data);
        } catch (err) {
            console.log("Failed to fetch repos");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

        fetchRepos();
    }, []);

    if (loading) {
        return <p>Loading projects...</p>;
    }
    return (
        <div>
        <p className="mt-5 mb-5 text-3xl font-bold">Projects</p>
        {repos
                .filter((repo) => repo.topics?.includes("professor-pfp"))
                .map((repo) => (
                    <Card
                        projectName={repo.name}
                        projectDesc={repo.description}
                        previewImg={TypeRacerImg}
                        socials= {[
                                    ["GitHub", repo.html_url],
                                ]}
                        created={repo.created_at}
                        last_updated={repo.updated_at}
                        tags={[repo.language]}
                    />
                ))
            }
        </div>
    );
}
