import React from "react";

const Header = () => {
  return (
    <div className="main-nav bg-gray-600 h-[10vh] flex justify-between items-center px-[1.5vw]">
      <div className="left flex justify-center items-center gap-1">
        <img className="h-[1vw]" src="/smile.svg" alt="Icon" />
        <h2 className="Helvetica-robot uppercase text-[0.9vw] text-white">
          Contact_Us
        </h2>
      </div>
      <div className="center">
        <img className="h-[1.5vw] invert" src="/logo.svg" alt="Icon" />
      </div>
      <div className="right">
        <li cl>

        </li>
        
      </div>
    </div>
  );
};

export default Header;



// <button className="Helvetica-robot uppercase text-[0.9vw] text-[#75F348] border-[1.5px] border-[#75F348] px-[8px] py-[2px] rounded-[5px] hover:bg-[#75F348] hover:text-black ">Menu</button>