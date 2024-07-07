import React from "react";
import MahmoudPhoto from "../assets/Mahmoud.png";
import { TypeAnimation } from "react-type-animation";

// grid-cols-3 fix desktop view
// grid-cols-1 fix mobile view
// grid grid-cols-3 sm:gird-cols-3
// sm:column
// sm:flex-col

//col-span-1
//col-span-2

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:gird-cols-3 lg:flex gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black ">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img className="rounded-full" src={MahmoudPhoto} alt="Mahmoud" />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'am a</span>
          <br />
          <TypeAnimation
            sequence={[
              "Developer",
              1000,
              "Front End",
              1000,
              "Embedded SW",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="primary-color"
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          I am a software engineer with a passion for web development and
          embedded systems.
        </p>
        <div className="my-8">
          <a
            href="#"
            className="px-6 py-3 w-full rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download cv
          </a>
          <a
            href="#"
            className="ml-4 px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500
          text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
