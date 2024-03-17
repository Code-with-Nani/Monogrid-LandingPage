import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import video from "../assests/images/Home.mp4";
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!isOpen);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="main-nav bg-transparent h-[60px] flex justify-between items-center lg:px-[30px] px-[10px] select-none fixed top-0 left-0 right-0 bottom-0 z-50">
        <div className="left sm:flex justify-center items-center gap-1 hidden">
          <img className="h-[15px]" src="/smile.svg" alt="Icon" />
          <h2 className="Helvetica-robot uppercase text-[15px] text-white cursor-pointer">
            Contact_Us
          </h2>
        </div>
        <div className="center">
          <img className="h-[20px] invert" src="/logo.svg" alt="Icon" />
        </div>
        <div className="right">
          <button
            onClick={openMenu}
            className="Helvetica-robot uppercase text-[15px] text-[#75F348] border-[1.5px] border-[#75F348] px-[8px] py-[2px] rounded-[5px] hover:text-black relative after:absolute after:content-[''] after:h-[100%] after:w-[100%] after:bg-[#75F348] after:left-0 after:bottom-[-100%]  hover:after:bottom-0 hover:after:rounded-none after:transition-all after:ease after:duration-[0.5s] delay-100 overflow-hidden after:rounded-[5px] "
          >
            <span className="z-10 relative">Menu</span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="navbar fixed top-0 left-0 right-0 bottom-0 z-50 text-white h-[100vh] ">
          <div className="upper-nav bg-[#0000FF] h-[90%] ">
            <div className="nav flex justify-between items-center lg:px-[30px] px-[10px] select-none h-[60px]">
              <div className="left sm:flex justify-center items-center gap-1 hidden">
                <img className="h-[15px]" src="/smile.svg" alt="Icon" />
                <h2 className="Helvetica-robot uppercase text-[15px] text-white cursor-pointer">
                  Contact_Us
                </h2>
              </div>
              <div className="center">
                <img className="h-[20px] invert" src="/logo.svg" alt="Icon" />
              </div>
              <div className="right">
                <button
                  onClick={openMenu}
                  className="Helvetica-robot uppercase text-[15px] text-[#75F348] border-[1.5px] border-[#75F348] px-[8px] py-[2px] rounded-[5px] hover:text-black relative after:absolute after:content-[''] after:h-[100%] after:w-[100%] after:bg-[#75F348] after:left-0 after:bottom-[-100%]  hover:after:bottom-0 hover:after:rounded-none after:transition-all after:ease after:duration-[0.5s] delay-100 overflow-hidden after:rounded-[5px] "
                >
                  <span className="z-10 relative">Close</span>
                </button>
              </div>
            </div>
            <div className="cotent lg:px-[30px] px-[10px] pt-10 pb-5 flex flex-col lg:flex-row gap-5 lg:-translate-y-2 justify-center ">
              <div className="left-content lg:w-[30%]">
                <div className="heading Helvetica-Ro flex justify-start uppercase gap-2 text-[15px]">
                  <img className="h-[15px]" src="/icon.svg" alt="" />
                  Menu
                </div>
                <div className="line h-[1px] bg-gray-100 "></div>
                <div className="link list-none Helvetica-Lt text-[33px] lg:text-[50px] leading-[1.3] my-6 lg:my-4">
                  <li className="text-black">Home</li>
                  <li className="hover:text-black">About Us</li>
                  <li className="hover:text-black">Projects</li>
                  <li className="hover:text-black">Contact Us</li>
                </div>
              </div>




              <div className="center-content lg:w-[30%] hidden lg:block">
                <div className="heading Helvetica-Ro flex justify-start uppercase gap-2 text-[15px]">
                  <img className="h-[15px]" src="/icon.svg" alt="" />
                  External
                </div>
                <div className="line h-[1px] bg-gray-100 "></div>
                <div className="link list-none Helvetica-Lt text-[26px] leading-[1.3] my-6">
                  <li className="hover:text-black flex">Meskerade NFT Drop <IoIosArrowRoundForward className="rotate-[-25deg] text-4xl"/></li>
                  <li className="hover:text-black flex">Mesh <IoIosArrowRoundForward className="rotate-[-25deg] text-4xl"/></li>
                  <li className="hover:text-black mt-36 ">STAY IN THE LOOP! SUBSCRIBE TO OUR NEWSLETTER.</li>
                  <button className="text-[12px] Helvetica-Ro uppercase border border-white px-2 pt-1 text-[#75F348] hover:bg-[#75F348] hover:text-black">Subscribe now</button>
                  <li className=" mt-10 text-[15px]">©2024 ALL COPYRIGHTS RESERVED BY MONOGRID</li>
                </div>
              </div>




              <div className="right-content  mt-2 lg:mt-0">
              <div className="heading Helvetica-Ro flex justify-start uppercase gap-2 text-[15px]">
                  <img className="h-[15px]" src="/icon.svg" alt="" />
                 Contact
                </div>
                <div className="line h-[1px] bg-gray-100 "></div>
                <div className="link list-none Helvetica-Lt text-[22px] leading-[1.3] my-6">
                  <li className="flex flex-col"><span>Milan, IT</span> <span>—Via Lecco 18, 20124,</span><span>+39 342 5126242</span></li>
                  <li className="flex gap-3"><FaFacebook /><FaInstagram /><FaLinkedin /></li>
                  <li className="flex gap-3"><span>hello@monogrid.com</span><span>jobs@monogrid.com</span></li>
                 <video className="h-[260px] lg:h-[250px] " src={video} autoPlay muted loop></video>
                </div>
              </div>


            </div>
          </div>

          <div className="upper-nav bg-[#111010] h-[10%]"></div>
        </div>
      )}
    </>
  );
};

export default Header;
