import React, { useState } from "react";
import { FaShoppingCart, FaTimes, FaBars } from "react-icons/fa"; // Import icons for hamburger and close
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="font-inter font-bold bg-white border-gray-200 sticky shadow-2xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <span className="font-inst italic text-[#800000] self-center text-4xl font-semibold whitespace-nowrap">
              Bella Vita
            </span>
          </Link>

          {/* Hamburger Menu Icon (visible on small screens) */}
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <FaBars className="text-[#800000] text-2xl cursor-pointer" />
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex w-full md:w-auto md:block`}
            id="navbar-default"
          >
            <ul className="flex flex-col font-medium mt-4 md:mt-0 md:flex-row md:space-x-8">
              <li>
                <Link
                  to="/history"
                  className="block py-2 pl-3 pr-4 text-[#800000] rounded hover:text-[#a52a2a] md:bg-transparent md:p-0"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  to="/dining"
                  className="block py-2 pl-3 pr-4 text-[#800000] rounded hover:text-[#a52a2a] md:bg-transparent md:p-0"
                >
                  Dining
                </Link>
              </li>
              <li>
                <Link
                  to="/suites"
                  className="block py-2 pl-3 pr-4 text-[#800000] rounded hover:text-[#a52a2a] md:bg-transparent md:p-0"
                >
                  Suites
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-block px-6 py-2 bg-[#800000] text-white rounded-3xl hover:bg-[#a52a2a] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Close Icon (visible when menu is open on mobile) */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } md:hidden flex items-center`}
            onClick={toggleMenu}
          >
            <FaTimes className="text-[#800000] text-2xl cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
