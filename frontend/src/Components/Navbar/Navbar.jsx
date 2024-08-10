import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
  <nav className=' flex justify-between h-14 w-full bg-gray-800 text-white shadow-lg fixed top-0'>
    <div className='flex sm:ml-14'>
      <img className=' h-13 w-12 rounded-full sm:mr-4' src={require('../Assets/photo.jpeg')}></img>
      <span className=' text-white font-medium text-xs sm:text-white sm:font-extrabold pt-3 sm:text-2xl '>Himanshu Thakur</span>
    </div>
    <div className='  text-white font-medium text-xs flex justify-end  sm:font-bold pt-3 sm:text-xl mr-2'>
      <ul className=' flex justify-between space-x-2 sm:space-x-9 '>
        <li>
        <Link to="/" className="text-white border-b-2 border-transparent hover:border-yellow-200">
              Home
            </Link>
        </li>
        <li>
        <Link to="/services" className="text-white border-b-2 border-transparent hover:border-yellow-200">
              Projects
            </Link>
        </li>
        <li>
        <Link to="/about" className="text-white border-b-2 border-transparent hover:border-yellow-200">
              About
            </Link>
        </li>
        <li>
        <Link to="/Contact" className="text-white border-b-2 border-transparent hover:border-yellow-200">
              Contact
            </Link>
        </li>
        <li>
        <Link to="/cart" className="text-white border-b-2 border-transparent hover:border-yellow-200">
              Skills
            </Link>
        </li>
      </ul>


    </div>
  </nav>
  );
};

export default Navbar