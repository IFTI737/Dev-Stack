import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between px-4 sm:h-[72px] sm:px-5">

        {/* Mobile Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-[#334155] sm:text-3xl lg:hidden"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo */}
        <a href="#">
          <img
            src={Logo}
            alt="Dev Stack"
            className="w-[112px] sm:w-[132px] lg:w-[138px]"
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
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-5">
          <button className="text-[12px] text-[#334155] sm:text-[14px] lg:text-[16px]">
            Sign In
          </button>

          <button className="brand-gradient rounded-full px-3 py-1.5 text-[12px] font-medium text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:px-4 sm:py-2 sm:text-[14px] lg:px-5 lg:text-[16px]">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 px-4 pb-5 lg:hidden">
          <ul className="flex flex-col gap-5 pt-5 text-[15px] text-[#334155] sm:text-[17px]">
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