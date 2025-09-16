import React from "react";
import { Link } from "react-router-dom";
import cr from "../assets/cross.png";

const Menutoggle = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-[#f4ece6] bg-opacity-95 w-full h-full flex flex-col menu transition-all duration-300">
      <div className="flex justify-end p-4">
        <button onClick={onClose} aria-label="Close menu">
          <img className="w-10" src={cr} alt="close" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 text-2xl font-bold gap-6">
        <Link to="/about" onClick={onClose}>
          About ME
        </Link>
        <Link to="/resume" onClick={onClose}>
          RESUME
        </Link>
        <Link to="/project" onClick={onClose}>
          PROJECT
        </Link>
        <Link to="/contact" onClick={onClose}>
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Menutoggle;
