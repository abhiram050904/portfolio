import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGeeksforgeeks, SiCodingninjas } from 'react-icons/si';
import { TbBrandLeetcode } from 'react-icons/tb';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <strong><h1 className="text-xl font-bold">ABHIRAM GATTAMNENI</h1></strong>
      </div>

      <div className='hidden md:flex items-center space-x-8'>
        <Link to="/" className="hover:text-cyan-300 transition hover:scale-150 transform transition duration-200">Home</Link>
        <Link to="/about" className="hover:text-cyan-300 transition hover:scale-150 transform transition duration-200">About</Link>
        <Link to="/technologies" className="hover:text-cyan-300 transition hover:scale-150 transform transition duration-200">Technologies</Link>
        <Link to="/projects" className="hover:text-cyan-300 transition hover:scale-150 transform transition duration-200">Projects</Link>
        <Link to="/education" className="hover:text-cyan-300 transition hover:scale-150 transform transition duration-200">Education</Link>
        <Link to="/resume" className="hover:text-cyan-300 transition hover:scale-150 transform transition duration-200">Contact Me</Link>
      </div>

      <div className='flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/abhiram-gattamneni-309183258" target="_blank" rel="noopener noreferrer" className='hover:text-cyan-700 hover:scale-150 transform transition duration-200'><FaLinkedin /></a>
        <a href="https://github.com/abhiram050904" target="_blank" rel=" norefernoopenerrer" className='hover:text-green-300 hover:scale-150 transform transition duration-200'><FaGithub /></a>
        <a href="https://www.instagram.com/abhiram050904?igsh=aGo2OWIwdGNyZ3Uy" target="_blank" rel="noopener noreferrer" className='hover:text-red-500 hover:scale-150 transform transition duration-200'><FaInstagram /></a>
        <a href="https://www.geeksforgeeks.org/user/abhiram050904/" target="_blank" rel="noopener noreferrer" className='hover:text-green-500 hover:scale-150 transform transition duration-200'><SiGeeksforgeeks /></a>
        <a href="https://www.naukri.com/code360/profile/858af9e7-084f-4258-915e-0e87d2998f27" target="_blank" rel="noopener noreferrer" className='hover:text-red-400 hover:scale-150 transform transition duration-200'><SiCodingninjas /></a>
        <a href="https://leetcode.com/u/abhiram050904/" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-500 hover:scale-150 transform transition duration-200'><TbBrandLeetcode /></a>
      </div>
    </nav>
  );
}

export default Navbar;
