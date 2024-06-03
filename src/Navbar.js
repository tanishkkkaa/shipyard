import React from "react";
import logo from "./images/logo.png";
import angleDown from "./images/angledown.png";
import menuIcon from "./images/menu.png"
import { useState } from "react";

const Navbar = () => {
    const[isOpen, setIsopen] = useState(false);
    const toggleMenu = () => {
        setIsopen(!isOpen)
    }
    return (
        <nav className="flex flex-wrap justify-between lg:px-[5rem] px-5 py-4">
            <div className="flex items-center justify-between">
                <img src={logo} alt="Logo" className="w-[2.25rem] h-[2.25rem]" />
                <div className="sm:w-[9rem] w-[8rem] h-[2.25rem] justify-center flex font-inter font-semibold text-3xl tracking-tight text-[#FEFEFE]">
                    FOSSCU
                </div>
            </div>
            <button
                className="sm:hidden text-white focus:outline-none "
                onClick={toggleMenu}
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
                    </svg>
                )}
            </button>
            <div className={`flex w-full sm:w-[45rem] h-[5rem] justify-center items-center ${isOpen ? 'block' : 'hidden sm:flex'}`}>
                <ul className={`flex flex-wrap lg:flex-nowrap justify-between w-full items-center lg:mt-0 mt-4 ${isOpen ? 'block' : 'flex'}`}>
                    <li className="text-[#0DFF1C] sm:w-[3.125rem] h-[2rem] font-semibold text-lg tracking-tight cursor-pointer each-in-out duration-200 transition-smooth hover:text-[#0DFF1C]/[0.5]">Home</li>
                    <li className="text-[#FEFEFE] sm:w-[3.125rem] h-[2rem] font-semibold text-lg tracking-tight cursor-pointer each-in-out duration-200 transition-smooth hover:text-[#ffffff]/[0.5]">About</li>
                    <li className="text-[#FEFEFE] sm:w-[3.125rem] h-[2rem] font-semibold text-lg tracking-tight cursor-pointer each-in-out duration-200 transition-smooth hover:text-[#ffffff]/[0.5]">Team</li>
                    <li className="text-[#FEFEFE] sm:w-[3.125rem] h-[2rem] font-semibold text-lg tracking-tight cursor-pointer each-in-out duration-200 transition-smooth hover:text-[#ffffff]/[0.5]">Contact</li>
                    <li className="text-[#FEFEFE] sm:w-[3.125rem] h-[2rem] font-semibold text-lg tracking-tight cursor-pointer each-in-out duration-200 transition-smooth hover:text-[#ffffff]/[0.5]">Shipyard</li>
                    <li className="text-[#FEFEFE] sm:w-[3.125rem] h-[2rem] font-semibold text-lg tracking-tight cursor-pointer flex">More<img src={angleDown} alt="More" className="sm:w-[3rem] h-[1rem] my-auto"/></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
