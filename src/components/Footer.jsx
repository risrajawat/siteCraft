import React from "react";
import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <footer className=" text-white">
      {/* Newsletter Section */}
      <div id="contact">
            <ContactForm></ContactForm>
        </div>
      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 bg-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent font-semibold">
                siteCraft
              </span>
              . All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}