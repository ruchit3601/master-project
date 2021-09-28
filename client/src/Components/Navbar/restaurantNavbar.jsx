import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import gravatar from "gravatar";
import { useSelector } from "react-redux";

//  Components
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

const MobileNav = ({ SignIn, SignUp }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const reduxState = useSelector((global) => global.user?.user);

  return (
    <div className=" flex items-center w-full justify-between lg:hidden">
      <BiArrowBack />
      <div className="w-24 m-2">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-zomato-400 text-white px-2 h-8 text-sm rounded-full">
          Use App
        </button>
        {reduxState?.user?.fullname ? (
          <>
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-300 text-zomato-400 rounded-full w-20 h-20"
            >
              <img
                src={gravatar.url(reduxState?.user?.email)}
                alt={reduxState?.user?.email}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                <button>Sign Out</button>
              </div>
            )}
          </>
        ) : (
          <>
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-300 text-zomato-400 rounded-full"
            >
              <FaUserAlt />
            </div>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                <button onClick={SignIn}>Sign In</button>
                <button onClick={SignUp}>Sign Up</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const LargeNav = ({ SignIn, SignUp }) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const reduxState = useSelector((global) => global.user?.user);
  return (
    <>
      <div className="hidden lg:inline container px-20 mx-auto">
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
              <input
                type="text"
                placeholder="Ahmedabad"
                className="focus:outline-none"
              />
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
          {reduxState?.user?.fullname ? (
            <div className="relative w-20">
              <div
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="border p-2 border-gray-300 text-zomato-400 w-full h-20 rounded-full"
              >
                <img
                  src={gravatar.url(reduxState?.user?.email)}
                  alt={reduxState?.user?.email}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {isDropDownOpen && (
                <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                  <button>Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <div className=" ml-24 flex gap-5 ">
              <button
                onClick={SignIn}
                className="text-gray-500 text-lg hover:text-gray-800"
              >
                Login
              </button>
              <button
                onClick={SignUp}
                className="text-gray-500 text-lg hover:text-gray-800"
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const openSignInmodal = () => setOpenSignin(true);
  const openSignUpmodal = () => setOpenSignup(true);

  return (
    <>
      <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
      <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
      <nav className="p-3 flex bg-white lg:shadow-none shadow-md w-full items-center">
        <MobileNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
        <LargeNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
      </nav>
    </>
  );
};

export default Navbar;
