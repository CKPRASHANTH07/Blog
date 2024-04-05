import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-black bg-opacity-75 border-b border-gray-700 z-50  pb-10 sm:w-full h-[70px]  sm:h-16 text-white px-10  flex-col ">
    <div className="px-4 mx-auto max-w-7xl lg:px-8 ">
        <nav className="pt-4 h-20 ">

            <div className="  space-x-4 h-2 sm:w-fit">
                <Link to="/" className="text-sm font-medium hover:text-xl sm:hover:text-3xl   hover:text-green-500 transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Home</Link>

                <Link to="/create" className="text-sm font-medium hover:text-xl sm:hover:text-3xl hover:text-green-500  transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Create</Link>

                <Link to="/read" className="text-sm font-medium hover:text-xl sm:hover:text-3xl hover:text-green-500 transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Read </Link>

                <Link to="/update" className="text-sm font-medium hover:text-xl sm:hover:text-3xl hover:text-green-500 transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70">Update</Link>
                 
                <Link to="/delete" className="text-sm font-medium hover:text-xl sm:hover:text-3xl hover:text-green-500 transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Delete</Link>
           
                <Link to="/login" className="text-sm font-medium hover:text-xl sm:hover:text-3xl  hover:text-green-500 transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Login</Link>

            </div>
            
        </nav>
        
    </div>
    
</header>
  )
}

export default Navbar