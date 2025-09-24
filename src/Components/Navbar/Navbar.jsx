import React, { useState } from 'react'
import navLogo2 from '../../../src/assets/Currency.png'
import navLogo1 from '../../../src/assets/logo.png'

const Navbar = ({ ballance }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={navLogo1} alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-lg hidden sm:block">My App</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold">
          <li>
            <a href="#" className="hover:text-rose-800">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-rose-800">
              Fixture
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-rose-800">
              Teams
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-rose-800">
              Schedule
            </a>
          </li>
        </ul>

        {/* Coin Button */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FE9F30] to-[#E05C51] text-white rounded-lg font-medium">
            <span>{ballance}</span>
            <img src={navLogo2} alt="Coin" className="w-5 h-5" />
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-3 p-4 font-semibold">
            <li>
              <a href="#" className="hover:text-rose-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-rose-800">
                Fixture
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-rose-800">
                Teams
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-rose-800">
                Schedule
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
