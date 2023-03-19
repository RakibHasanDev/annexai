import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '.././../assests/logo.png'

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <div className="bg-gray-100 sticky top-0 z-50 py-1 pb-2">
            <div className="px-4 md:px-14 py-2 mx-auto ">
                <div className="relative flex items-center justify-between">
                    <NavLink
                        to='/'
                        aria-label=" AnneXAI"
                        title="AnneXAI"
                       
                        
                    >
                        <div className='text-center '>
                            <img src={logo} className=' w- 20 h-16  ' alt="" />
                            <h1 className='text-2xl font-semibold  -mt-2 text-center'>Anne<span className='text-red-600'>X</span>AI</h1>
                       </div>
                    </NavLink>

                    <ul className="flex items-center hidden space-x-6 lg:flex">
                        <li>
                            <NavLink
                                to='/home'
                                aria-label="Home"
                                title="Home"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                            >
                                Home

                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Products'
                                aria-label="Products"
                                title="Products"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                            >
                                Products

                            </NavLink>
                        </li>
                       
                        <li>
                            <NavLink
                                to='/usecase'
                                aria-label="Use-Cases"
                                title="Use-Cases"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                            >
                                Use-Cases


                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                               to='/about'
                                aria-label="About Us"
                                title="About Us"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                            >
                                About Us



                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                               to='/pricing'
                                aria-label="Pricing"
                                title="Pricing"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                            >
                                Pricing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/alliance'
                                aria-label="Alliance"
                                title="Alliance"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                            >
                                Alliance
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Contact'
                                aria-label="Contact "
                                title=" Contact"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                               to='/login'
                                aria-label=" Signup/Sign in"
                                title=" Signup/Sign in"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                            >
                                Signup/Sign in

                            </NavLink>
                        </li>
                      
                       
                    </ul>

                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-700" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-gray-100 border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <NavLink
                                                to='/'
                                                aria-label=" AnneXAI"
                                                title="AnneXAI"

                                            >
                                                <div className=''>
                                                    <img src={logo} className=' w- 20 h-20  ' alt="" />
                                                    <h1 className='text-2xl font-semibold  -mt-2 '>Anne<span className='text-red-600'>X</span>AI</h1>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>                                   
                                        
                                        <ul className="space-y-4 text-start">
                                            <li>
                                                <NavLink
                                                    to='/home'
                                                    aria-label="Home"
                                                    title="Home"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Home

                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/Products'
                                                    aria-label="Products"
                                                    title="Products"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Products

                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    to='/usecase'
                                                    aria-label="Use-Cases"
                                                    title="Use-Cases"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Use-Cases


                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/about'
                                                    aria-label="About Us"
                                                    title="About Us"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    About Us



                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/pricing'
                                                    aria-label="Pricing"
                                                    title="Pricing"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Pricing
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/alliance'
                                                    aria-label="Alliance"
                                                    title="Alliance"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Alliance
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/Contact'
                                                    aria-label="Contact "
                                                    title=" Contact"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Contact
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/login'
                                                    aria-label=" Signup/Sign in"
                                                    title=" Signup/Sign in"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Signup/Sign in

                                                </NavLink>
                                            </li>


                                        </ul>

                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;