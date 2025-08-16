import React from "react";
import { useNavigate } from "react-router-dom";

const TopicCard = ({ topic, color = "from-pink-600 to-blue-600" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/qa/${topic}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer rounded-2xl p-10 text-center text-white bg-gradient-to-r ${color} shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
    >
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6">{topic}</h2>

      {/* Button */}
      <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium shadow hover:bg-gray-100 transition flex items-center justify-center mx-auto">
         Explore It →
      </button>
    </div>
  );
};

export default TopicCard;
