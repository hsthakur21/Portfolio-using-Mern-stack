import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 flex bottom-0">
      <div className="container mx-auto flex justify-between items-center ml-10">
        <div className="flex space-x-4">
          <a 
            href="https://www.instagram.com/mr__thakurshab?igsh=NzNiNXRld3p6Zjlp" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400" 
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/himanshu-thakur-8754a418a" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400" 
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="mailto:himanshussthakur2002@gmail.com" 
            className="hover:text-gray-400" 
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
          <a 
            href="https://github.com/hsthakur21" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400" 
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="tel:9548868770" 
            className="hover:text-gray-400" 
            aria-label="Phone"
          >
            <FaPhone size={24} /> 
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



