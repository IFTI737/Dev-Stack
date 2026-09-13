import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5">

        {/* Mobile Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl text-[#334155] lg:hidden"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo */}
        <a href="#">
          <img
            src={Logo}
            alt="Dev Stack"
            className="w-[138px]"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-9 text-[16px] text-[#334155] lg:flex">
          <li>
            <a href="#" className="font-medium text-[#f43f8f]">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-[#f43f8f]">
              Technologies
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-[#f43f8f]">
              Projects
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-[#f43f8f]">
              About
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-[#f43f8f]">
              Contact
            </a>
          </li>
        </ul>

        {/* Auth */}
        <div className="flex items-center gap-5">
          <button className="text-[16px] text-[#334155]">
            Sign In
          </button>

          <button className="brand-gradient rounded-full px-5 py-2 text-[16px] font-medium text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 px-5 pb-6 lg:hidden">
          <ul className="flex flex-col gap-6 pt-6 text-[17px] text-[#334155]">
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Technologies
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;