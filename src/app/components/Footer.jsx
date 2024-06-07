import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer text-white bg-[#181818] py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left w-full md:w-auto">
            <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 font-bold">Haseeb Ur Rehman</span>
          </div>
          {/*
          <div className="text-center md:text-right w-full md:w-auto h-auto">
            <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 font-bold">Subscribe to our newsletter</span>
            <form className="mt-4 flex flex-col sm:flex-row justify-center md:justify-end items-center w-full space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-full text-black w-full sm:w-auto flex-grow focus:outline-none md:w-fit"
              />
              <button className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white px-4 py-2 rounded-full focus:outline-none w-full sm:w-auto md:w-fit" >
                Subscribe
              </button>
            </form>
          </div>
  --> */}
          <div className="flex flex-col md:flex-row text-xl  items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-fit text-center md:text-left">
            <a href="#about" className="text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 duration-300">About</a>
            <a href="#projects" className="text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 duration-300">Projects</a>
            <a href="#contact" className="text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 duration-300">Contact</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-start space-x-6 mt-8">
          <a
            href="https://www.facebook.com/profile.php?id=100010588054608"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebook className="text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/haseeb-ur-rehman-3b8b771b7/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://github.com/HaseeburRehma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
