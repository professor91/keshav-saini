import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaTwitter } from "react-icons/fa"

function Footer () {
    return (
        <div 
            className="py-5 border-t-3/2">
            <div 
                className="flex justify-center mt-4">
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
            <div
                className="flex justify-center mt-4">
                <p
                    className="text-black mb-4">
                    Made with <span 
                                className="mr-2" 
                                role="link" 
                                aria-label="heart">
                                💙
                                </span>
                    by <a
                        className="text-blue-500 hover:underline"
                        href="mailto:keshavsaini1820@gmail.com">
                        Keshav Saini
                        </a>
                </p>

                </div>
        </div>
    );
}

export default Footer;