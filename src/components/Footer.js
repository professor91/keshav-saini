import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaTwitter } from "react-icons/fa"

const style="text-xl m-1 p-1 sm:m-2 sm:p-2 rounded-full hover:text-white transition-colors durations-300"

function Footer () {
    return (
            <div 
                className="pt-20 py-5 border-t-3/2">
                <div 
                    className="flex justify-center">
                    <a
                        className={style.concat("text-gray-800 hover:bg-gray-800")}
                        href="https://github.com/professor91" 
                        target="_blank">
                        <FaGithub />
                        <span class="sr-only">GitHub</span>
                    </a>
                    <a
                        className={style.concat(" text-blue-800 hover:bg-blue-800")}
                        href="https://www.linkedin.com/in/keshav-saini/" 
                        target="_blank">
                        <FaLinkedinIn />
                        <span class="sr-only">LinkedIn</span>
                    </a>
                    <a
                        className={style.concat(" text-blue-500 hover:bg-blue-500")}
                        href="https://twitter.com/sainikeshav3" 
                        target="_blank">
                        <FaTwitter />
                        <span class="sr-only">Twitter</span>
                    </a>
                    <a
                        className={style.concat(" text-green-900 hover:bg-green-900")}
                        href="mailto:keshavsaini1820@gmail.com">
                        <FaEnvelope />
                        <span class="sr-only">Mail</span>
                    </a>
                </div>
                {/* Credits - https://thenumbat.github.io/ - Make a card */}
            </div>
        );
}

export default Footer;