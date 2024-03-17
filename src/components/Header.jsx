import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="main-nav bg-transparent h-[10vh] flex justify-between items-center px-[1.5vw] select-none fixed top-0 left-0 right-0 bottom-0 z-50">
      <div className="left flex justify-center items-center gap-1 ">
        <img className="h-[1vw]" src="/smile.svg" alt="Icon" />
        <h2 className="Helvetica-robot uppercase text-[0.9vw] text-white cursor-pointer">
          Contact_Us
        </h2>
      </div>
      <div className="center">
        <img className="h-[1.5vw] invert" src="/logo.svg" alt="Icon" />
      </div>
      <div className="right">
        <button className="Helvetica-robot uppercase text-[0.9vw] text-[#75F348] border-[1.5px] border-[#75F348] px-[8px] py-[2px] rounded-[5px] hover:text-black relative after:absolute after:content-[''] after:h-[100%] after:w-[100%] after:bg-[#75F348] after:left-0 after:bottom-[-100%]  hover:after:bottom-0 hover:after:rounded-none after:transition-all after:ease after:duration-[0.5s] delay-100 overflow-hidden after:rounded-[5px] ">
          <span className="z-10 relative">Menu</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
