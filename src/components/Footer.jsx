import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 text-gray-200 pt-12 pb-6 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-3">HireNext</h2>
          <p className="text-sm text-gray-300 leading-6">
            Your smart interview preparation platform. Practice, Learn, and Ace your dream job.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="/askQuestion" className="hover:text-yellow-300 transition">Ask Question</a></li>
            <li><a href="/quiz" className="hover:text-yellow-300 transition">Quizzes</a></li>
            <li><a href="/result" className="hover:text-yellow-300 transition">Leaderboard</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="/" className="hover:text-yellow-300 transition">Contact</a></li>
            <li><a href="/" className="hover:text-yellow-300 transition">Privacy Policy</a></li>
            <li><a href="/" className="hover:text-yellow-300 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-yellow-300 hover:text-black transition">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-yellow-300 hover:text-black transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-yellow-300 hover:text-black transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-yellow-300 hover:text-black transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} <span className="text-white font-semibold">HireNext</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
