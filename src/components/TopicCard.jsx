import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopicCard = ({ topic }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/qa/${topic}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition"
    >
      <h2 className="text-2xl font-bold text-center">{topic}</h2>
    </div>
  );
};

export default TopicCard;
