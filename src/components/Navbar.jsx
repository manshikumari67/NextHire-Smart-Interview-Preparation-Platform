import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LuBrain } from 'react-icons/lu';
import { HiMenu, HiX, HiHome, HiPlusCircle, HiBookOpen, HiLightBulb } from 'react-icons/hi';
import { HiOutlineTrophy } from "react-icons/hi2";


const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Active link checker
  const isActive = (path) => location.pathname === path;

 // for navbar buttons   
 const authBtnClass =
    'py-[8px] px-[12px] rounded-[8px]  bg-blue-50 text-blue-600 text-gray-700 hover:text-blue-600 text-sm';

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full h-[65px] flex justify-between items-center sticky top-0 z-50 bg-white shadow-lg dark:shadow-gray-500">
        {/* Sticky Navbar container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center ml-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <LuBrain className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HireNext
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-x-4 text-base">
              <li>
                <Link
                  to="/"
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <HiHome size={18} />
                  <span>Home</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/askQuestion"
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive('/askQuestion') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <HiPlusCircle size={18} />
                  <span>Ask Question</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/questions"
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive('/questions') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <HiBookOpen size={18} />
                  <span>Questions</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/quiz"
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive('/quiz') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <HiLightBulb size={18} />
                  <span>Quiz</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/result"
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive('/result') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <HiOutlineTrophy size={18} />
                  <span>Result</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right: Desktop buttons */}
          <div className="hidden md:flex ml-5 mr-3 gap-3">
            {!isLoggedIn && (
              <Link to="/login">
                <button className={authBtnClass}>Log in</button>
              </Link>
            )}
            {!isLoggedIn && (
              <Link to="/signup">
                <button className={authBtnClass}>Sign Up</button>
              </Link>
            )}
            {isLoggedIn && (
              <Link to="/">
                <button
                  className={authBtnClass}
                  onClick={() => {
                    setIsLoggedIn(false);
                    toast.success('Logged Out');
                  }}
                >
                  Log Out
                </button>
              </Link>
            )}
          </div>

          {/* Mobile: Login + Hamburger */}
          <div className="md:hidden flex items-center gap-2 mr-2">
            {!isLoggedIn ? (
              <Link to="/login">
                <button className="py-1 px-3 rounded-[8px] bg-blue-50 text-blue-600 text-gray-700 hover:text-blue-600 hover:bg-blue-50 text-sm">
                  Log in
                </button>
              </Link>
            ) : (
              <button
                className="py-1 px-3 rounded-[8px] bg-blue-50 text-blue-600 text-gray-700 hover:text-blue-600 hover:bg-blue-50 text-sm"
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success('Logged Out');
                }}
              >
                Log Out
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-3 pb-4 space-y-1">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <HiHome size={18} /> Home
              </Link>

              <Link
                to="/askQuestion"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/askQuestion') ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <HiPlusCircle size={18} /> Ask Question
              </Link>

              <Link
                to="/questions"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/questions') ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <HiBookOpen size={18} /> Questions
              </Link>

              <Link
                to="/quiz"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/quiz') ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <HiLightBulb size={18} /> Quiz
              </Link>

              <Link
                to="/result"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/result') ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <HiOutlineTrophy size={18} /> Result
              </Link>

              {/* Mobile Auth buttons */}
              <div className="pt-2 border-t mt-2">
                {!isLoggedIn && (
                  <>
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full py-2 rounded-[8px] border border-blue-950 bg-gray-700 text-white">
                        Log in
                      </button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="mt-2 block">
                      <button className="w-full py-2 rounded-[8px] border border-blue-950 bg-gray-700 text-white">
                        Sign Up
                      </button>
                    </Link>
                  </>
                )}
                {isLoggedIn && (
                  <Link
                    to="/"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsLoggedIn(false);
                      toast.success('Logged Out');
                    }}
                  >
                    <button className="w-full py-2 rounded-[8px] border border-blue-950 bg-gray-700 text-white">
                      Log Out
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
