import React from "react";

function Skills() {
    return(
        <div 
            className="mt-10">
            <p
                className="text-3xl font-bold">
                Skills
            </p>
            <div
                className="flex justify-between">
                <div>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Backend
                    </p>
                    <ul
                        className="list-disc mt-2 mx-4 text-gray-600 ">
                        <li>Python</li>
                        <li>Django</li>
                        <li>FastAPI</li>
                        <li>PostgreSQL</li>
                        <li>Redis</li>
                        <li>Celery</li>
                        <li>boto3 (DynamoDB, S3)</li>
                        <li>MongoDB</li>
                        <li>JavaScript</li>
                    </ul>
                </div>

                <div>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Cloud
                    </p>
                    <ul
                        className="list-disc mt-2 mx-4 text-gray-600 ">
                        <li>AWS EC2</li>
                        <li>AWS Cloudwatch</li>
                        <li>Digital Ocean</li>
                        <li>Nginx</li>
                        <li>Github Workflows</li>
                    </ul>
                </div>
                <div>
                    <p
                        className="text-gray-600 leading-relaxed mt-4">
                        Frontend
                    </p>
                    <ul
                        className="list-disc mt-2 mx-4 text-gray-600 ">
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>TailwindCSS</li>
                        <li>Flutter</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Skills;
