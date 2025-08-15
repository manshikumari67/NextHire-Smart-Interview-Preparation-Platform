import React, { useState, useEffect } from 'react';
import { FiPlay, FiClock, FiTarget, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { quiz } from '../data/quiz';

const Quiz = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const topics = Object.keys(quiz);

  useEffect(() => {
    let timer;
    if (isQuizStarted && timeLeft > 0 && !isQuizCompleted) {
      timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && isQuizStarted && !isQuizCompleted) {
      handleQuizComplete();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, isQuizStarted, isQuizCompleted]);

  const startQuiz = () => {
    if (!selectedTopic) return;
    const topicQuestions = quiz[selectedTopic];
    const shuffled = [...topicQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, numberOfQuestions);

    setQuizQuestions(selected);
    setUserAnswers(new Array(selected.length).fill(-1));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsQuizStarted(true);
    setIsQuizCompleted(false);
    setTimeLeft(numberOfQuestions * 60);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      handleQuizComplete();
    }
  };

  const handleQuizComplete = () => {
    const finalAnswers = [...userAnswers];
    if (selectedAnswer !== null) {
      finalAnswers[currentQuestionIndex] = selectedAnswer;
    }

    setIsQuizCompleted(true);

    localStorage.setItem(
      'lastQuizResults',
      JSON.stringify({
        topic: selectedTopic,
        questions: quizQuestions,
        userAnswers: finalAnswers,
        completedAt: new Date().toISOString(),
        timeSpent: numberOfQuestions * 60 - timeLeft,
      })
    );

    navigate('/result');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const resetQuiz = () => {
    setIsQuizStarted(false);
    setIsQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setQuizQuestions([]);
    setUserAnswers([]);
    setTimeLeft(0);
  };

  if (!isQuizStarted) {
    return (
      <div className="w-7/12  min-h-screen  mx-auto space-y-8 pb-10 mb-10">
        <div className="text-center mt-12 animate-fadeIn">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-4">
         Take a Quiz
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Challenge yourself with fun and interactive multiple-choice questions.
          <br /> Get instant feedback and track your progress as you go!
        </p>
        <div className="mt-6 flex justify-center">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full shadow-sm">
            🎯 Ready to test your skills?
          </span>
        </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Topic
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose a topic...</option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic} ({quiz[topic].length} questions available)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Questions
              </label>
              <select
                value={numberOfQuestions}
                onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              >
                {[5, 10, 15, 20].map((num) => (
                  <option key={num} value={num}>
                    {num} Questions
                  </option>
                ))}
              </select>
            </div>

            {selectedTopic && (
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Quiz Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-blue-800">
                    <FiTarget size={16} />
                    <span>{numberOfQuestions} Questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800">
                    <FiClock size={16} />
                    <span>{numberOfQuestions} Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800">
                    <FiPlay size={16} />
                    <span>Multiple Choice</span>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={startQuiz}
              disabled={!selectedTopic}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl"
            >
              <FiPlay size={20} />
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6 mt-10">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {selectedTopic}
            </span>
            <span className="text-gray-600">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </span>
          </div>
          <div className="flex items-center gap-2 text-red-600 font-mono">
            <FiClock size={18} />
            {formatTime(timeLeft)}
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          {currentQuestion.question}
        </h2>
        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-xl border-2 ${
                selectedAnswer === index
                  ? 'border-blue-500 bg-blue-50 text-blue-800'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}
                >
                  {selectedAnswer === index && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl"
          >
            {currentQuestionIndex === quizQuestions.length - 1
              ? 'Finish Quiz'
              : 'Next Question'}
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={resetQuiz}
          className="text-gray-500 hover:text-gray-700 font-medium"
        >
          Quit Quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz;
