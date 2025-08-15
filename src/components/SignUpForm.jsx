
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUpForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const changeHandler = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords not matched!");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created Successfully!");
    navigate("/login");
  };

  return (
    <form onSubmit={submitHandler} className="w-full flex flex-col gap-6 animate-fadeIn">
      {/* Name fields */}
      <div className="flex gap-4">
        <label className="flex-1">
          <p className="text-sm text-gray-700 mb-1">First Name <sup className="text-pink-500">*</sup></p>
          <input
            required
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="Enter First Name"
            onChange={changeHandler}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none transition"
          />
        </label>
        <label className="flex-1">
          <p className="text-sm text-gray-700 mb-1">Last Name <sup className="text-pink-500">*</sup></p>
          <input
            required
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Enter Last Name"
            onChange={changeHandler}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none transition"
          />
        </label>
      </div>

      {/* Email */}
      <label>
        <p className="text-sm text-gray-700 mb-1">Email Address <sup className="text-pink-500">*</sup></p>
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter Email"
          onChange={changeHandler}
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none transition"
        />
      </label>

      {/* Passwords */}
      <div className="flex gap-4">
        <label className="relative flex-1">
          <p className="text-sm text-gray-700 mb-1">Password <sup className="text-pink-500">*</sup></p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            placeholder="Enter Password"
            onChange={changeHandler}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none transition"
          />
          <span className="absolute right-3 top-[38px] cursor-pointer text-gray-600"
            onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible fontSize={20} /> : <AiOutlineEye fontSize={20} />}
          </span>
        </label>

        <label className="relative flex-1">
          <p className="text-sm text-gray-700 mb-1">Confirm Password <sup className="text-pink-500">*</sup></p>
          <input
            required
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Confirm Password"
            onChange={changeHandler}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none transition"
          />
          <span className="absolute right-3 top-[38px] cursor-pointer text-gray-600"
            onClick={() => setShowConfirmPassword(prev => !prev)}>
            {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={20} /> : <AiOutlineEye fontSize={20} />}
          </span>
        </label>
      </div>

      <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-purple-900 transition-all">
        Create Account
      </button>

      <p className="text-center text-sm text-gray-600 mt-2">
        Already have an account?{" "}
        <a href="/login" className="text-purple-700 font-semibold hover:underline">
          Sign In
        </a>
      </p>
    </form>
  );
};

export default SignUpForm;
