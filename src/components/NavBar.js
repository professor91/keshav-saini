import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

function NavBar () {
    return(
        <nav
            className="flex justify-between py-8 ">
            {/*  w-full */}
            <div 
                className="text-2xl font-bold">
                <Link 
                    to="/keshav-saini">
                    Keshav Saini
                </Link>
            </div>
            <div
                className="hidden md:flex space-x-10 items-center">
                <Link 
                    className=""
                    to="/skills">
                    Skills
                </Link>
                <a 
                    className=""
                    href="https://medium.com/@keshavcode3" 
                    target='_blank'>
                    Blog
                </a>
            </div>
            <HiMenuAlt3 className="md:hidden text-xl" />
        </nav>
    );
}

export default NavBar;