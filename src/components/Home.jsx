import React from "react";
import video from "../assests/images/Home.mp4";
import Header from "./Header";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src={video}
        autoPlay
        loop
        muted
      ></video>
      <div className="content absolute inset-0 px-10">
        <div className="upper h-[60vh] text-white Helvetica-Ro uppercase text-[0.7vw] flex flex-col justify-center items-center gap-10">
          <div className="first -translate-x-[30vw]">
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
          <div className="second">
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
          <div className="third translate-x-[30vw]">
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
          <div className="fourth -translate-x-[15vw] translate-y-12">
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
                  .pauseFor(3500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </div>
        </div>
        <div className="lower ">
          <p className="text-white Helvetica-Lt text-[5vw] w-[80%] leading-[1] tracking-tight">
            We are a digital boutique agency, specialized in immersive
            technology and experiential marketing.
          </p>
          <span className="text-white Helvetica-Lt flex justify-end items-center gap-2 text-[1vw]">
            Scroll down <img className="h-[1vw]" src="/icon.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
