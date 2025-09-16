import React from "react";
import net from "../assets/netf.jpg";
import pr from "../assets/pro.jpg";

const Project = () => {
  return (
    <>
      <div className="bg-[#E6DACE] pb-15">
        <div className="flex p-2 pt-11 pl-20 items-center  gap-2  lg:max-w-3xl lg:justify-end">
          <p className="w-4 h-4 bg-blue-700 "></p>
          <h1 className="text-2xl font-bold lg:text-4xl">Project</h1>
        </div>
        <div className="items-center lg:max-w-[640px]  lg:relative lg:left-110 z-0 pt-11 pb-6">
          <p className="p-3">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className=" bg-white ml-5 mr-2 mt-3 mb-5 shadow-2xl shadow-black lg:max-w-xl lg:flex lg:relative lg:left-100 ">
          <div className="flex pt-4 flex-col lg:p-10">
            <div className="flex  ">
              <p className="w-2 h-9  bg-blue-700"></p>
              <h2 className="text-blue-600 font-bold pl-5">
                Project Netflix clone
              </h2>
            </div>
            <p className="pl-6 p-1 lg:max-w-2xs ">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="">
            <img className="lg:pt-25" src={pr} alt="" />
          </div>
        </div>
        <div className=" bg-white ml-5 mr-2 mt-3 mb-5 shadow-2xl shadow-black lg:max-w-xl lg:flex lg:relative lg:left-100 ">
          <div className="flex pt-4 flex-col lg:p-10">
            <div className="flex  ">
              <p className="w-2 h-9  bg-blue-700"></p>
              <h2 className="text-blue-600 font-bold pl-5">
                Project Netflix clone
              </h2>
            </div>
            <p className="pl-6 p-1 lg:max-w-2xs ">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="">
            <img className="lg:pt-25" src={pr} alt="" />
          </div>
        </div>
        <div className=" bg-white ml-5 mr-2 mt-3 mb-5 shadow-2xl shadow-black lg:max-w-xl lg:flex lg:relative lg:left-100 ">
          <div className="flex pt-4 flex-col lg:p-10">
            <div className="flex  ">
              <p className="w-2 h-9  bg-blue-700"></p>
              <h2 className="text-blue-600 font-bold pl-5">
                Project Netflix clone
              </h2>
            </div>
            <p className="pl-6 p-1 lg:max-w-2xs ">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="">
            <img className="lg:pt-25" src={net} alt="" />
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Project;
