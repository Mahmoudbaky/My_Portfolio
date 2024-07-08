import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold primary-color ml-4">Eng.Mahmoud</h1>
      <ul className="hidden md:flex mr-4">
        <li className="text-xl ml-4">
          <a href="#work">Work</a>
        </li>
        <li className="text-xl ml-4">
          <a href="#About">About</a>
        </li>
        <li className="text-xl ml-4">
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <div onClick={handleToggle} className="block md:hidden mr-6">
        {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          isOpen
            ? "fixed h-full left-0 top-0 w-[60] bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl font-bold primary-color ml-4 mr-4 mt-4 ">
          Eng.Mahmoud
        </h1>
        <ul className="p-4 text-2xl ml-4">
          <li className="p-2">
            <a href="#work">Work</a>
          </li>
          <li className="p-2">
            <a href="#About">About</a>
          </li>
          <li className="p-2">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
