import React from 'react';
import TopicCard from '../components/TopicCard';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const Home = ({ questions }) => {
  const topics = Object.keys(questions);

  return (
    <div>
      <div className='text-center mt-10'>
        <h2 className='text-5xl'>Welcome to</h2>
        <h1 className='text-8xl bg-gradient-to-r from-blue-800 to-pink-600 bg-clip-text text-transparent'>HireNext</h1>
        <p className="text-xl text-black max-w-2xl mx-auto pt-7">
          Master your technical interviews with curated questions and detailed explanations
        </p>
      </div>

      <div className='h-15 w-60 border-2 rounded-lg flex items-center justify-center mx-auto mt-15 '>
        <Link to='/login'>
          <button className='flex text-2xl'>Get Started <span className='pl-4'><FaArrowRight /></span></button>
        </Link>
      </div>

      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Explore Interview Topics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <TopicCard key={topic} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
