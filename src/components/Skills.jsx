import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import C from "../assets/C.png";

const Skills = () => {
  return (
    <div
      className=" bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center
    md:flex md:justify-between md:items-center"
    >
      <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
        My <br /> skills
      </h2>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={C} alt="C" />
        <p className="mt-2">C</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={css} alt="C" />
        <p className="mt-2">css</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={html} alt="C" />
        <p className="mt-2">html</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={javascript} alt="C" />
        <p className="mt-2">javascript</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={tailwind} alt="C" />
        <p className="mt-2">tailwind</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={react} alt="C" />
        <p className="mt-2">react</p>
      </div>
    </div>
  );
};

export default Skills;