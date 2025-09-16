import React from "react";
import { motion } from "framer-motion";
import Typing from "./Typing";
import { Link } from "react-router-dom";
import fb from "../assets/facebook.png";
import ins from "../assets/instagram.png";
import lin from "../assets/linkedin.png";
import twi from "../assets/twitter.png";
import men from "../assets/newdppp.jpg";

const About = () => {
  return (
    <>
      <div className="  bg-[#d8c5b3] lg:w-150 lg:h-170 lg:mt-20 lg:flex lg:flex-row w-full h-full mt-40 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-70 bg-[#f4ece6] h-78 mt-10 ml-3 flex flex-col card lg:w-90 lg:h-100 items-center lg:top-60 lg:left-75 absolute top-14 shadow-2xl shadow-black"
        >
          <img className="w-25 h-25 rounded-[50%] mt-6" src={men} alt="" />
          <h2 className="text-2xl font-bold lg:mt-6 ">
            Rizwan <br /> Siddiqui{" "}
          </h2>
          <h2 className="text-2xl mt-5 hidden sm:block">website Developer</h2>
          <div className="mt-7 flex gap-7 lg:absolute lg:left-118 lg:top-30">
            <Link
              to="/resume"
              className="bg-blue-600 text-white px-5 rounded-2xl py-0.5 hover:bg-black hover:text-white flex items-center justify-center"
            >
              RESUME
            </Link>
            <Link
              to="/project"
              className="border-2 *:border-black px-4 rounded-2xl flex items-center justify-center"
            >
              Project
            </Link>
          </div>
          <div className="mt-10 bg-white w-full flex items-center justify-center   p-2 ">
            <ul className="w-30 flex gap-3 items-center justify-center ">
              <li>
                <img src={fb} alt="" />
              </li>
              <li>
                <img src={ins} alt="" />
              </li>
              <li>
                <img src={lin} alt="" />
              </li>
              <li>
                <img src={twi} alt="" />
              </li>
            </ul>
          </div>
        </motion.div>
        <div className="pt-60 p-5 flex flex-col gap-3 lg:absolute lg:left-190  lg:top-10">
          <h1 className="text-3xl font-bold lg:text-8xl">Hello</h1>
          <h2 className="font-bold text-2xl hidden sm:block lg:mt-20">
            <Typing text="Here's who I am & what I do" speed={60} />
          </h2>
          <p className="lg:max-w-2xs">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
            <br />
            <br />
            I’m a great place for you to tell a story and let your users know a
            little more about you
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
