import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import images from "../Constants/images";
import CV from "../Constants/CV.pdf";
import "./Navbar.scss";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [header, setHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== header) {
        setHeader(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [header]);

  return (
    <div
      className={`sticky top-0 w-full bg-white z-30 ${
        header ? "py-5 shadow-custom" : "py-6"
      } flex justify-between items-center transition-all px-container`}
    >
      <div className="logo">
        <a href="/">
          <img src={images.logo} alt="Logo" className="w-36 h-12" />
        </a>
      </div>

      <ul className="navMenu hidden md:flex gap-6 list-none">
        <li>
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) =>
              `navLink relative text-gray-500 font-medium ${
                isActive ? "activeLink text-primary" : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `navLink relative text-gray-500 font-medium ${
                location.pathname.startsWith("/projects")
                  ? "activeLink text-primary"
                  : ""
              }`
            }
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `navLink relative text-gray-500 font-medium ${
                isActive ? "activeLink text-primary" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <button className="btn1 hidden md:block bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all">
        <a href={CV} download>
          Download CV
        </a>
      </button>

      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
