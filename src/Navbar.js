import React from "react";
import logo from "./images/logo.png";
import angleDown from "./images/angledown.png";

const navbar = () => {
    return (
        <nav className="flex flex-wrap justify-between lg:px-[5rem] px-5 py-4">
            <div className="flex items-center justify-between">
                <img src={logo} alt="Logo" className="w-[2.25rem] h-[2.25rem]" />
                <div className="w-[9rem] h-[2.25rem] justify-center flex font-inter font-semibold text-3xl tracking-tight text-[#FEFEFE]">
                    FOSSCU
                </div>
            </div>
            <div className="flex w-[45rem] h-[5rem] justify-center items-center">
                <ul className="flex flex-wrap lg:flex-nowrap justify-between w-full items-center lg:mt-0 mt-4">
                    <li className="text-[#0DFF1C] w-[3.125rem] h-[2rem] font-semibold text-lg tracking-tight cursor-pointer each-in-out duration-200 transition-smooth hover:text-[#0DFF1C]/[0.5]">Home</li>
                    <li className="text-[#FEFEFE] w-[3.125rem] h-[2rem] font-semibold text-lg tracking-tight cursor-pointer each-in-out duration-200 transition-smooth hover:text-[#ffffff]/[0.5]">About</li>
                    <li className="text-[#FEFEFE] w-[3.125rem] h-[2rem] font-semibold text-lg tracking-tight cursor-pointer each-in-out duration-200 transition-smooth hover:text-[#ffffff]/[0.5]">Team</li>
                    <li className="text-[#FEFEFE] w-[3.125rem] h-[2rem] font-semibold text-lg tracking-tight cursor-pointer each-in-out duration-200 transition-smooth hover:text-[#ffffff]/[0.5]">Contact</li>
                    <li className="text-[#FEFEFE] w-[3.125rem] h-[2rem] font-semibold text-lg tracking-tight cursor-pointer each-in-out duration-200 transition-smooth hover:text-[#ffffff]/[0.5]">Shipyard</li>
                    <li className="text-[#FEFEFE] w-[3.125rem] h-[2rem] font-semibold text-lg tracking-tight cursor-pointer flex">More<img src={angleDown} alt="More" className="w-[3rem] h-[1rem] my-auto"/></li>
                </ul>
            </div>
        </nav>
    );
};

export default navbar;
