import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black bg-opacity-75 border-b border-gray-700 z-50 pb-10 sm:w-full h-[55px] text-white px-10 flex-col">
      <div className="px-4 mx-auto max-w-7xl lg:px-8">
        <nav className="pt-4 h-20">
            <div className='origin-top-right absolute right-10 hidden sm:flex space-x-4 h-2'>
          <Link to="/" className="text-sm font-medium hover:text-[15px] sm:hover:text-3xl   hover:text-green-500 transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Home</Link>

          <Link to="/create" className="text-sm font-medium hover:text-[15px] sm:hover:text-3xl hover:text-green-500  transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70">Write </Link>

          <Link to="/Articles" className="text-sm font-medium hover:text-[15px] sm:hover:text-3xl hover:text-green-500 transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Articles </Link>

          <Link to="/update" className="text-sm font-medium hover:text-[15px] sm:hover:text-3xl hover:text-green-500 transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70">Yours</Link>

          <Link to="/login" className="text-sm font-medium hover:text-[15px] sm:hover:text-3xl  hover:text-green-500 transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Login</Link>
          </div>

            <button onClick={toggleMenu} className="origin-top-right absolute right-10 flex sm:hidden text-3xl font-medium hover:text-4xl hover:text-green-500 transition-all duration-200  hover:text-opacity-70 focus:text-opacity-70">=</button>
            {isMenuOpen && (
              <div className="origin-top-right absolute right-0 mt-10 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1" role="none">
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Home</Link>
                  <Link to="/create" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Write</Link>
                  <Link to="/Articles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Articles</Link>
                  <Link to="/update" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Update</Link>
                  <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Login</Link>
                </div>
              </div>
            )}
          
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
