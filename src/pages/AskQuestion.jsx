import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const AskQuestion = () => {
  const [formData, setFormData] = useState({
    topic: '',
    question: '',
    answer: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const topics = ['JavaScript', 'React', 'DBMS', 'System Design', 'Other'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const existingQuestions = JSON.parse(localStorage.getItem('userQuestions') || '[]');

      const newQuestion = {
        id: Date.now(),
        topic: formData.topic,
        question: formData.question,
        answer: formData.answer,
        createdAt: new Date().toISOString(),
        isUserSubmitted: true
      };

      const updatedQuestions = [...existingQuestions, newQuestion];
      localStorage.setItem('userQuestions', JSON.stringify(updatedQuestions));

      setSubmitStatus('success');
      setFormData({ topic: '', question: '', answer: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.topic && formData.question.trim() && formData.answer.trim();

  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4 py-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          💡 Contribute a Question
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Share your knowledge with the community by posting interview questions and answers you’ve faced.
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Topic Selection */}
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
              Topic <span className="text-red-500">*</span>
            </label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            >
              <option value="">Select a topic...</option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          {/* Question */}
          <div>
            <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
              Interview Question <span className="text-red-500">*</span>
            </label>
            <textarea
              id="question"
              name="question"
              value={formData.question}
              onChange={handleInputChange}
              required
              rows={3}
              placeholder="Enter the interview question..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
            />
          </div>

          {/* Answer */}
          <div>
            <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">
              Sample Answer <span className="text-red-500">*</span>
            </label>
            <textarea
              id="answer"
              name="answer"
              value={formData.answer}
              onChange={handleInputChange}
              required
              rows={6}
              placeholder="Provide a detailed answer..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">* Required fields</div>
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-md transition-all duration-200"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <FaPaperPlane size={18} />
                  Submit Question
                </>
              )}
            </button>
          </div>
        </form>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
            <FaCheckCircle className="text-green-600 text-lg" />
            <div>
              <p className="text-green-800 font-medium">Question submitted successfully!</p>
              <p className="text-green-600 text-sm">Thanks for your contribution.</p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
            <FaExclamationCircle className="text-red-600 text-lg" />
            <div>
              <p className="text-red-800 font-medium">Failed to submit question</p>
              <p className="text-red-600 text-sm">Please try again later.</p>
            </div>
          </div>
        )}
      </div>

      {/* Guidelines */}
      <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">📌 Submission Guidelines</h3>
        <ul className="space-y-2 text-blue-800">
          <li>✔ Make sure your question is clear and specific</li>
          <li>✔ Provide a comprehensive answer with explanations</li>
          <li>✔ Choose the most appropriate topic category</li>
          <li>✔ Include code examples when relevant</li>
        </ul>
      </div>
    </div>
  );
};

export default AskQuestion;
