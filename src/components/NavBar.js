import React from "react";
import { HiMenuAlt3 } from "react-icons/hi"

function NavBar () {
    return(
        <nav
            className="container flex justify-between pb-10 mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div className="text-lg font-bold">Keshav Saini</div>
            <div
                className="hidden md:flex space-x-10 items-center">
                <a href="#" className="text-selected-text">About Me</a>
                <a href="#" className="">Skills</a>
                <a href="#" className="">Blog</a>
                <a href="#" className="">
                    <button className="bg-black rounded-full px-5 py-2">
                        <span className="text-white transiti">Drop a Message</span>
                    </button>
                </a>
            </div>
            <HiMenuAlt3 className="md:hidden text-xl" />
        </nav>
    );
}

export default NavBar;