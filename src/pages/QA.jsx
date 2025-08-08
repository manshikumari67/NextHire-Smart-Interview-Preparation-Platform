import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { questions } from '../data/questions';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const getTopicColor = (topic) => {
  switch (topic) {
    case 'React':
      return 'bg-blue-100 text-blue-700 border-blue-300';
    case 'JavaScript':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case 'DBMS':
      return 'bg-pink-100 text-pink-700 border-pink-300';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-300';
  }
};

const QA = () => {
  const { topic } = useParams();
  const topicQuestions = questions[topic] || [];
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (index) => {
    setShowAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <Link to="/" className="text-blue-600 hover:underline">← Back to Topics</Link>
      <h2 className="text-3xl font-bold my-6 text-center">{topic} - Questions</h2>

      <div className="space-y-6">
        {topicQuestions.map((q, index) => (
          <div key={index} className="bg-white rounded-2xl shadow border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="mb-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTopicColor(topic)}`}>
                  {topic}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 leading-relaxed mb-4">
                Q{index + 1}: {q.question}
              </h3>

              <button
                onClick={() => toggleAnswer(index)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition"
              >
                {showAnswers[index] ? (
                  <>
                    <FaEyeSlash />
                    Hide Answer
                  </>
                ) : (
                  <>
                    <FaEye />
                    Show Answer
                  </>
                )}
              </button>

              {showAnswers[index] && (
                <div className="bg-blue-50 mt-4 rounded-xl p-4 border-l-4 border-blue-400">
                  <h4 className="font-bold text-gray-800 mb-2">Answer</h4>
                  <p className="text-gray-700 whitespace-pre-line">{q.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QA;
