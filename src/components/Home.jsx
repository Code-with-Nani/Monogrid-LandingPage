import React from "react";
import video from "../assests/images/Home.mp4";
import Header from "./Header";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden select-none">
      <Header />
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src={video}
        autoPlay
        loop
        muted
      ></video>
      <div className="content absolute inset-0 px-10 ">
        <div className="upper h-[400px] lg:mt-10 mt-16 text-white Helvetica-Ro uppercase text-[12px]   flex flex-col justify-center items-center gap-10">
          <div className="first lg:-translate-x-[340px] -translate-x-7 md:-translate-x-12 md:translate-y-20  lg:translate-y-0">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "LEADING THE WAY IN DIGITAL INNOVATIONLEADING THE WAY IN DIGITAl "
                  )
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(1000)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </div>
          <div className="second md:translate-y-20 lg:translate-y-0 lg:translate-x-20">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Pioneering experiential storytelling")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </div>
          <div className="third   lg:-translate-x-[270px] -translate-x-7 md:-translate-x-12 md:translate-y-20 lg:translate-y-0">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    " GROUNDBREAKING CONCEPTS AND CREATIVE SOLUTIONS "
                  )
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(1000)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </div>
         
        </div>
        <div className="lower absolute bottom-16 md:bottom-10 ">
          <p className="text-white Helvetica-Lt text-[54px] lg:w-[80%] leading-[1] tracking-tight">
            We are a digital boutique agency, specialized in immersive
            technology and experiential marketing.
          </p>
          <span className="text-white Helvetica-Lt flex justify-end items-center gap-2 text-[15px]  pr-10">
            Scroll down <img className="h-[15px]" src="/icon.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
