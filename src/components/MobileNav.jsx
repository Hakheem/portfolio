import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import CV from "../Constants/CV.pdf";
import images from "../Constants/images";


const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button onClick={handleToggle} className="text-gray-500 z-50 relative">
        {isOpen ? <AiOutlineClose size={24} /> : <BiMenu size={24} />}
      </button>

      {/* overlay for blurring effect */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md z-30 transition-opacity duration-300" />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[70%] items-center justify-between bg-white z-40 shadow-md transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col gap-4 p-6`}
      >
        <ul className="flex flex-col gap-8 items-center mt-16">
          <li>
            <NavLink
              to="/"
              className="text-gray-900 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="text-gray-900 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-gray-900 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        {/*  cv button */}
          <li>
            <a
              href={CV}
              download
              className="bg-primary text-white px-6 py-3 rounded-3xl hover:bg-secondary transition-all"
            >
              Download CV
            </a>
          </li>
        </ul>

        
      </div>
    </div>
  );
};

export default MobileNav;
