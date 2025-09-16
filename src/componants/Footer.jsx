import React, { useEffect, useState } from "react";
import up from "../assets/uppp.png";
import fb from "../assets/facebook.png";
import ins from "../assets/instagram.png";
import lin from "../assets/linkedin.png";
import twi from "../assets/twitter.png";
const Footer = () => {
  const [showUp, setShowUp] = useState(true);
  const [hideUp, setHideUp] = useState(false);

  useEffect(() => {
    if (showUp) {
      const timer = setTimeout(() => setHideUp(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [showUp]);

  // When hideUp becomes true, wait for transition then hide completely
  useEffect(() => {
    if (hideUp) {
      const timer = setTimeout(() => setShowUp(false), 500); // match transition duration
      return () => clearTimeout(timer);
    }
  }, [hideUp]);

  const handleup = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowUp(false);
    setHideUp(false);
  };

  return (
    <>
      <div className="pl-5 gap-6 p-5 flex flex-col   lg:flex-row lg:gap-36   bg-white">
        <div className="flex flex-col gap-2">
          <p>Call</p>
          <h2 className="">919-398-9918</h2>
        </div>
        <div className="flex flex-col gap-2 pb-">
          <p>Follow</p>

          <div className="flex justify-between">
            <ul className="w-30 flex gap-3  ">
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
            {showUp && (
              <img
                onClick={handleup}
                className={`w-10 h-10 go cursor-pointer lg:hidden transition-opacity duration-500 ${
                  hideUp ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                src={up}
                alt="Go to top"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 pb-7">
          <p>Email</p>
          <h2>rizwan919398@gmail.com</h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
