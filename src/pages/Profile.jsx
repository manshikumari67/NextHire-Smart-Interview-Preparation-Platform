import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // ✅ Import added

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-12 px-6 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-full text-center">
        
        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-6">
          <FaUserCircle className="text-gray-500" size={120} />
        </div>

        {/* User Info */}
        <h2 className="text-3xl font-bold text-gray-800">Manshi Kumari</h2>
        <p className="text-gray-600 mb-8">manshi@example.com</p>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 text-gray-700 mb-10">
          <div className="p-3 rounded-lg bg-gray-100 shadow-sm">
            <p className="text-xl font-bold text-purple-600">120</p>
            <p className="text-sm">Questions</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-100 shadow-sm">
            <p className="text-xl font-bold text-pink-600">15</p>
            <p className="text-sm">Quizzes</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-100 shadow-sm">
            <p className="text-xl font-bold text-blue-600">5</p>
            <p className="text-sm">Rank</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/edit-profile"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          >
            Edit Profile
          </Link>

          <Link
            to="/"
            className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
