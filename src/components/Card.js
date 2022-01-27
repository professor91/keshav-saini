import React from "react"
import profile from "../img/profile.png"
import { FaGithub, FaLinkedinIn, FaEnvelope, FaTwitter } from "react-icons/fa"

function Card() {
    return (
        <div 
            className="w-full">
            <div
                className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
                <div
                    className="">
                    <img 
                        className= "w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" 
                        src={profile} 
                        alt= 'profile photo' 
                    />
                </div>
                <div 
                    className="text-center mt-5">
                    <p 
                        className='text-xl sm:text-2xl text-gray-900'>
                        Keshav Saini
                    </p>
                    <p 
                        className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                        C++ Developer / Data Scientist
                    </p>
                    {/* Social Media Handles */}
                    <div
                        className="flex align-center justify-center mt-4">
                        <a
                            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors durations-300"
                            href="www.github.com/professor91">
                            <FaGithub />
                            <span class="sr-only">GitHub</span>
                        </a>
                        <a
                            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-800 rounded-full hover:text-white transition-colors durations-300"
                            href="www.linkedin.com/in/keshav-saini">
                            <FaLinkedinIn />
                            <span class="sr-only">LinkedIn</span>
                        </a>
                        <a
                            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors durations-300"
                            href="www.github.com/professor91">
                            <FaTwitter />
                            <span class="sr-only">Twitter</span>
                        </a>
                        <a
                            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-900 hover:bg-green-900 rounded-full hover:text-white transition-colors durations-300"
                            href="mailto:keshavsaini1820@gmail.com">
                            <FaEnvelope />
                            <span class="sr-only">Mail</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;