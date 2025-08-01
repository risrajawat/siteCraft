import React, { useState } from "react";
import { SiSnapcraft } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="shadow-xl top-0 sticky z-50 bg-white/60 backdrop-blur-md text-white rounded-sm mx-0"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-17">
          {/* Logo */}
          <div className="flex items-center">
            <span className="cursor-pointer text-2xl flex gap-1  font-bold bg-gradient-to-r  from-purple-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
               <SiSnapcraft color="blue" className="mt-[6px]"></SiSnapcraft> 
                siteCraft
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:scale-105"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:scale-105"
            >
              About
            </a>
            <a
              href="#guide"
              className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:scale-105"
            >
              How it Works
            </a>
            <a
              href="#feature"
              className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:scale-105"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:scale-105"
            >
              Contact
            </a>
            <a
              href="#generate"
              className="text-gray-700 hover:text-purple-500 font-medium transition-all duration-300 hover:scale-105"
            >
              Generate
            </a>
          </div>

          {/* Mobile Menu Button - Only visible on small screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="cursor-pointer text-gray-700 hover:text-purple-600 focus:outline-none transition-colors duration-200"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200">
            <a
              href="#"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#feature"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200 font-medium"
            >
              Features
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200 font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}