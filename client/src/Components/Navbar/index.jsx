import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { RiSearchLine } from "react-icons/ri"

const MobileNav = () => {
    return(
        <div className=" flex items-center w-full justify-between lg:hidden">
            <div className="w-24 m-2">
                    <img 
                        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                        alt="logo"
                        className="w-full h-full" 
                    />
            </div>
                <div className="flex items-center gap-3">
                    <button className="bg-zomato-400 text-white px-2 h-8 text-sm rounded-full">Use App</button>
                    <span className="border p-2 border-gray-300 text-zomato-400 rounded-full">
                        <FaUserAlt />
                    </span>
                </div>
        </div>
    );
};

const LargeNav = () => {
    return (
        <> 
        <div className="container px-20 mx-auto">
            <div className="hidden w-full gap-4 items-center justify-between lg:flex">
                <div className="w-32 lg:w-40">
                        <img 
                            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                            alt="logo"
                            className="w-full h-full" 
                        />
                </div>
                <div className=" w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-grey-300 rounded-md">
                    <div className="flex items-center gap-2 border-r-2 border-grey-300 pr-2">
                        <span className="text-zomato-300 text-2xl">
                            <HiLocationMarker />
                        </span>
                        <input type="text" placeholder="Ahmedabad" className="focus:outline-none" />
                        <IoMdArrowDropdown />
                    </div>
                    <div className="flex w-full items-center gap-2">
                        <span className="text-gray-400 text-xl">
                        <RiSearchLine />
                        </span>
                        <input 
                            type="search" 
                            placeholder="Search for restaurant, cuisine or a dish" 
                            className="w-full focus:outline-none"
                        />
                    </div>
                </div>
                <div className=" ml-28 flex gap-6 ">
                    <button className="text-gray-500 text-xl hover:text-gray-800">Login</button>
                    <button className="text-gray-500 text-xl hover:text-gray-800">Signup</button>
                </div>
            </div>
        </div>
        </>
    );
};


const Navbar = () => {
    return (
        <>
            <nav className="p-3 flex bg-white shadow-md w-full items-center">
                <MobileNav />
                <LargeNav />
            </nav>
        </>
    );
};

export default Navbar;
