"use client";

import Link from 'next/link';
import { useState } from 'react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search functionality here
    console.log(searchQuery); // For demonstration purposes
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg transition-all duration-300">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold mx-10">
          <Link href="/" className="text-blue-400 hover:text-blue-500 transition duration-300">
            TrustWords
          </Link>
        </div>

        {/* Search Bar */}
        <style>
          {`
            .glow-effect {
              transition: box-shadow 0.3s ease-in-out;
            }

            .glow-effect:focus {
              box-shadow: 0 0 8px rgba(0, 153, 255, 0.7); /* Adjust the glow color and intensity here */
            }
          `}
        </style>
        <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-grow mx-2">
          <div className="relative w-[60%] mx-auto transition-all duration-300">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search..."
              className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-0 glow-effect text-gray-800"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-1 mr-2 p-0 bg-transparent rounded-full"
            >
              <svg
                className="w-6 h-6 text-blue-600 hover:text-white transition duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M16.5 11A4.5 4.5 0 1111 16.5 4.5 4.5 0 0116.5 11z"
                />
              </svg>
            </button>
          </div>
        </form>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none transition-transform duration-300 transform hover:scale-110">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`md:flex md:items-center ${isOpen ? "block" : "hidden"} transition-all duration-300 mx-14`}>
  <ul className="flex flex-col md:flex-row md:space-x-12">
    {/* Customers Dropdown */}
    <li className="relative group">
      <button className="font-semibold flex items-center py-2 text-gray-200 hover:text-blue-400 transition duration-300">
        Customers
        <svg
          className="ml-1 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {/* Dropdown Menu */}
      <ul className="absolute left-0 hidden bg-gray-800 shadow-lg group-hover:block py-2 space-y-2 transition-all duration-300 z-20">
        <li>
          <Link href="/customers/finance" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition duration-300">
            Finance
          </Link>
        </li>
        <li>
          <Link href="/customers/agencies" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition duration-300">
            Agencies
          </Link>
        </li>
        <li>
          <Link href="/customers/creators" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition duration-300">
            Creators
          </Link>
        </li>
        <li>
          <Link href="/customers/b2b" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition duration-300">
            B2B
          </Link>
        </li>
        <li>
          <Link href="/customers/b2c" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition duration-300">
            B2C
          </Link>
        </li>
      </ul>
    </li>

    {/* Features */}
    <li>
      <Link href="/features" className="font-semibold block py-2 text-gray-200 hover:text-blue-400 transition duration-300">
        Features
      </Link>
    </li>

    {/* Additional Menu Items */}
    <li>
      <Link href="/pricing" className="font-semibold block py-2 text-gray-200 hover:text-blue-400 transition duration-300">
        Pricing
      </Link>
    </li>
    <li>
      <Link href="/about" className="font-semibold block py-2 text-gray-200 hover:text-blue-400 transition duration-300">
        About Us
      </Link>
    </li>
  </ul>
</div>


        {/* Right-Side Buttons */}
        <div className="flex space-x-4">
        <Link href="/Login">
          <span className="py-2 px-4 bg-transparent text-blue-400 border border-blue-400 rounded-[15px] hover:bg-blue-400 hover:text-white transition duration-300 transform hover:scale-105">
            Log In
          </span>
        </Link>
        <Link href="/Signup">
          <span className="py-2 px-4 bg-blue-400 text-white rounded-[15px] hover:bg-blue-500 transition duration-300 transform hover:scale-105">
            Join Us
          </span>
        </Link>
      </div>
      </div>
    </nav>
  );
}
