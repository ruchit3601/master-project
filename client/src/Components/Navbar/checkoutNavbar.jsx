import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi"

const Navbar = () => {
    return (
        <>
            <nav className="p-3 flex bg-white lg:shadow-none shadow-md w-full items-center">
                <div className="container px-4 md:px-20 mx-auto">
                    <div className=" flex items-center w-full justify-between">
                        <BiArrowBack />
                        <div className="w-24 m-2">
                                <img 
                                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                                    alt="logo"
                                    className="w-full h-full" 
                                />
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="border flex items-center gap-2 p-2 border-gray-300 text-zomato-400 rounded-full">
                                <FaUserAlt /> 
                            </span>
                            Ruchit
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
