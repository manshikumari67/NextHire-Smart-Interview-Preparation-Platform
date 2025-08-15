import React from 'react';
import TopicCard from '../components/TopicCard';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import About from '../components/About';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import CallSection from '../components/CallSection';

const Home = ({ questions }) => {
  const topics = Object.keys(questions);

  return (
    <div>
      <div className="text-center mt-16 relative">
          <h2 className="text-4xl sm:text-5xl font-medium">Welcome to</h2>
          <h1 className="text-6xl sm:text-8xl bg-gradient-to-r from-blue-800 to-pink-600 bg-clip-text text-transparent font-bold">
            HireNext
          </h1>

          {/* Decorative underline */}
         <div className="w-32 h-1 bg-gradient-to-r from-blue-800 to-pink-600 mx-auto mt-3 rounded-full"></div>
           <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto pt-7 px-4">
             Master your technical interviews with curated questions and detailed explanations
           </p>
        </div>

        {/* Button */}
          <div className="w-48 sm:w-56 md:w-64 h-14 rounded-full mx-auto mt-12
                bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 
                text-white flex items-center justify-center shadow-lg shadow-black/70
                hover:shadow-purple-900/80 hover:scale-105 transition-all duration-300 ease-in-out">
            <Link to="/login" className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                Get Started
              <span className="text-xl sm:text-2xl transition-transform group-hover:translate-x-1">
                <FaArrowRight />
              </span>
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

      <About/>
      <FeaturesSection/>
      <CallSection/>
      <HowItWorks/>
    
    </div>
  );
};

export default Home;
