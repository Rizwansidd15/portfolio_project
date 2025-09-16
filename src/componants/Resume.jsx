import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/java-script.png";
import rs from "../assets/react.svg";
import tail from "../assets/tl.png";
import nd from "../assets/ndd.png";
const Resume = () => {
  return (
    <div 
          
     className="bg-[#e6dace] mt-4 lg:max-w-full pb-6 ">
      <div  className="flex  items-center justify-center gap-2 pt-15 ">
        <p className="w-5 h-5 bg-blue-700"></p>
        <h1 className="text-3xl font-bold">Resume</h1>
      </div>
      <div className="flex justify-between p-2 pt-11 lg:max-w-2xl lg:ml-80">
        <h1 className="text-xl font-bold">Education </h1>
        <button className="bg-blue-700 text-white px-3 rounded-2xl">
          Download CV
        </button>
      </div>
      <div>
        <div className="bg-white p-4 pt-6 mt-9 ml-5 mr-2 shadow-2xl shadow-black lg:max-w-2xl lg:ml-80 lg:flex lg:gap-10 lg:items-center lg:pl-24">
          <div>
            <h2 className="text-blue-800 font-bold">2019-2020</h2>
            <p className="font-bold">Vedic Inter College </p>
            <p className="mt-4">1Oth Class</p>
            <p>Sisouli/Muzaffarnagar</p>
          </div>
          <div>
            <p className="mt-4 lg:max-w-2xs  ">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
              <br />
              <br />
              I’m a great place for you to tell a story and let your users know
              a little more about you.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 pt-6 mt-9 ml-5 mr-2 shadow-2xl shadow-black lg:max-w-2xl lg:ml-80  lg:flex lg:gap-10 lg:items-center lg:pl-24">
          <div>
            <h2 className="text-blue-800 font-bold">2021-2022</h2>
            <p className="font-bold">D. A. V. Inter college  </p>
            <p className="mt-4">12th Class</p>
            <p>Sisouli/Muzaffarnagar</p>
          </div>
          <div>
            <p className="mt-4 lg:max-w-2xs">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
              <br />
              <br />
              I’m a great place for you to tell a story and let your users know
              a little more about you.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 pt-6 mt-9 ml-5 mr-2 shadow-2xl shadow-black lg:max-w-2xl lg:ml-80  lg:flex lg:gap-10 lg:items-center lg:pl-24">
          <div>
            <h2 className="text-blue-800 font-bold">2022-2025</h2>
            <p className="font-bold">Silver Bells institute for higher Education </p>
            <p className="mt-4">Bechlor of computer applications</p>
            <p>Shamli/Uttar Pradesh</p>
          </div>
          <div>
            <p className="mt-4 lg:max-w-2xs"> 
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
              <br />
              I’m a great place for you to tell a story and let your users know
              a little more about you.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 pt-6 mt-9 ml-5 mr-2 shadow-2xl mb-11 shadow-black lg:max-w-2xl lg:ml-80 ">
          <h1 className="text-2xl font-bold">Professional Skills</h1>

          <div>
            <div className="grid grid-cols-2 gap-5 mt-6 items-center lg:flex">
              <img className="w-15  " src={html} alt="" />
              <img className="w-20  " src={css} alt="" />
              <img className="w-15  " src={js} alt="" />
              <img className="w-15  " src={tail} alt="" />
              <img className="w-15  " src={rs} alt="" />
              <img className="w-15  " src={nd} alt="" />
            </div>
            <div>
              <h1 className="font-bold text-2xl mt-5 ">Language</h1>
              <ul className="pl-5 pt-5">
                <li className="list-disc">Hindi</li>
                <li className="list-disc">English</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
