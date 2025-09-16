import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/menu.png";
import Menutoggle from "./Menutoggle";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:sticky lg:top-0 lg:w-full pb-2 pt-3 z-20  bg-white">
      <nav className="flex lg:p-10  items-center justify-between    h-16 ml-3 ">
        <div className="lg:flex lg:items-center gap-2 ">
          <div className="flex items-center ">
            <p className="w-4 h-4 bg-blue-700 mr-3 "></p>
            <h1 className="text-2xl font-bold "> Rizwan Siddiqui </h1>
          </div>
          <span className="text-xl font-light flex gap-1.5">
            {" "}
            <p className="hidden lg:flex">/</p> Website Developer
          </span>
        </div>
        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden">
          <img className="w-5 mr-4 menu-toggle" src={image} alt="menu" />
        </button>
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 mr-8">
          <li>
            <Link to="/about" className="hover:text-blue-600 focus:border-2 focus:border-black p-2 cursor-pointer">
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link to="/resume" className="hover:text-blue-600 focus:border-2 focus:border-black p-2  cursor-pointer">
              RESUME
            </Link>
          </li>
          <li>
            <Link to="/project" className="hover:text-blue-600 focus:border-2 focus:border-black p-2  cursor-pointer">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600 focus:border-2 focus:border-black p-2  cursor-pointer">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      {/* Mobile menu overlay */}
      <Menutoggle isOpen={isOpen} onClose={toggleMenu} />
    </div>
  );
};

export default Navbar;
